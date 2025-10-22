// Lightweight stats endpoint - just returns completion counts
export default async function handler(req, res) {
  console.log('=== STATS COUNT API CALLED ===');
  
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No authorization token' });
  }

  const accessToken = authHeader.split(' ')[1];

  if (!process.env.BUNGIE_API_KEY) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // Get membership info with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    const membershipResponse = await fetch('https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'X-API-Key': process.env.BUNGIE_API_KEY
      },
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);

    if (!membershipResponse.ok) {
      throw new Error(`Membership fetch failed: ${membershipResponse.status}`);
    }

    const membershipData = await membershipResponse.json();
    const destinyMemberships = membershipData.Response?.destinyMemberships || [];
    
    if (destinyMemberships.length === 0) {
      return res.status(404).json({ error: 'No Destiny 2 accounts found' });
    }

    const primaryMembership = destinyMemberships[0];

    // Return just the basic info - no stats to avoid timeout
    return res.status(200).json({
      membershipId: primaryMembership.membershipId,
      membershipType: primaryMembership.membershipType,
      displayName: primaryMembership.displayName,
      // Placeholder counts - you can enhance this later
      totalRaidCompletions: '...',
      totalDungeonCompletions: '...',
      message: 'Full stats loading disabled due to API timeouts. Connect to see your Guardian info!'
    });

  } catch (error) {
    console.error('Error in stats count API:', error);
    
    if (error.name === 'AbortError') {
      return res.status(408).json({ error: 'Request timeout' });
    }
    
    return res.status(500).json({ 
      error: 'Failed to fetch data',
      details: error.message
    });
  }
}
