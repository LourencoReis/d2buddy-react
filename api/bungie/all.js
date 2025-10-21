// Consolidated Bungie API endpoint - handles stats, manifest, and other Bungie operations
export default async function handler(req, res) {
  console.log('=== BUNGIE API CALLED ===');
  console.log('Method:', req.method);
  console.log('Query:', req.query);
  console.log('Headers Authorization:', req.headers.authorization ? 'Present' : 'Missing');
  
  const { action } = req.query;

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    switch (action) {
      case 'stats':
        console.log('Routing to stats handler');
        return await handleStats(req, res);
      case 'manifest':
        console.log('Routing to manifest handler');
        return await handleManifest(req, res);
      default:
        console.log(`Invalid action: ${action}`);
        return res.status(400).json({ error: 'Invalid action. Use: stats, manifest' });
    }
  } catch (error) {
    console.error(`Bungie API error for action ${action}:`, error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message,
      action: action
    });
  }
}

// Stats handler (from stats.js)
async function handleStats(req, res) {
  console.log('=== BUNGIE STATS HANDLER STARTED ===');
  console.log('Method:', req.method);
  console.log('Query params:', req.query);

  if (req.method !== 'GET') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const authHeader = req.headers.authorization;
  console.log('Auth header present:', !!authHeader);
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('Invalid authorization header');
    return res.status(401).json({ error: 'No valid authorization token provided' });
  }

  const accessToken = authHeader.split(' ')[1];
  console.log('Access token extracted:', accessToken ? `${accessToken.substring(0, 10)}...` : 'Missing');

  try {
    console.log('Environment check - API key present:', !!process.env.BUNGIE_API_KEY);
    
    // For now, let's return test data to see if the API is being called at all
    console.log('Returning test data to check API connectivity');
    
    const testRaids = [
      {
        name: "Last Wish",
        completions: 5,
        bestTime: "45m 30s",
        averageTime: "1h 15m",
        sherpas: 1,
        kills: 250,
        deaths: 12,
        boss: "Riven of a Thousand Voices",
        lastCompletion: null
      },
      {
        name: "Garden of Salvation", 
        completions: 3,
        bestTime: "52m 15s",
        averageTime: "1h 8m",
        sherpas: 0,
        kills: 180,
        deaths: 8,
        boss: "The Sanctified Mind",
        lastCompletion: null
      }
    ];

    const testDungeons = [
      {
        name: "The Shattered Throne",
        completions: 12,
        bestTime: "25m 45s", 
        averageTime: "35m 12s",
        sherpas: 3,
        kills: 420,
        deaths: 15,
        boss: "Dûl Incaru",
        lastCompletion: null
      },
      {
        name: "Pit of Heresy",
        completions: 8,
        bestTime: "22m 10s",
        averageTime: "28m 30s", 
        sherpas: 2,
        kills: 320,
        deaths: 10,
        boss: "Zulmak, Instrument of Torment",
        lastCompletion: null
      }
    ];

    console.log('Returning test stats data');
    return res.status(200).json({
      raids: testRaids,
      dungeons: testDungeons,
      summary: {
        totalRaidCompletions: 8,
        totalDungeonCompletions: 20,
        totalSherpas: 6
      },
      meta: {
        method: 'test_data_mode',
        note: 'This is test data to verify API connectivity'
      }
    });

    // REAL API CODE COMMENTED OUT FOR DEBUGGING
    /*
    // Get membership info first
    console.log('Step 1: Getting membership info...');
    const membershipResponse = await fetch('https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'X-API-Key': process.env.BUNGIE_API_KEY
      }
    });

    if (!membershipResponse.ok) {
      console.error('Membership request failed:', membershipResponse.status, membershipResponse.statusText);
      const errorText = await membershipResponse.text();
      console.error('Error response:', errorText);
      throw new Error(`Failed to get membership info: ${membershipResponse.status}`);
    }
    */

    /* REAL API CODE - COMMENTED OUT FOR DEBUGGING
    const membershipData = await membershipResponse.json();
    console.log('Membership response:', JSON.stringify(membershipData, null, 2));
    // ... rest of complex logic ...
    */

  } catch (error) {
    console.error('Error in stats handler:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch activity stats',
      details: error.message 
    });
  }
}

// Manifest handler (simplified version)
async function handleManifest(req, res) {
  console.log('Manifest request received');
  
  try {
    // Basic manifest endpoint - just return success for now
    return res.status(200).json({
      success: true,
      message: 'Manifest endpoint available',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in manifest handler:', error);
    return res.status(500).json({ 
      error: 'Failed to process manifest request',
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