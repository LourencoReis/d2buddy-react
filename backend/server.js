const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
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