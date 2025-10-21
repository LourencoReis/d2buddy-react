import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BungieAuthCallback() {
  const [status, setStatus] = useState('Processing Bungie authentication...');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleBungieCallback = async () => {
      const urlParams = new URLSearchParams(location.search);
      const code = urlParams.get('code');
      const error = urlParams.get('error');
      // Support server-side exchange flow: tokens + profile in query
      const accessToken = urlParams.get('access_token');
      const refreshToken = urlParams.get('refresh_token');
      const membershipId = urlParams.get('membership_id');
      const profileRaw = urlParams.get('profile');

      if (error) {
        setStatus('❌ Bungie auth failed: ' + error);
        setTimeout(() => navigate('/profile'), 3000);
        return;
      }

      // If tokens are present (server-side handled), store them and continue
      if (accessToken) {
        try {
          const profile = profileRaw ? JSON.parse(profileRaw) : null;
          const bungiePayload = {
            accessToken,
            refreshToken,
            membershipId,
            profile,
          };
          localStorage.setItem('bungie_data', JSON.stringify(bungiePayload));
          setStatus('✅ Bungie.net connected! Loading your Guardian data...');
          setTimeout(() => navigate('/profile'), 1500);
          return;
        } catch (e) {
          console.error('Failed parsing Bungie profile from query:', e);
        }
      }

      if (!code) {
        setStatus('❌ No authorization code received from Bungie');
        setTimeout(() => navigate('/profile'), 3000);
        return;
      }

      try {
        setStatus('🔄 Connecting to Bungie.net...');
        
        console.log('Sending Bungie code to backend:', code);
        
        const apiUrl = process.env.NODE_ENV === 'production' 
          ? '/api/auth/bungie/callback' // in case we hit this route with code directly
          : 'http://localhost:3001/api/auth/bungie';
          
        console.log('Making request to:', apiUrl);
        
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        });

        console.log('Response status:', response.status);
        
        // Check if response is JSON
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const textResponse = await response.text();
          console.error('Non-JSON response received:', textResponse);
          throw new Error(`Server returned non-JSON response: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Bungie backend response:', data);

        if (!response.ok) {
          console.error('Bungie backend error response:', data);
          throw new Error(data.error || 'Bungie authentication failed');
        }

        // Store Bungie data
        localStorage.setItem('bungie_data', JSON.stringify(data.bungie));

        setStatus(`✅ Bungie.net connected successfully! Loading your Guardian data...`);
        
        // Redirect to profile page
        setTimeout(() => navigate('/profile'), 2000);

      } catch (error) {
        console.error('Bungie authentication error:', error);
        setStatus(`❌ Bungie auth failed: ${error.message}`);
        setTimeout(() => navigate('/profile'), 3000);
      }
    };

    handleBungieCallback();
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
        <h2 style={{ margin: '0 0 1rem 0', color: '#e0d7ff' }}>Bungie.net Authentication</h2>
        <div>{status}</div>
      </div>
    </main>
  );
}