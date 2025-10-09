import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AuthCallback() {
  const [status, setStatus] = useState('Processing Discord login...');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleDiscordCallback = async () => {
      const urlParams = new URLSearchParams(location.search);
      const code = urlParams.get('code');
      const error = urlParams.get('error');

      if (error) {
        setStatus('❌ Login failed: ' + error);
        setTimeout(() => navigate('/'), 3000);
        return;
      }

      if (!code) {
        setStatus('❌ No authorization code received');
        setTimeout(() => navigate('/'), 3000);
        return;
      }

      try {
        setStatus('🔄 Exchanging authorization code...');
        
        // Send the code to our backend for token exchange
        const response = await fetch('http://localhost:3001/api/auth/discord', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Authentication failed');
        }

        // Store user data and token
        localStorage.setItem('discord_user', JSON.stringify(data.user));
        localStorage.setItem('discord_token', data.token);

        setStatus(`✅ Welcome ${data.user.username}! Redirecting to home...`);
        
        // Redirect to home page after successful login
        setTimeout(() => navigate('/'), 2000);

      } catch (error) {
        console.error('Authentication error:', error);
        setStatus(`❌ Authentication failed: ${error.message}`);
        setTimeout(() => navigate('/'), 3000);
      }
    };

    handleDiscordCallback();
  }, [location, navigate]);

  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      color: 'white',
      fontSize: '1.5rem',
      textAlign: 'center',
      gap: '1rem'
    }}>
      <div style={{ 
        background: 'rgba(30, 22, 60, 0.85)', 
        padding: '2rem', 
        borderRadius: '20px',
        boxShadow: '0 4px 24px rgba(80,60,120,0.4)'
      }}>
        <h2 style={{ margin: '0 0 1rem 0', color: '#e0d7ff' }}>Discord Authentication</h2>
        <div>{status}</div>
      </div>
    </main>
  );
}