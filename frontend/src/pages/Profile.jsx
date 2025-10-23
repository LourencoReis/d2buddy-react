import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/PlayerStats.css";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [bungieData, setBungieData] = useState(null);
  const [bungieStats, setBungieStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingStats, setLoadingStats] = useState(false);

  // Handle Bungie.net connection
  const handleBungieConnect = () => {
    const bungieClientId = '50907'; // Your Bungie client ID
    
    // Use current hostname for redirect (works on any deployment)
    const currentHost = window.location.origin;
    const redirectUri = `${currentHost}/api/auth/bungie/callback`;
    
    // Remove scope entirely - some APIs work with default scopes
    const bungieAuthUrl = `https://www.bungie.net/en/oauth/authorize?client_id=${bungieClientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}`;
    
    console.log('Starting Bungie auth with redirect URI:', redirectUri);
    console.log('Full Bungie auth URL:', bungieAuthUrl);
    window.location.href = bungieAuthUrl;
  };

  // Fetch Bungie stats
  const fetchBungieStats = async () => {
    const bungieDataStr = localStorage.getItem('bungie_data');
    console.log('Raw bungie_data from localStorage:', bungieDataStr);
    
    if (!bungieDataStr) {
      console.log('No bungie_data found in localStorage');
      return;
    }

    try {
      const data = JSON.parse(bungieDataStr);
      console.log('Parsed Bungie data structure:', data);
      
      // Check if we have an access token
      if (!data.accessToken) {
        console.error('No accessToken found in bungie_data:', data);
        return;
      }
      
      console.log('Access token found, fetching stats...');
      setLoadingStats(true);
      
  // Build API base (supports external backend like Render)
  const apiBase = process.env.REACT_APP_API_BASE || '';

  // Set a timeout for the stats fetch
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        controller.abort();
        console.warn('Stats fetch timed out after 9 seconds');
        setLoadingStats(false);
      }, 9000);
      
      try {
        // Use relative URL to ensure it calls the same deployment we're on
        const response = await fetch(`${apiBase}/api/stats-simple`, {
          headers: {
            'Authorization': `Bearer ${data.accessToken}`,
          },
          signal: controller.signal
        });

        clearTimeout(timeoutId);
        
        console.log('Stats API response status:', response.status);
        if (response.ok) {
          const stats = await response.json();
          console.log('Received stats:', stats);
          setBungieStats(stats);
        } else {
          const errorText = await response.text();
          console.error('Stats API error:', response.status, errorText);
          // Don't throw - just log the error and continue
        }
      } catch (fetchError) {
        clearTimeout(timeoutId);
        if (fetchError.name === 'AbortError') {
          console.warn('Stats fetch was aborted due to timeout');
        } else {
          console.error('Error fetching Bungie stats:', fetchError);
        }
      }
    } catch (error) {
      console.error('Error parsing bungie data:', error);
    } finally {
      setLoadingStats(false);
    }
  };

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('discord_user');
    if (!userData) {
      navigate('/');
      return;
    }
    
    setUser(JSON.parse(userData));
    
    // Check if Bungie data exists
    const bungieData = localStorage.getItem('bungie_data');
    if (bungieData) {
      setBungieData(JSON.parse(bungieData));
      // Fetch fresh stats when component loads
      setTimeout(fetchBungieStats, 100);
    }
    
    setLoading(false);
  }, [navigate]);

  // Refresh stats when Bungie data changes
  useEffect(() => {
    if (bungieData) {
      fetchBungieStats();
    }
  }, [bungieData]);

  if (loading) {
    return (
      <div className="profile-page">
        <div className="loading">Loading profile...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="profile-page">
        <div className="error">Please log in to view your profile.</div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar-large">
          <img src={user.avatarUrl} alt={user.username} />
        </div>
        <div className="profile-info">
          <h1>{user.username}</h1>
          
          {/* Display Bungie Name if connected */}
          {bungieData && (bungieData.profile?.bungieGlobalDisplayName || bungieData.profile?.displayName) && (
            <p style={{
              color: '#0d7377',
              fontSize: '1.2rem',
              fontWeight: '500',
              margin: '0.5rem 0 1rem 0'
            }}>
              🎮 {bungieData.profile?.bungieGlobalDisplayName || bungieData.profile?.displayName}
              {bungieData.profile?.bungieGlobalDisplayNameCode && `#${bungieData.profile.bungieGlobalDisplayNameCode}`}
            </p>
          )}
          
          {/* Bungie Connection Status */}
          {!bungieData ? (
            <div className="bungie-connection">
              <p className="connection-status">🔗 Connect your Bungie.net account to view your real Destiny 2 stats</p>
              <button 
                className="bungie-connect-btn" 
                onClick={handleBungieConnect}
                style={{
                  background: '#0d7377',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginTop: '10px',
                  fontSize: '16px'
                }}
              >
                Connect Bungie.net
              </button>
            </div>
          ) : (
            <div className="bungie-connected">
              <p className="connection-status">✅ Bungie.net connected</p>
              <button 
                className="logout-bungie-button"
                onClick={() => {
                  localStorage.removeItem('bungie_data');
                  localStorage.removeItem('bungie_token');
                  setBungieData(null);
                  setBungieStats(null);
                }}
              >
                Disconnect Bungie.net
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Stats Section */}
      {bungieStats ? (
        <div className="stats-container">
          <div className="stats-section">
            <h2>Raid Statistics</h2>
            {loadingStats ? (
              <div className="loading-stats">Loading real raid stats...</div>
            ) : bungieStats.raids.length > 0 ? (
              <div className="stats-grid">
                {bungieStats.raids.map((raid, index) => (
                  <div key={index} className="stat-card">
                    <h3>{raid.name}</h3>
                    <div className="stat-details">
                      <div className="stat-item">
                        <span className="stat-label">Completions:</span>
                        <span className="stat-value">{raid.completions}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Best Time:</span>
                        <span className="stat-value">{raid.bestTime}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Sherpas:</span>
                        <span className="stat-value sherpa-count">{raid.sherpas}</span>
                      </div>
                      {raid.bossDamageText && (
                        <div className="stat-item boss-damage">
                          <span className="boss-damage-text">{raid.bossDamageText}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-stats">No raid completions found. Time to start raiding!</div>
            )}
          </div>

          <div className="stats-section">
            <h2>Dungeon Statistics</h2>
            {loadingStats ? (
              <div className="loading-stats">Loading real dungeon stats...</div>
            ) : bungieStats.dungeons.length > 0 ? (
              <div className="stats-grid">
                {bungieStats.dungeons.map((dungeon, index) => (
                  <div key={index} className="stat-card">
                    <h3>{dungeon.name}</h3>
                    <div className="stat-details">
                      <div className="stat-item">
                        <span className="stat-label">Completions:</span>
                        <span className="stat-value">{dungeon.completions}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Best Time:</span>
                        <span className="stat-value">{dungeon.bestTime}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Sherpas:</span>
                        <span className="stat-value sherpa-count">{dungeon.sherpas}</span>
                      </div>
                      {dungeon.bossDamageText && (
                        <div className="stat-item boss-damage">
                          <span className="boss-damage-text">{dungeon.bossDamageText}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-stats">No dungeon completions found. Time to start exploring!</div>
            )}
          </div>
        </div>
      ) : bungieData ? (
        <div className="stats-container">
          {loadingStats ? (
            <div className="loading-stats">⏳ Loading your Guardian stats from Bungie API...</div>
          ) : (
            <div className="connect-prompt">
              <h2>Stats Temporarily Unavailable</h2>
              <p>The Bungie API is taking longer than expected to respond. Your account is connected, but stats couldn't be loaded at this time.</p>
              <button 
                onClick={fetchBungieStats}
                style={{
                  background: '#0d7377',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginTop: '10px',
                  fontSize: '16px'
                }}
              >
                🔄 Retry Loading Stats
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="stats-container">
          <div className="connect-prompt">
            <h2>Connect Bungie.net to see your real stats!</h2>
            <p>View your actual raid completions, dungeon times, and Sherpa runs directly from your Destiny 2 account.</p>
          </div>
        </div>
      )}
    </div>
  ); 
}