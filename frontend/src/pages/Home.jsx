import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in with Bungie
    const bungieData = localStorage.getItem('bungie_data');
    if (bungieData) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleBungieLogin = () => {
    const bungieClientId = '50907';
    const redirectUri = 'https://sherpas-corner.vercel.app/api/auth/bungie/callback';
    const bungieAuthUrl = `https://www.bungie.net/en/oauth/authorize?client_id=${bungieClientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}`;
    
    console.log('Redirecting to Bungie auth:', bungieAuthUrl);
    window.location.href = bungieAuthUrl;
  };

  return (
    <main className="home-page">
      <section className="hero">
        <h1>Forge Your Destiny</h1>
        <p className="subtitle">The ultimate guide for Raids and Dungeons</p>
        
        {!isLoggedIn ? (
          <div className="hero-actions">
            <button 
              onClick={handleBungieLogin}
              className="cta-btn purple"
              style={{
                fontSize: '1.3rem',
                padding: '1rem 3rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              🎮 Sign in with Bungie.net
            </button>
            <p style={{ 
              color: '#ccc', 
              marginTop: '1rem',
              fontSize: '0.95rem'
            }}>
              Connect your Bungie account to access guides and track your stats
            </p>
          </div>
        ) : (
          <div className="hero-actions">
            <Link to="/raids" className="cta-btn purple">View Raids</Link>
            <Link to="/dungeons" className="cta-btn dark">View Dungeons</Link>
            <Link to="/profile" className="cta-btn dark">My Profile</Link>
          </div>
        )}
      </section>
      <section className="features-grid">
        <div className="feature-card-home">
          <div className="feature-icon">⚡</div>
          <div>
            <h3>Make your own Fate</h3>
            <p>Apply your knowledge to find and optimize your raid and dungeon strategies.</p>
          </div>
        </div>
        <div className="feature-card-home">
          <div className="feature-icon">🛡️</div>
          <div>
            <h3>Comprehensive Guides</h3>
            <p>Step-by-step walkthroughs for every encounter, challenge and puzzles.</p>
          </div>
        </div>
        <div className="feature-card-home bottom-card">
          <div className="feature-icon">
            <img src="/images/raidicon.jpg" alt="Crown" className="home-crown-icon" />
          </div>
          <div>
            <h3>Perfect Builds</h3>
            <p>Tips to fine-tune your loadout for every activity.</p>
          </div>
        </div>
      </section>
    </main>
  );
}