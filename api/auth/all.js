// Consolidated Auth endpoint - handles Bungie and Discord authentication
export default async function handler(req, res) {
  const { provider } = req.query;

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    switch (provider) {
      case 'bungie':
        return await handleBungie(req, res);
      case 'discord':
        return await handleDiscord(req, res);
      default:
        return res.status(400).json({ error: 'Invalid provider. Use: bungie, discord' });
    }
  } catch (error) {
    console.error(`Auth error for provider ${provider}:`, error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// Bungie auth handler
async function handleBungie(req, res) {
  if (req.method === 'GET') {
    // Handle callback
    const { code, state } = req.query;
    
    if (!code) {
      return res.status(400).json({ error: 'Authorization code not provided' });
    }

    console.log('Bungie OAuth callback received:', { code: code ? 'present' : 'missing', state });

    try {
      // Exchange code for tokens
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

      // Redirect to frontend with tokens
      const redirectUrl = new URL('/auth/callback', process.env.FRONTEND_URL || 'http://localhost:3000');
      redirectUrl.searchParams.set('access_token', tokens.access_token);
      redirectUrl.searchParams.set('refresh_token', tokens.refresh_token);
      redirectUrl.searchParams.set('membership_id', tokens.membership_id);
      
      return res.redirect(redirectUrl.toString());

    } catch (error) {
      console.error('Bungie OAuth error:', error);
      const errorUrl = new URL('/auth/error', process.env.FRONTEND_URL || 'http://localhost:3000');
      errorUrl.searchParams.set('error', 'bungie_oauth_failed');
      return res.redirect(errorUrl.toString());
    }
  }

  if (req.method === 'POST') {
    // Handle login initiation
    const authUrl = new URL('https://www.bungie.net/en/OAuth/Authorize');
    authUrl.searchParams.set('client_id', process.env.BUNGIE_CLIENT_ID);
    authUrl.searchParams.set('response_type', 'code');
    authUrl.searchParams.set('state', 'bungie_login');
    
    return res.status(200).json({ 
      authUrl: authUrl.toString(),
      message: 'Redirect to this URL to start Bungie OAuth'
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

// Discord auth handler
async function handleDiscord(req, res) {
  if (req.method === 'POST') {
    // Handle token exchange from frontend
    const { code } = req.body;
    
    if (!code) {
      return res.status(400).json({ error: 'Authorization code not provided' });
    }

    console.log('Discord OAuth token exchange:', { code: code ? 'present' : 'missing' });

    try {
      // Get the current deployment URL for redirect_uri
      const baseUrl = req.headers.host?.includes('localhost') 
        ? 'http://localhost:3000'
        : `https://${req.headers.host}`;

      // Exchange code for tokens
      const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: '1425552201828401304',
          client_secret: process.env.DISCORD_CLIENT_SECRET || 'your_discord_client_secret',
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: `${baseUrl}/auth/callback`
        })
      });

      if (!tokenResponse.ok) {
        const errorText = await tokenResponse.text();
        console.error('Discord token exchange failed:', tokenResponse.status, errorText);
        return res.status(400).json({ error: `Token exchange failed: ${errorText}` });
      }

      const tokens = await tokenResponse.json();
      console.log('Discord token exchange successful');

      // Get user info
      const userResponse = await fetch('https://discord.com/api/users/@me', {
        headers: {
          'Authorization': `Bearer ${tokens.access_token}`
        }
      });

      if (!userResponse.ok) {
        console.error('Failed to get Discord user info:', userResponse.status);
        return res.status(400).json({ error: 'Failed to get user info' });
      }

      const user = await userResponse.json();
      
      // Create avatar URL
      const avatarUrl = user.avatar 
        ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
        : `https://cdn.discordapp.com/embed/avatars/${user.discriminator % 5}.png`;

      const userData = {
        id: user.id,
        username: user.username,
        discriminator: user.discriminator,
        email: user.email,
        avatarUrl: avatarUrl
      };
      
      return res.status(200).json({ 
        success: true,
        user: userData,
        token: tokens.access_token
      });

    } catch (error) {
      console.error('Discord OAuth error:', error);
      return res.status(500).json({ error: 'Internal server error during Discord auth' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}