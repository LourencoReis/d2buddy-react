import React, { useState, useEffect } from 'react';
import './PlayerStats.css';

export default function PlayerStats({ activityType, activityName, activitySlug }) {
  const [stats, setStats] = useState({
    totalClears: 0,
    exotic: {
      owned: false,
      name: '',
      icon: null
    },
    loading: true,
    error: null
  });

  useEffect(() => {
    if (activitySlug) {
      fetchPlayerStats();
    }
  }, [activitySlug]);

  const fetchPlayerStats = async () => {
    try {
      setStats(prev => ({ ...prev, loading: true, error: null }));

      // Simple mock stats fallback by slug
      const mockStats = {
        raids: {
          'vault-of-glass': { completions: 42, bestTime: '19:12' },
          'last-wish': { completions: 37, bestTime: '24:05' },
          'deep-stone-crypt': { completions: 55, bestTime: '18:47' },
          'garden-of-salvation': { completions: 21, bestTime: '27:30' },
          'vow-of-the-disciple': { completions: 16, bestTime: '36:14' },
          'root-of-nightmares': { completions: 28, bestTime: '22:40' }
        },
        dungeons: {
          'vespers-host': { completions: 14, bestTime: '16:32' },
          'warlords-ruin': { completions: 73, bestTime: '12:58' },
          'ghosts-of-the-deep': { completions: 39, bestTime: '20:44' },
          'spire-of-the-watcher': { completions: 25, bestTime: '18:33' },
          'duality': { completions: 61, bestTime: '15:06' },
          'grasp-of-avarice': { completions: 48, bestTime: '17:21' },
          'prophecy': { completions: 82, bestTime: '13:55' },
          'pit-of-heresy': { completions: 88, bestTime: '11:43' },
          'the-shattered-throne': { completions: 77, bestTime: '14:22' }
        }
      };

      // For now, let's use the actual stats API instead of manifest
  const bungieData = localStorage.getItem('bungie_data');
      if (bungieData) {
        console.log('Found Bungie data, fetching real stats...');
        const data = JSON.parse(bungieData);
        
        // Fetch real stats from our stats API
        const statsResponse = await fetch(`/api/stats-simple`, {
          headers: {
            'Authorization': `Bearer ${data.accessToken}`,
          },
        });
        
        if (statsResponse.ok) {
          const realStats = await statsResponse.json();
          console.log('Real stats received:', realStats);
          
          // Find this specific activity in the stats
          const allActivities = [...realStats.raids, ...realStats.dungeons];
          const thisActivity = allActivities.find(activity => 
            activity.name.toLowerCase().replace(/[^a-z0-9]/g, '-') === activitySlug ||
            activity.name.toLowerCase().includes(activityName.toLowerCase().split(' ')[0])
          );
          
          console.log('Found activity:', thisActivity);
          
          if (thisActivity) {
            setStats(prev => ({
              ...prev,
              totalClears: thisActivity.completions,
              bestTime: thisActivity.bestTime,
              loading: false
            }));
          } else {
            // Activity not found, use default
            setStats(prev => ({
              ...prev,
              totalClears: 0,
              loading: false
            }));
          }
        } else {
          throw new Error('Failed to fetch real stats');
        }
      } else {
        console.log('No Bungie data found, using mock stats');
        const mock = (activityType === 'raid' ? mockStats.raids[activitySlug] : mockStats.dungeons[activitySlug]) || { completions: 0 };
        setStats(prev => ({
          ...prev,
          totalClears: mock.completions || 0,
          bestTime: mock.bestTime,
          loading: false,
        }));
      }

    } catch (error) {
      console.error('Error fetching player stats:', error);
      // On error, fall back to mock stats
      const mock = (activityType === 'raid' ? mockStats.raids[activitySlug] : mockStats.dungeons[activitySlug]) || { completions: 0 };
      setStats(prev => ({
        ...prev,
        totalClears: mock.completions || 0,
        bestTime: mock.bestTime,
        loading: false,
      }));
    }
  };

  if (stats.loading) {
    return (
      <div className="player-stats-container">
        <div className="stats-loading">Loading your progress...</div>
      </div>
    );
  }

  if (stats.error) {
    return (
      <div className="player-stats-container">
        <div className="stats-error">{stats.error}</div>
      </div>
    );
  }

  return (
    <div className="player-stats-container">
      <h3 className="stats-title">🏆 {activityName} - Your Progress</h3>
      
      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-label">
            <img src="/images/crown-icon.png" alt="Crown" className="stat-icon" />
            Total Clears:
          </span>
          <span className="stat-value">{stats.totalClears}</span>
        </div>
        
        {stats.exotic.name && (
          <div className="exotic-item">
            <div className="exotic-icon-container">
              {stats.exotic.icon && (
                <img 
                  src={stats.exotic.icon} 
                  alt={stats.exotic.name}
                  className="exotic-icon"
                />
              )}
              <span className="exotic-name">{stats.exotic.name}</span>
            </div>
            <div className="exotic-status">
              {stats.exotic.owned ? (
                <span className="status-owned">✅</span>
              ) : (
                <span className="status-missing">❌</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}