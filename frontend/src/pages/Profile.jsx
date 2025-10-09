import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock data for raid and dungeon stats (you can replace this with real data later)
  const mockStats = {
    raids: [
      { name: "Last Wish", completions: 47, bestTime: "1h 23m", difficulty: "Master" },
      { name: "Garden of Salvation", completions: 23, bestTime: "1h 45m", difficulty: "Normal" },
      { name: "Deep Stone Crypt", completions: 156, bestTime: "52m", difficulty: "Master" },
      { name: "Vault of Glass", completions: 89, bestTime: "1h 12m", difficulty: "Master" },
      { name: "Vow of the Disciple", completions: 34, bestTime: "1h 35m", difficulty: "Normal" },
      { name: "King's Fall", completions: 67, bestTime: "1h 28m", difficulty: "Master" }
    ],
    dungeons: [
      { name: "Shattered Throne", completions: 78, bestTime: "15m 32s", difficulty: "Master" },
      { name: "Pit of Heresy", completions: 134, bestTime: "12m 45s", difficulty: "Master" },
      { name: "Prophecy", completions: 92, bestTime: "18m 23s", difficulty: "Master" },
      { name: "Grasp of Avarice", completions: 56, bestTime: "14m 12s", difficulty: "Master" },
      { name: "Duality", completions: 29, bestTime: "22m 56s", difficulty: "Normal" },
      { name: "Spire of the Watcher", completions: 41, bestTime: "16m 34s", difficulty: "Master" }
    ],
    totalHours: 847,
    favoriteClass: "Hunter",
    joinDate: "September 2019"
  };

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('discord_user');
    if (!userData) {
      navigate('/');
      return;
    }
    
    setUser(JSON.parse(userData));
    setLoading(false);
  }, [navigate]);

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
          <p className="guardian-info">Guardian since {mockStats.joinDate}</p>
          <p className="class-info">Main Class: {mockStats.favoriteClass}</p>
          <p className="hours-info">{mockStats.totalHours} hours played</p>
        </div>
      </div>

      <div className="stats-container">
        <div className="stats-section">
          <h2>Raid Statistics</h2>
          <div className="stats-grid">
            {mockStats.raids.map((raid, index) => (
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
                    <span className="stat-label">Difficulty:</span>
                    <span className={`stat-value ${raid.difficulty.toLowerCase()}`}>
                      {raid.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-section">
          <h2>Dungeon Statistics</h2>
          <div className="stats-grid">
            {mockStats.dungeons.map((dungeon, index) => (
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
                    <span className="stat-label">Difficulty:</span>
                    <span className={`stat-value ${dungeon.difficulty.toLowerCase()}`}>
                      {dungeon.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}