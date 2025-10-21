// Real Bungie stats endpoint using Destiny Data Explorer method
export default async function handler(req, res) {
  console.log('=== REAL BUNGIE STATS API CALLED ===');
  console.log('Method:', req.method);
  console.log('Query:', req.query);
  console.log('Headers auth:', !!req.headers.authorization);
  
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No valid authorization token provided' });
  }

  const accessToken = authHeader.split(' ')[1];
  console.log('Access token present:', !!accessToken);

  try {
    // Get membership info first
    console.log('Step 1: Getting membership info...');
    const membershipResponse = await fetch('https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'X-API-Key': process.env.BUNGIE_API_KEY
      }
    });

    if (!membershipResponse.ok) {
      console.error('Membership request failed:', membershipResponse.status);
      throw new Error(`Failed to get membership info: ${membershipResponse.status}`);
    }

    const membershipData = await membershipResponse.json();
    console.log('Membership response received');

    const destinyMemberships = membershipData.Response?.destinyMemberships || [];
    if (destinyMemberships.length === 0) {
      return res.status(404).json({ error: 'No Destiny 2 accounts found' });
    }

    const primaryMembership = destinyMemberships[0];
    console.log(`Using membership: ${primaryMembership.membershipId} on platform ${primaryMembership.membershipType}`);

    // Get all characters for this membership
    console.log('Step 2: Getting characters...');
    const charactersResponse = await fetch(
      `https://www.bungie.net/Platform/Destiny2/${primaryMembership.membershipType}/Profile/${primaryMembership.membershipId}/?components=200`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'X-API-Key': process.env.BUNGIE_API_KEY
        }
      }
    );

    if (!charactersResponse.ok) {
      throw new Error(`Failed to get characters: ${charactersResponse.status}`);
    }

    const charactersData = await charactersResponse.json();
    const characters = Object.keys(charactersData.Response?.characters?.data || {});
    console.log(`Found ${characters.length} characters`);

    // Get aggregate stats for all characters combined
    console.log('Step 3: Getting aggregate activity stats for all characters...');
    
    let allActivities = {};
    
    // Get stats for each character and combine them
    for (const characterId of characters) {
      console.log(`Getting stats for character ${characterId}...`);
      
      const statsResponse = await fetch(
        `https://www.bungie.net/Platform/Destiny2/${primaryMembership.membershipType}/Account/${primaryMembership.membershipId}/Character/${characterId}/Stats/AggregateActivityStats/`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'X-API-Key': process.env.BUNGIE_API_KEY
          }
        }
      );

      if (statsResponse.ok) {
        const statsData = await statsResponse.json();
        const characterActivities = statsData.Response?.activities || {};
        
        console.log(`Character ${characterId} has ${Object.keys(characterActivities).length} activities`);
        
        // Merge activities - sum up values across characters
        Object.keys(characterActivities).forEach(activityHash => {
          if (!allActivities[activityHash]) {
            allActivities[activityHash] = { ...characterActivities[activityHash] };
          } else {
            // Sum up the stats
            const current = allActivities[activityHash];
            const toAdd = characterActivities[activityHash];
            
            if (current.activitiesCleared && toAdd.activitiesCleared) {
              current.activitiesCleared.basic.value += toAdd.activitiesCleared.basic.value;
            }
            if (current.kills && toAdd.kills) {
              current.kills.basic.value += toAdd.kills.basic.value;
            }
            if (current.deaths && toAdd.deaths) {
              current.deaths.basic.value += toAdd.deaths.basic.value;
            }
            // For time stats, keep the best (fastest) time
            if (current.fastestCompletionMs && toAdd.fastestCompletionMs) {
              current.fastestCompletionMs.basic.value = Math.min(
                current.fastestCompletionMs.basic.value,
                toAdd.fastestCompletionMs.basic.value
              );
            }
            if (current.totalActivityDurationSeconds && toAdd.totalActivityDurationSeconds) {
              current.totalActivityDurationSeconds.basic.value += toAdd.totalActivityDurationSeconds.basic.value;
            }
          }
        });
      }
    }

    console.log(`Combined activities across all characters: ${Object.keys(allActivities).length}`);

    // If we didn't get much data from aggregate stats, try activity history as fallback
    if (Object.keys(allActivities).length < 20) {
      console.log('Low activity count, trying activity history fallback...');
      
      for (const characterId of characters.slice(0, 1)) { // Just check first character to avoid too many calls
        try {
          const historyResponse = await fetch(
            `https://www.bungie.net/Platform/Destiny2/${primaryMembership.membershipType}/Account/${primaryMembership.membershipId}/Character/${characterId}/Stats/Activities/?count=200&mode=0`,
            {
              headers: {
                'Authorization': `Bearer ${accessToken}`,
                'X-API-Key': process.env.BUNGIE_API_KEY
              }
            }
          );
          
          if (historyResponse.ok) {
            const historyData = await historyResponse.json();
            const activities = historyData.Response?.activities || [];
            console.log(`Found ${activities.length} activities in history for character ${characterId}`);
            
            activities.forEach(activity => {
              const hash = activity.activityDetails?.referenceId?.toString();
              if (hash) {
                console.log(`History activity: ${hash}`);
              }
            });
          }
        } catch (e) {
          console.log('Activity history fallback failed:', e.message);
        }
      }
    }

    // Define activity hashes for raids and dungeons with correct order and updated hashes
    const RAID_HASHES = {
      // D1 Raids
      "1942283261": { name: "Vault of Glass", boss: "Atheon, Time's Conflux", order: 1 },
      "2906950631": { name: "King's Fall", boss: "Oryx, the Taken King", order: 7 },
      "2918919505": { name: "Crota's End", boss: "Crota, Son of Oryx", order: 8 },
      
      // D2 Raids  
      "2381413764": { name: "Last Wish", boss: "Riven of a Thousand Voices", order: 2 },
      "3213556450": { name: "Garden of Salvation", boss: "The Sanctified Mind", order: 3 },
      "4148187374": { name: "Deep Stone Crypt", boss: "Taniks, the Abomination", order: 4 },
      "1661734046": { name: "Vow of the Disciple", boss: "Rhulk, Disciple of the Witness", order: 5 },
      "119944200": { name: "Root of Nightmares", boss: "Nezarec, Final God of Pain", order: 6 },
      "3976949817": { name: "Salvation's Edge", boss: "The Witness", order: 9 }
    };

    const DUNGEON_HASHES = {
      "3205253944": { name: "The Shattered Throne", boss: "Dûl Incaru", order: 1 },
      "1775905644": { name: "Pit of Heresy", boss: "Zulmak, Instrument of Torment", order: 2 },
      "2582501063": { name: "Prophecy", boss: "Kell Echo", order: 3 },
      "4078656646": { name: "Grasp of Avarice", boss: "Captain Avarokk, the Covetous", order: 4 },
      "1262462921": { name: "Duality", boss: "Caiatl's Nightmare", order: 5 },
      "2144271493": { name: "Spire of the Watcher", boss: "Persys, Primordial Ruin", order: 6 },
      "4129614942": { name: "Ghosts of the Deep", boss: "Ecthar, Sword of Oryx", order: 7 },
      "1790957743": { name: "Warlord's Ruin", boss: "Hefnd the Unsung", order: 8 },
      "1737850179": { name: "The Coil", boss: "OKULAR the Tormentor", order: 9 }
    };

    // Initialize all raids and dungeons with 0 completions (sorted by order)
    const raids = Object.entries(RAID_HASHES)
      .sort(([,a], [,b]) => a.order - b.order)
      .map(([hash, data]) => ({
        name: data.name,
        completions: 0,
        bestTime: 'N/A',
        averageTime: 'N/A',
        sherpas: 0,
        kills: 0,
        deaths: 0,
        boss: data.boss,
        lastCompletion: null
      }));

    const dungeons = Object.entries(DUNGEON_HASHES)
      .sort(([,a], [,b]) => a.order - b.order)
      .map(([hash, data]) => ({
        name: data.name,
        completions: 0,
        bestTime: 'N/A',
        averageTime: 'N/A',
        sherpas: 0,
        kills: 0,
        deaths: 0,
        boss: data.boss,
        lastCompletion: null
      }));

    // First, let's see what activities we actually have
    console.log('=== ALL ACTIVITIES FOUND ===');
    Object.keys(allActivities).forEach(activityHash => {
      const activityStats = allActivities[activityHash];
      const completions = activityStats.activitiesCleared?.basic?.value || 0;
      if (completions > 0) {
        console.log(`Activity ${activityHash}: ${completions} completions`);
      }
    });
    
    // Process actual activity data to fill in real completions
    Object.keys(allActivities).forEach(activityHash => {
      const activityStats = allActivities[activityHash];
      
      console.log(`Checking activity ${activityHash}:`, {
        hasActivitiesCleared: !!activityStats.activitiesCleared,
        completions: activityStats.activitiesCleared?.basic?.value || 0
      });
      
      // Check if this is a known raid
      const raidEntry = Object.entries(RAID_HASHES).find(([hash, data]) => hash === activityHash);
      if (raidEntry) {
        const [hash, raidData] = raidEntry;
        const completions = activityStats.activitiesCleared?.basic?.value || 0;
        const kills = activityStats.kills?.basic?.value || 0;
        const deaths = activityStats.deaths?.basic?.value || 0;
        const fastestMs = activityStats.fastestCompletionMs?.basic?.value || 0;
        const totalTimeSeconds = activityStats.totalActivityDurationSeconds?.basic?.value || 0;
        
        console.log(`✓ FOUND RAID: ${raidData.name} - ${completions} completions`);
        
        const raidIndex = raids.findIndex(r => r.name === raidData.name);
        if (raidIndex !== -1) {
          raids[raidIndex] = {
            name: raidData.name,
            completions: completions,
            bestTime: fastestMs > 0 ? formatTime(Math.round(fastestMs / 1000)) : 'N/A',
            averageTime: completions > 0 && totalTimeSeconds > 0 ? formatTime(Math.round(totalTimeSeconds / completions)) : 'N/A',
            sherpas: Math.floor(completions * 0.25), // Estimate 25% sherpa rate
            kills: kills,
            deaths: deaths,
            boss: raidData.boss,
            lastCompletion: null
          };
        }
      }
      
      // Check if this is a known dungeon
      const dungeonEntry = Object.entries(DUNGEON_HASHES).find(([hash, data]) => hash === activityHash);
      if (dungeonEntry) {
        const [hash, dungeonData] = dungeonEntry;
        const completions = activityStats.activitiesCleared?.basic?.value || 0;
        const kills = activityStats.kills?.basic?.value || 0;
        const deaths = activityStats.deaths?.basic?.value || 0;
        const fastestMs = activityStats.fastestCompletionMs?.basic?.value || 0;
        const totalTimeSeconds = activityStats.totalActivityDurationSeconds?.basic?.value || 0;
        
        console.log(`✓ FOUND DUNGEON: ${dungeonData.name} - ${completions} completions`);
        
        const dungeonIndex = dungeons.findIndex(d => d.name === dungeonData.name);
        if (dungeonIndex !== -1) {
          dungeons[dungeonIndex] = {
            name: dungeonData.name,
            completions: completions,
            bestTime: fastestMs > 0 ? formatTime(Math.round(fastestMs / 1000)) : 'N/A',
            averageTime: completions > 0 && totalTimeSeconds > 0 ? formatTime(Math.round(totalTimeSeconds / completions)) : 'N/A',
            sherpas: Math.floor(completions * 0.25), // Estimate 25% sherpa rate
            kills: kills,
            deaths: deaths,
            boss: dungeonData.boss,
            lastCompletion: null
          };
        }
      }
    });

    const totalRaidCompletions = raids.reduce((sum, raid) => sum + raid.completions, 0);
    const totalDungeonCompletions = dungeons.reduce((sum, dungeon) => sum + dungeon.completions, 0);

    console.log(`Returning ${raids.length} raids (${totalRaidCompletions} total completions) and ${dungeons.length} dungeons (${totalDungeonCompletions} total completions)`);

    return res.status(200).json({
      raids,
      dungeons,
      summary: {
        totalRaidCompletions,
        totalDungeonCompletions,
        totalSherpas: Math.floor((totalRaidCompletions + totalDungeonCompletions) * 0.25)
      },
      meta: {
        method: 'real_bungie_aggregate_stats',
        activitiesProcessed: Object.keys(allActivities).length,
        charactersProcessed: characters.length,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error in real Bungie stats:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch activity stats',
      details: error.message 
    });
  }
}

// Helper function to format time
function formatTime(seconds) {
  if (!seconds || seconds === 0) return 'N/A';
  
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  
  if (hours > 0) return `${hours}h ${minutes}m ${secs}s`;
  if (minutes > 0) return `${minutes}m ${secs}s`;
  return `${secs}s`;
}