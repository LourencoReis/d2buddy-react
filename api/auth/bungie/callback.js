// Bungie OAuth callback handler
export default async function handler(req, res) {
  console.log('Bungie OAuth callback received');
  console.log('Method:', req.method);
  console.log('Query params:', req.query);
  
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { code, state } = req.query;
  
  if (!code) {
    console.log('No authorization code provided');
    return res.status(400).json({ error: 'Authorization code not provided' });
  }

  console.log('Processing Bungie OAuth callback with code:', code ? 'present' : 'missing');

  try {
    // Exchange code for tokens
    console.log('Exchanging code for tokens...');
    const tokenResponse = await fetch('https://www.bungie.net/platform/app/oauth/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${process.env.BUNGIE_CLIENT_ID}:${process.env.BUNGIE_CLIENT_SECRET}`).toString('base64')}`
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        client_id: process.env.BUNGIE_CLIENT_ID
      })
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('Token exchange failed:', tokenResponse.status, errorText);
      throw new Error(`Token exchange failed: ${tokenResponse.status}`);
    }

    const tokens = await tokenResponse.json();
    console.log('Token exchange successful');

    // Get user profile info
    console.log('Getting user profile...');
    const profileResponse = await fetch('https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/', {
      headers: {
        'Authorization': `Bearer ${tokens.access_token}`,
        'X-API-Key': process.env.BUNGIE_API_KEY
      }
    });

    if (!profileResponse.ok) {
      throw new Error(`Profile fetch failed: ${profileResponse.status}`);
    }

    const profileData = await profileResponse.json();
    console.log('Profile data retrieved successfully');

    // Construct redirect URL to frontend Bungie handler with all the data
    const frontendUrl = process.env.NODE_ENV === 'production' 
      ? `https://${req.headers.host}/auth/bungie/callback` 
      : 'http://localhost:3000/auth/bungie/callback';
      
    const redirectUrl = new URL(frontendUrl);
    redirectUrl.searchParams.set('access_token', tokens.access_token);
    redirectUrl.searchParams.set('refresh_token', tokens.refresh_token);
    redirectUrl.searchParams.set('membership_id', tokens.membership_id);
    redirectUrl.searchParams.set('profile', JSON.stringify(profileData.Response));
    
    console.log('Redirecting to frontend:', frontendUrl);
    return res.redirect(redirectUrl.toString());

  } catch (error) {
    console.error('Bungie OAuth error:', error);
    
    const errorUrl = process.env.NODE_ENV === 'production' 
      ? `https://${req.headers.host}/auth/error` 
      : 'http://localhost:3000/auth/error';
      
    const errorRedirect = new URL(errorUrl);
    errorRedirect.searchParams.set('error', 'bungie_oauth_failed');
    errorRedirect.searchParams.set('details', error.message);
    
    return res.redirect(errorRedirect.toString());
  }
}