// Enhanced Bungie stats endpoint using activity history like raid.report// Real Bungie stats endpoint using Destiny Data Explorer method

export default async function handler(req, res) {export default async function handler(req, res) {

  console.log('=== ENHANCED BUNGIE STATS API CALLED ===');  console.log('=== REAL BUNGIE STATS API CALLED ===');

    console.log('Method:', req.method);

  // CORS headers  console.log('Query:', req.query);

  res.setHeader('Access-Control-Allow-Origin', '*');  console.log('Headers auth:', !!req.headers.authorization);

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');  

  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');  // CORS headers

    res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    return res.status(200).end();  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  }  

  if (req.method === 'OPTIONS') {

  if (req.method !== 'GET') {    return res.status(200).end();

    return res.status(405).json({ error: 'Method not allowed' });  }

  }

  if (req.method !== 'GET') {

  const authHeader = req.headers.authorization;    return res.status(405).json({ error: 'Method not allowed' });

  if (!authHeader || !authHeader.startsWith('Bearer ')) {  }

    return res.status(401).json({ error: 'No valid authorization token provided' });

  }  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {

  const accessToken = authHeader.split(' ')[1];    return res.status(401).json({ error: 'No valid authorization token provided' });

  }

  try {

    // Get membership info  const accessToken = authHeader.split(' ')[1];

    const membershipResponse = await fetch('https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/', {  console.log('Access token present:', !!accessToken);

      headers: {

        'Authorization': `Bearer ${accessToken}`,  try {

        'X-API-Key': process.env.BUNGIE_API_KEY    // Get membership info first

      }    console.log('Step 1: Getting membership info...');

    });    const membershipResponse = await fetch('https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/', {

      headers: {

    if (!membershipResponse.ok) {        'Authorization': `Bearer ${accessToken}`,

      throw new Error(`Failed to get membership info: ${membershipResponse.status}`);        'X-API-Key': process.env.BUNGIE_API_KEY

    }      }

    });

    const membershipData = await membershipResponse.json();

    const destinyMemberships = membershipData.Response?.destinyMemberships || [];    if (!membershipResponse.ok) {

          console.error('Membership request failed:', membershipResponse.status);

    if (destinyMemberships.length === 0) {      throw new Error(`Failed to get membership info: ${membershipResponse.status}`);

      return res.status(404).json({ error: 'No Destiny 2 accounts found' });    }

    }

    const membershipData = await membershipResponse.json();

    const primaryMembership = destinyMemberships[0];    console.log('Membership response received');

    console.log(`Fetching stats for: ${primaryMembership.membershipId} on platform ${primaryMembership.membershipType}`);

    const destinyMemberships = membershipData.Response?.destinyMemberships || [];

    // Get characters    if (destinyMemberships.length === 0) {

    const charactersResponse = await fetch(      return res.status(404).json({ error: 'No Destiny 2 accounts found' });

      `https://www.bungie.net/Platform/Destiny2/${primaryMembership.membershipType}/Profile/${primaryMembership.membershipId}/?components=200`,    }

      {

        headers: {    const primaryMembership = destinyMemberships[0];

          'Authorization': `Bearer ${accessToken}`,    console.log(`Using membership: ${primaryMembership.membershipId} on platform ${primaryMembership.membershipType}`);

          'X-API-Key': process.env.BUNGIE_API_KEY

        }    // Get all characters for this membership

      }    console.log('Step 2: Getting characters...');

    );    const charactersResponse = await fetch(

      `https://www.bungie.net/Platform/Destiny2/${primaryMembership.membershipType}/Profile/${primaryMembership.membershipId}/?components=200`,

    if (!charactersResponse.ok) {      {

      throw new Error(`Failed to get characters: ${charactersResponse.status}`);        headers: {

    }          'Authorization': `Bearer ${accessToken}`,

          'X-API-Key': process.env.BUNGIE_API_KEY

    const charactersData = await charactersResponse.json();        }

    const characters = Object.keys(charactersData.Response?.characters?.data || {});      }

    console.log(`Found ${characters.length} characters`);    );



    // Fetch activity history for ALL characters (this is what raid.report does)    if (!charactersResponse.ok) {

    const activityStats = {};      throw new Error(`Failed to get characters: ${charactersResponse.status}`);

        }

    for (const characterId of characters) {

      console.log(`Fetching activity history for character ${characterId}...`);    const charactersData = await charactersResponse.json();

          const characters = Object.keys(charactersData.Response?.characters?.data || {});

      try {    console.log(`Found ${characters.length} characters`);

        const historyResponse = await fetch(

          `https://www.bungie.net/Platform/Destiny2/${primaryMembership.membershipType}/Account/${primaryMembership.membershipId}/Character/${characterId}/Stats/Activities/?count=250&mode=4`, // mode=4 is Raid    // Get aggregate stats for all characters combined

          {    console.log('Step 3: Getting aggregate activity stats for all characters...');

            headers: {    

              'Authorization': `Bearer ${accessToken}`,    let allActivities = {};

              'X-API-Key': process.env.BUNGIE_API_KEY    

            }    // Get stats for each character and combine them

          }    for (const characterId of characters) {

        );      console.log(`Getting stats for character ${characterId}...`);

      

        if (historyResponse.ok) {      const statsResponse = await fetch(

          const historyData = await historyResponse.json();        `https://www.bungie.net/Platform/Destiny2/${primaryMembership.membershipType}/Account/${primaryMembership.membershipId}/Character/${characterId}/Stats/AggregateActivityStats/`,

          const activities = historyData.Response?.activities || [];        {

          console.log(`Character ${characterId}: Found ${activities.length} raid activities`);          headers: {

                      'Authorization': `Bearer ${accessToken}`,

          activities.forEach(activity => {            'X-API-Key': process.env.BUNGIE_API_KEY

            const refId = activity.activityDetails?.referenceId;          }

            const dirHash = activity.activityDetails?.directorActivityHash;        }

            const activityHash = refId || dirHash;      );

            

            if (!activityHash) return;      if (statsResponse.ok) {

                    const statsData = await statsResponse.json();

            const hashStr = activityHash.toString();        const characterActivities = statsData.Response?.activities || {};

            const completed = activity.values?.completed?.basic?.value === 1;        

            const timeSeconds = activity.values?.activityDurationSeconds?.basic?.value || 0;        console.log(`Character ${characterId} has ${Object.keys(characterActivities).length} activities`);

                    

            if (!activityStats[hashStr]) {        // Merge activities - sum up values across characters

              activityStats[hashStr] = {        Object.keys(characterActivities).forEach(activityHash => {

                completions: 0,          if (!allActivities[activityHash]) {

                totalTime: 0,            allActivities[activityHash] = { ...characterActivities[activityHash] };

                fastestTime: Infinity,          } else {

                activities: []            // Sum up the stats

              };            const current = allActivities[activityHash];

            }            const toAdd = characterActivities[activityHash];

                        

            if (completed) {            if (current.activitiesCleared && toAdd.activitiesCleared) {

              activityStats[hashStr].completions++;              current.activitiesCleared.basic.value += toAdd.activitiesCleared.basic.value;

              activityStats[hashStr].totalTime += timeSeconds;            }

              if (timeSeconds > 0 && timeSeconds < activityStats[hashStr].fastestTime) {            if (current.kills && toAdd.kills) {

                activityStats[hashStr].fastestTime = timeSeconds;              current.kills.basic.value += toAdd.kills.basic.value;

              }            }

              activityStats[hashStr].activities.push(activity);            if (current.deaths && toAdd.deaths) {

            }              current.deaths.basic.value += toAdd.deaths.basic.value;

          });            }

        }            // For time stats, keep the best (fastest) time

                    if (current.fastestCompletionMs && toAdd.fastestCompletionMs) {

        // Also fetch dungeon mode              current.fastestCompletionMs.basic.value = Math.min(

        const dungeonResponse = await fetch(                current.fastestCompletionMs.basic.value,

          `https://www.bungie.net/Platform/Destiny2/${primaryMembership.membershipType}/Account/${primaryMembership.membershipId}/Character/${characterId}/Stats/Activities/?count=250&mode=82`, // mode=82 is Dungeon                toAdd.fastestCompletionMs.basic.value

          {              );

            headers: {            }

              'Authorization': `Bearer ${accessToken}`,            if (current.totalActivityDurationSeconds && toAdd.totalActivityDurationSeconds) {

              'X-API-Key': process.env.BUNGIE_API_KEY              current.totalActivityDurationSeconds.basic.value += toAdd.totalActivityDurationSeconds.basic.value;

            }            }

          }          }

        );        });

      }

        if (dungeonResponse.ok) {    }

          const dungeonData = await dungeonResponse.json();

          const dungeons = dungeonData.Response?.activities || [];    console.log(`Combined activities across all characters: ${Object.keys(allActivities).length}`);

          console.log(`Character ${characterId}: Found ${dungeons.length} dungeon activities`);

              // If we didn't get much data from aggregate stats, try activity history as fallback

          dungeons.forEach(activity => {    if (Object.keys(allActivities).length < 20) {

            const refId = activity.activityDetails?.referenceId;      console.log('Low activity count, trying activity history fallback...');

            const dirHash = activity.activityDetails?.directorActivityHash;      

            const activityHash = refId || dirHash;      for (const characterId of characters.slice(0, 1)) { // Just check first character to avoid too many calls

                    try {

            if (!activityHash) return;          const historyResponse = await fetch(

                        `https://www.bungie.net/Platform/Destiny2/${primaryMembership.membershipType}/Account/${primaryMembership.membershipId}/Character/${characterId}/Stats/Activities/?count=200&mode=0`,

            const hashStr = activityHash.toString();            {

            const completed = activity.values?.completed?.basic?.value === 1;              headers: {

            const timeSeconds = activity.values?.activityDurationSeconds?.basic?.value || 0;                'Authorization': `Bearer ${accessToken}`,

                            'X-API-Key': process.env.BUNGIE_API_KEY

            if (!activityStats[hashStr]) {              }

              activityStats[hashStr] = {            }

                completions: 0,          );

                totalTime: 0,          

                fastestTime: Infinity,          if (historyResponse.ok) {

                activities: []            const historyData = await historyResponse.json();

              };            const activities = historyData.Response?.activities || [];

            }            console.log(`Found ${activities.length} activities in history for character ${characterId}`);

                        

            if (completed) {            activities.forEach(activity => {

              activityStats[hashStr].completions++;              const hash = activity.activityDetails?.referenceId?.toString();

              activityStats[hashStr].totalTime += timeSeconds;              if (hash) {

              if (timeSeconds > 0 && timeSeconds < activityStats[hashStr].fastestTime) {                console.log(`History activity: ${hash}`);

                activityStats[hashStr].fastestTime = timeSeconds;              }

              }            });

              activityStats[hashStr].activities.push(activity);          }

            }        } catch (e) {

          });          console.log('Activity history fallback failed:', e.message);

        }        }

      } catch (error) {      }

        console.error(`Error fetching activities for character ${characterId}:`, error);    }

      }

    }    // Define activity hashes for raids and dungeons with correct order and updated hashes

    const RAID_HASHES = {

    console.log('Activity stats collected:', Object.keys(activityStats).length, 'unique activities');      // D1 Raids

    Object.keys(activityStats).forEach(hash => {      "1942283261": { name: "Vault of Glass", boss: "Atheon, Time's Conflux", order: 1 },

      const stats = activityStats[hash];      "2906950631": { name: "King's Fall", boss: "Oryx, the Taken King", order: 7 },

      console.log(`  ${hash}: ${stats.completions} completions`);      "2918919505": { name: "Crota's End", boss: "Crota, Son of Oryx", order: 8 },

    });      

      // D2 Raids  

    // Map hashes to raid/dungeon names      "2381413764": { name: "Last Wish", boss: "Riven of a Thousand Voices", order: 2 },

    const RAID_HASHES = {      "3213556450": { name: "Garden of Salvation", boss: "The Sanctified Mind", order: 3 },

      "1942283261": "Vault of Glass",      "4148187374": { name: "Deep Stone Crypt", boss: "Taniks, the Abomination", order: 4 },

      "2381413764": "Last Wish",      "1661734046": { name: "Vow of the Disciple", boss: "Rhulk, Disciple of the Witness", order: 5 },

      "3213556450": "Garden of Salvation",      "119944200": { name: "Root of Nightmares", boss: "Nezarec, Final God of Pain", order: 6 },

      "4148187374": "Deep Stone Crypt",      "3976949817": { name: "Salvation's Edge", boss: "The Witness", order: 9 }

      "1661734046": "Vow of the Disciple",    };

      "2906950631": "King's Fall",

      "119944200": "Root of Nightmares",    const DUNGEON_HASHES = {

      "2918919505": "Crota's End",      "3205253944": { name: "The Shattered Throne", boss: "Dûl Incaru", order: 1 },

      "3976949817": "Salvation's Edge"      "1775905644": { name: "Pit of Heresy", boss: "Zulmak, Instrument of Torment", order: 2 },

    };      "2582501063": { name: "Prophecy", boss: "Kell Echo", order: 3 },

      "4078656646": { name: "Grasp of Avarice", boss: "Captain Avarokk, the Covetous", order: 4 },

    const DUNGEON_HASHES = {      "1262462921": { name: "Duality", boss: "Caiatl's Nightmare", order: 5 },

      "3205253944": "The Shattered Throne",      "2144271493": { name: "Spire of the Watcher", boss: "Persys, Primordial Ruin", order: 6 },

      "1775905644": "Pit of Heresy",      "4129614942": { name: "Ghosts of the Deep", boss: "Ecthar, Sword of Oryx", order: 7 },

      "2582501063": "Prophecy",      "1790957743": { name: "Warlord's Ruin", boss: "Hefnd the Unsung", order: 8 },

      "4078656646": "Grasp of Avarice",      "1737850179": { name: "The Coil", boss: "OKULAR the Tormentor", order: 9 }

      "1262462921": "Duality",    };

      "2144271493": "Spire of the Watcher",

      "4129614942": "Ghosts of the Deep",    // Initialize all raids and dungeons with 0 completions (sorted by order)

      "1790957743": "Warlord's Ruin"    const raids = Object.entries(RAID_HASHES)

    };      .sort(([,a], [,b]) => a.order - b.order)

      .map(([hash, data]) => ({

    // Build raid stats        name: data.name,

    const raids = Object.entries(RAID_HASHES).map(([hash, name]) => {        completions: 0,

      const stats = activityStats[hash] || { completions: 0, totalTime: 0, fastestTime: Infinity };        bestTime: 'N/A',

      const bestTime = stats.fastestTime < Infinity ? formatTime(stats.fastestTime) : 'N/A';        averageTime: 'N/A',

      const avgTime = stats.completions > 0 ? formatTime(Math.round(stats.totalTime / stats.completions)) : 'N/A';        sherpas: 0,

              kills: 0,

      return {        deaths: 0,

        name,        boss: data.boss,

        completions: stats.completions,        lastCompletion: null

        bestTime,      }));

        averageTime: avgTime,

        sherpas: Math.floor(stats.completions * 0.2)    const dungeons = Object.entries(DUNGEON_HASHES)

      };      .sort(([,a], [,b]) => a.order - b.order)

    });      .map(([hash, data]) => ({

        name: data.name,

    // Build dungeon stats        completions: 0,

    const dungeons = Object.entries(DUNGEON_HASHES).map(([hash, name]) => {        bestTime: 'N/A',

      const stats = activityStats[hash] || { completions: 0, totalTime: 0, fastestTime: Infinity };        averageTime: 'N/A',

      const bestTime = stats.fastestTime < Infinity ? formatTime(stats.fastestTime) : 'N/A';        sherpas: 0,

      const avgTime = stats.completions > 0 ? formatTime(Math.round(stats.totalTime / stats.completions)) : 'N/A';        kills: 0,

              deaths: 0,

      return {        boss: data.boss,

        name,        lastCompletion: null

        completions: stats.completions,      }));

        bestTime,

        averageTime: avgTime,    // First, let's see what activities we actually have

        sherpas: Math.floor(stats.completions * 0.2)    console.log('=== ALL ACTIVITIES FOUND ===');

      };    Object.keys(allActivities).forEach(activityHash => {

    });      const activityStats = allActivities[activityHash];

      const completions = activityStats.activitiesCleared?.basic?.value || 0;

    const totalRaidCompletions = raids.reduce((sum, raid) => sum + raid.completions, 0);      if (completions > 0) {

    const totalDungeonCompletions = dungeons.reduce((sum, dungeon) => sum + dungeon.completions, 0);        console.log(`Activity ${activityHash}: ${completions} completions`);

      }

    console.log(`Returning stats: ${totalRaidCompletions} raid completions, ${totalDungeonCompletions} dungeon completions`);    });

    

    return res.status(200).json({    // Process actual activity data to fill in real completions

      raids,    Object.keys(allActivities).forEach(activityHash => {

      dungeons,      const activityStats = allActivities[activityHash];

      summary: {      

        totalRaidCompletions,      console.log(`Checking activity ${activityHash}:`, {

        totalDungeonCompletions,        hasActivitiesCleared: !!activityStats.activitiesCleared,

        totalSherpas: Math.floor((totalRaidCompletions + totalDungeonCompletions) * 0.2)        completions: activityStats.activitiesCleared?.basic?.value || 0

      },      });

      meta: {      

        method: 'activity_history',      // Check if this is a known raid

        charactersProcessed: characters.length,      const raidEntry = Object.entries(RAID_HASHES).find(([hash, data]) => hash === activityHash);

        timestamp: new Date().toISOString()      if (raidEntry) {

      }        const [hash, raidData] = raidEntry;

    });        const completions = activityStats.activitiesCleared?.basic?.value || 0;

        const kills = activityStats.kills?.basic?.value || 0;

  } catch (error) {        const deaths = activityStats.deaths?.basic?.value || 0;

    console.error('Error in enhanced Bungie stats:', error);        const fastestMs = activityStats.fastestCompletionMs?.basic?.value || 0;

    return res.status(500).json({         const totalTimeSeconds = activityStats.totalActivityDurationSeconds?.basic?.value || 0;

      error: 'Failed to fetch activity stats',        

      details: error.message         console.log(`✓ FOUND RAID: ${raidData.name} - ${completions} completions`);

    });        

  }        const raidIndex = raids.findIndex(r => r.name === raidData.name);

}        if (raidIndex !== -1) {

          raids[raidIndex] = {

function formatTime(seconds) {            name: raidData.name,

  if (!seconds || seconds === 0) return 'N/A';            completions: completions,

              bestTime: fastestMs > 0 ? formatTime(Math.round(fastestMs / 1000)) : 'N/A',

  const hours = Math.floor(seconds / 3600);            averageTime: completions > 0 && totalTimeSeconds > 0 ? formatTime(Math.round(totalTimeSeconds / completions)) : 'N/A',

  const minutes = Math.floor((seconds % 3600) / 60);            sherpas: Math.floor(completions * 0.25), // Estimate 25% sherpa rate

  const secs = seconds % 60;            kills: kills,

              deaths: deaths,

  if (hours > 0) return `${hours}h ${minutes}m`;            boss: raidData.boss,

  if (minutes > 0) return `${minutes}m ${secs}s`;            lastCompletion: null

  return `${secs}s`;          };

}        }

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