const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
// Allow frontend from any origin (Render/Vercel/custom domain)
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Discord OAuth configuration
const DISCORD_CLIENT_ID = '1425552201828401304';
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET || 'tD9SuQwhhJzP3LEN1ymJel8iIJUerMQe';
const DISCORD_REDIRECT_URI = 'http://localhost:3000/auth/callback';

// Exchange authorization code for access token
app.post('/api/auth/discord', async (req, res) => {
  const { code } = req.body;
  
  console.log('Received Discord auth request with code:', code);

  if (!code) {
    console.log('Error: No authorization code provided');
    return res.status(400).json({ error: 'Authorization code is required' });
  }

  try {
    console.log('Attempting to exchange code for access token...');
    
    // Exchange code for access token
    const tokenResponse = await axios.post('https://discord.com/api/oauth2/token', 
      new URLSearchParams({
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: DISCORD_REDIRECT_URI,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    console.log('Successfully got access token');
    const { access_token } = tokenResponse.data;

    // Get user information from Discord
    console.log('Fetching user information from Discord...');
    const userResponse = await axios.get('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const userData = userResponse.data;
    console.log('Successfully got user data:', userData.username);

    // Return user data (in production, you'd store this in a database)
    res.json({
      user: {
        id: userData.id,
        username: userData.username,
        discriminator: userData.discriminator,
        avatar: userData.avatar,
        email: userData.email,
        avatarUrl: userData.avatar 
          ? `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`
          : `https://cdn.discordapp.com/embed/avatars/${userData.discriminator % 5}.png`
      },
      token: access_token // In production, you'd return a JWT or session token instead
    });

  } catch (error) {
    console.error('Discord OAuth error:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to authenticate with Discord',
      details: error.response?.data || error.message
    });
  }
});

// Get user profile (for when user revisits the site)
app.get('/api/user/profile', async (req, res) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No valid token provided' });
  }

  const token = authHeader.substring(7);

  try {
    const userResponse = await axios.get('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const userData = userResponse.data;

    res.json({
      user: {
        id: userData.id,
        username: userData.username,
        discriminator: userData.discriminator,
        avatar: userData.avatar,
        email: userData.email,
        avatarUrl: userData.avatar 
          ? `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`
          : `https://cdn.discordapp.com/embed/avatars/${userData.discriminator % 5}.png`
      }
    });

  } catch (error) {
    console.error('Profile fetch error:', error.response?.data || error.message);
    res.status(401).json({ error: 'Invalid or expired token' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

// =====================
// Bungie: Raid counts
// =====================

// Minimal in-memory cache to keep responses snappy and under rate limits
const CACHE = new Map();
const CACHE_TTL_MS = 60 * 1000; // 60 seconds

// Known raid hashes (director activity hash variants). Update as needed.
const RAID_MAP = {
  "Last Wish": [1661734046, 2122313384, 2214608154],
  "Vault of Glass": [3881495763, 1441982566],
  "Garden of Salvation": [3213556450, 2214608155],
  "Deep Stone Crypt": [4148187374, 910380154],
  "Vow of the Disciple": [1661734046, 4217492330],
  "King's Fall": [2906950631, 3458480159],
  "Root of Nightmares": [119944200],
  "Crota's End": [2918919505, 4179289725],
  "Salvation's Edge": [3976949817, 4130534029]
};

const ALL_RAID_HASHES = new Set(Object.values(RAID_MAP).flat());

function withTimeout(promise, ms, label) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`Timeout: ${label} after ${ms}ms`)), ms)
    ),
  ]);
}

async function bungieGet(path, accessToken) {
  const url = `https://www.bungie.net/Platform${path}`;
  const res = await withTimeout(
    axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'X-API-Key': process.env.BUNGIE_API_KEY || ''
      },
      timeout: 15000,
      validateStatus: () => true,
    }),
    20000,
    path
  );

  if (res.status < 200 || res.status >= 300) {
    const body = typeof res.data === 'string' ? res.data : JSON.stringify(res.data);
    throw new Error(`Bungie ${path} -> ${res.status}: ${body?.slice?.(0, 300)}`);
  }
  if (res.data && res.data.ErrorCode && res.data.ErrorCode !== 1) {
    throw new Error(`Bungie ${path} error: ${res.data.Message || res.data.ErrorStatus}`);
  }
  return res.data.Response;
}

app.get('/api/stats-simple', async (req, res) => {
  // CORS pre-set above
  try {
    if (!process.env.BUNGIE_API_KEY) {
      return res.status(500).json({ error: 'BUNGIE_API_KEY not set on server' });
    }

    const authHeader = req.headers.authorization || '';
    const accessToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';
    if (!accessToken) {
      return res.status(401).json({ error: 'Missing Bearer token' });
    }

    // Who am I?
    const memberships = await bungieGet('/User/GetMembershipsForCurrentUser/', accessToken);
    const dm = (memberships.destinyMemberships || [])[0];
    if (!dm) return res.status(404).json({ error: 'No Destiny memberships found' });

    const cacheKey = `raidCounts:${dm.membershipType}:${dm.membershipId}`;
    const cached = CACHE.get(cacheKey);
    if (cached && Date.now() - cached.t < CACHE_TTL_MS) {
      return res.status(200).json(cached.data);
    }

    // Character list (components=100 => Characters)
    const profile = await bungieGet(
      `/Destiny2/${dm.membershipType}/Profile/${dm.membershipId}/?components=100`,
      accessToken
    );
    const charIds = Object.keys(profile.characters?.data || {});
    if (charIds.length === 0) {
      return res.status(404).json({ error: 'No characters found' });
    }

    // AggregateActivityStats per character
    const charStats = await Promise.all(
      charIds.map((cid) =>
        bungieGet(
          `/Destiny2/${dm.membershipType}/Account/${dm.membershipId}/Character/${cid}/Stats/AggregateActivityStats/`,
          accessToken
        ).catch(() => ({ activities: [] }))
      )
    );

    const completionsByHash = new Map();
    for (const cs of charStats) {
      for (const a of cs.activities || []) {
        const hash = a.activityHash ?? a.directorActivityHash;
        if (!hash || !ALL_RAID_HASHES.has(hash)) continue;
        const val =
          a.values?.activityCompletions?.basic?.value ??
          a.values?.activityCompletions?.value ??
          a.values?.activityCompletions ?? 0;
        completionsByHash.set(hash, (completionsByHash.get(hash) || 0) + (Number(val) || 0));
      }
    }

    const raids = Object.entries(RAID_MAP).map(([name, hashes]) => {
      const count = hashes.reduce((sum, h) => sum + (completionsByHash.get(h) || 0), 0);
      return { name, completions: count };
    });

    const totalRaidCompletions = raids.reduce((s, r) => s + r.completions, 0);
    const payload = {
      raids,
      summary: { totalRaidCompletions },
      meta: {
        membershipId: dm.membershipId,
        membershipType: dm.membershipType,
        cached: false,
        at: new Date().toISOString(),
        source: 'aggregate_activity_stats'
      }
    };

    CACHE.set(cacheKey, { t: Date.now(), data: payload });
    return res.status(200).json(payload);
  } catch (err) {
    console.error('Bungie stats error:', err?.message || err);
    return res.status(500).json({ error: 'Failed to load raid counts', details: String(err?.message || err) });
  }
});