// Discord Authentication Handler
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    // Handle token exchange from frontend
    let code;
    try {
      if (req.body && typeof req.body === 'object') {
        code = req.body.code;
      } else if (req.body && typeof req.body === 'string') {
        const parsed = JSON.parse(req.body);
        code = parsed.code;
      } else {
        // Try to read raw body just in case
        const chunks = [];
        for await (const chunk of req) chunks.push(chunk);
        if (chunks.length) {
          const raw = Buffer.concat(chunks).toString('utf8');
          const parsed = JSON.parse(raw);
          code = parsed.code;
        }
      }
    } catch (e) {
      console.warn('Failed to parse request body for Discord auth:', e);
    }
    
    if (!code) {
      return res.status(400).json({ error: 'Authorization code not provided' });
    }

    console.log('Discord OAuth token exchange:', { code: code ? 'present' : 'missing' });

    try {
      // Get the current deployment URL for redirect_uri
      const baseUrl = req.headers.host?.includes('localhost') 
        ? 'http://localhost:3000'
        : `https://${req.headers.host}`;

      console.log('Using base URL for redirect_uri:', baseUrl);

      // Exchange code for tokens
      const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: process.env.DISCORD_CLIENT_ID || '1425552201828401304',
          client_secret: process.env.DISCORD_CLIENT_SECRET,
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

  return res.status(405).json({ error: 'Method not allowed. Use POST.' });
}