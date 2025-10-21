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
        
        console.log('Sending code to backend:', code);
        
        // Send the code to our backend for token exchange
        const apiUrl = process.env.NODE_ENV === 'production' 
          ? '/api/auth/discord' // Back to direct Discord endpoint
          : 'http://localhost:3001/api/auth/discord';
          
        console.log('Making request to:', apiUrl);
        
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        });

        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));
        
        // Check if response is JSON
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const textResponse = await response.text();
          console.error('Non-JSON response received:', textResponse);
          throw new Error(`Server returned non-JSON response: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Backend response:', data);

        if (!response.ok) {
          console.error('Backend error response:', data);
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