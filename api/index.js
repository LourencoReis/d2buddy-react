const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://sherpas-corner.vercel.app'] 
    : 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Discord OAuth configuration
const DISCORD_CLIENT_ID = '1425552201828401304';
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
const DISCORD_REDIRECT_URI = process.env.NODE_ENV === 'production'
  ? 'https://sherpas-corner.vercel.app/auth/callback'
  : 'http://localhost:3000/auth/callback';

console.log('Environment check:', {
  NODE_ENV: process.env.NODE_ENV,
  hasSecret: !!DISCORD_CLIENT_SECRET,
  redirectUri: DISCORD_REDIRECT_URI
});

// Exchange authorization code for access token
app.post('/api/auth/discord', async (req, res) => {
  // Ensure we always return JSON
  res.setHeader('Content-Type', 'application/json');
  
  const { code } = req.body;
  
  console.log('Received Discord auth request with code:', code);

  if (!DISCORD_CLIENT_SECRET) {
    console.error('DISCORD_CLIENT_SECRET environment variable is not set');
    return res.status(500).json({ 
      error: 'Server configuration error',
      details: 'Discord client secret not configured'
    });
  }

  if (!code) {
    console.log('Error: No authorization code provided');
    return res.status(400).json({ error: 'Authorization code is required' });
  }

  try {
    console.log('Attempting to exchange code for access token...');
    console.log('Using redirect URI:', DISCORD_REDIRECT_URI);
    console.log('Using client ID:', DISCORD_CLIENT_ID);
    
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

    // Return user data
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
      token: access_token
    });

  } catch (error) {
    console.error('Discord OAuth error:', error.response?.data || error.message);
    console.error('Full error:', error);
    
    // Ensure we always return valid JSON
    const errorMessage = error.response?.data?.error_description || 
                        error.response?.data?.error || 
                        error.message || 
                        'Unknown authentication error';
    
    return res.status(500).json({ 
      error: 'Failed to authenticate with Discord',
      details: errorMessage,
      debugInfo: {
        hasResponse: !!error.response,
        status: error.response?.status,
        statusText: error.response?.statusText,
        redirectUri: DISCORD_REDIRECT_URI
      }
    });
  }
});

// Get user profile
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

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    env: {
      NODE_ENV: process.env.NODE_ENV,
      hasDiscordSecret: !!process.env.DISCORD_CLIENT_SECRET,
      discordClientId: DISCORD_CLIENT_ID,
      redirectUri: DISCORD_REDIRECT_URI
    }
  });
});

// Test endpoint to check if serverless function is working
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'API is working',
    timestamp: new Date().toISOString()
  });
});

// For Vercel serverless deployment
module.exports = app;

// For local development
if (require.main === module) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
  });
}