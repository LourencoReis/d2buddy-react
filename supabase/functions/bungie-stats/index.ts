// Supabase Edge Function: bungie-stats
// Fetches raid completion counts from Bungie API with DB caching
// Deno runtime, no Express/axios

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Known raid hashes (director activity hash variants)
const RAID_MAP: Record<string, number[]> = {
  "Last Wish": [2122313384],
  "Vault of Glass": [3881495763],
  "Garden of Salvation": [3213556450],
  "Deep Stone Crypt": [4148187374],
  "Vow of the Disciple": [1661734046],
  "King's Fall": [2906950631],
  "Root of Nightmares": [119944200],
  "Crota's End": [2918919505],
  "Salvation's Edge": [3976949817]
};

const ALL_RAID_HASHES = new Set(Object.values(RAID_MAP).flat());
const CACHE_TTL_SECONDS = 120; // 2 minutes

interface RaidStat {
  name: string;
  completions: number;
}

interface CachedData {
  raids: RaidStat[];
  summary: { totalRaidCompletions: number };
  meta: {
    membershipId: string;
    membershipType: number;
    cached: boolean;
    at: string;
    source: string;
  };
}

serve(async (req) => {
  // CORS headers
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  try {
    // Environment variables
    const BUNGIE_API_KEY = Deno.env.get("BUNGIE_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!BUNGIE_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("Missing environment variables");
    }

    // Get Bearer token from request
    const authHeader = req.headers.get("Authorization") || "";
    const accessToken = authHeader.startsWith("Bearer ")
      ? authHeader.slice(7)
      : "";
    
    if (!accessToken) {
      return new Response(JSON.stringify({ error: "Missing Bearer token" }), {
        status: 401,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    }

    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Step 1: Get Destiny memberships
    const membershipRes = await fetch(
      "https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "X-API-Key": BUNGIE_API_KEY,
        },
      }
    );

    if (!membershipRes.ok) {
      throw new Error(`Bungie membership fetch failed: ${membershipRes.status}`);
    }

    const membershipData = await membershipRes.json();
    const dm = membershipData.Response?.destinyMemberships?.[0];
    
    if (!dm) {
      return new Response(
        JSON.stringify({ error: "No Destiny memberships found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        }
      );
    }

    const cacheKey = `${dm.membershipType}:${dm.membershipId}`;

    // Step 2: Check cache in database
    const { data: cached, error: cacheError } = await supabase
      .from("bungie_stats_cache")
      .select("data, updated_at")
      .eq("cache_key", cacheKey)
      .single();

    if (!cacheError && cached) {
      const age = (Date.now() - new Date(cached.updated_at).getTime()) / 1000;
      if (age < CACHE_TTL_SECONDS) {
        const cachedPayload = cached.data as CachedData;
        cachedPayload.meta.cached = true;
        return new Response(JSON.stringify(cachedPayload), {
          headers: { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "X-Cache": "HIT"
          },
        });
      }
    }

    // Step 3: Fetch character list
    const profileRes = await fetch(
      `https://www.bungie.net/Platform/Destiny2/${dm.membershipType}/Profile/${dm.membershipId}/?components=100`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "X-API-Key": BUNGIE_API_KEY,
        },
      }
    );

    if (!profileRes.ok) {
      throw new Error(`Profile fetch failed: ${profileRes.status}`);
    }

    const profileData = await profileRes.json();
    const charIds = Object.keys(profileData.Response?.characters?.data || {});

    if (charIds.length === 0) {
      return new Response(
        JSON.stringify({ error: "No characters found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        }
      );
    }

    // Step 4: Fetch aggregate stats for each character
    const charStatsPromises = charIds.map((cid) =>
      fetch(
        `https://www.bungie.net/Platform/Destiny2/${dm.membershipType}/Account/${dm.membershipId}/Character/${cid}/Stats/AggregateActivityStats/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "X-API-Key": BUNGIE_API_KEY,
          },
        }
      )
        .then((res) => (res.ok ? res.json() : { Response: { activities: [] } }))
        .then((data) => data.Response || { activities: [] })
        .catch(() => ({ activities: [] }))
    );

    const charStats = await Promise.all(charStatsPromises);

    // Step 5: Aggregate completions by hash
    const completionsByHash = new Map<number, number>();
    
    for (const cs of charStats) {
      for (const a of cs.activities || []) {
        const hash = a.activityHash ?? a.directorActivityHash;
        if (!hash || !ALL_RAID_HASHES.has(hash)) continue;

        const val =
          a.values?.activityCompletions?.basic?.value ??
          a.values?.activityCompletions?.value ??
          a.values?.activityCompletions ??
          0;

        completionsByHash.set(
          hash,
          (completionsByHash.get(hash) || 0) + (Number(val) || 0)
        );
      }
    }

    // Step 6: Build raid stats
    const raids: RaidStat[] = Object.entries(RAID_MAP).map(([name, hashes]) => {
      const count = hashes.reduce(
        (sum, h) => sum + (completionsByHash.get(h) || 0),
        0
      );
      return { name, completions: count };
    });

    const totalRaidCompletions = raids.reduce((s, r) => s + r.completions, 0);

    const payload: CachedData = {
      raids,
      summary: { totalRaidCompletions },
      meta: {
        membershipId: dm.membershipId,
        membershipType: dm.membershipType,
        cached: false,
        at: new Date().toISOString(),
        source: "supabase_edge_function",
      },
    };

    // Step 7: Store in cache
    await supabase
      .from("bungie_stats_cache")
      .upsert(
        {
          cache_key: cacheKey,
          data: payload,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "cache_key" }
      );

    return new Response(JSON.stringify(payload), {
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-Cache": "MISS"
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch raid stats",
        details: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      }
    );
  }
});
