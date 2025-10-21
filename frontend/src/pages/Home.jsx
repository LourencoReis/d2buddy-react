import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <h1>Forge Your Destiny</h1>
        <p className="subtitle">The ultimate guide for Raids and Dungeons</p>
        <div className="hero-actions">
          <Link to="/raids" className="cta-btn purple">View Raids</Link>
          <Link to="/dungeons" className="cta-btn dark">View Dungeons</Link>
        </div>
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