import React from "react";
import PlayerStats from "../../components/PlayerStats";
import '../../components/GuideStyles.css';

export default function GraspOfAvarice() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/desertperp.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">Grasp of Avarice</h1>
          <p className="guide-subtitle">Loot Cave Revisited</p>
        </div>
      </div>
      
      <div className="guide-container">
        <PlayerStats 
          activityType="dungeon"
          activityName="Grasp of Avarice"
          activitySlug="grasp-of-avarice"
        />

        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              The legendary Loot Cave on the Cosmodrome has become something far more sinister. Captain Avarokk, a Fallen obsessed with treasure, 
              has turned Guardians' greed into a trap. This dungeon is a celebration of Destiny's history wrapped in deadly danger.
            </p>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">The Loot Cave</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Survive waves of enemies while managing the Burden of Riches debuff.</p>
              <p><strong>Mechanic:</strong> Kill enemies to spawn engrams. Collect engrams to remove your debuff and deposit them.</p>
              <p><strong>Tip:</strong> If you hold the debuff too long, you'll die. Always pick up engrams!</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">The Fallen Shield</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Navigate a massive Fallen installation.</p>
              <p><strong>Strategy:</strong> Follow the path through the facility while defeating enemies.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Captain Avarokk, the Covetous</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat Captain Avarokk.</p>
              <p><strong>Mechanic:</strong> Manage Scorch Cannons and Burden of Riches to enable damage phases.</p>
              <p><strong>Strategy:</strong> Use Scorch Cannons to break Avarokk's shield, then damage him during vulnerable phases.</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">🎁 Loot & Rewards</h2>
          <div className="loot-table">
            <div className="loot-item">
              <h4>Eyasluna</h4>
              <p><strong>Type:</strong> Kinetic Hand Cannon (140 RPM)</p>
              <p><strong>God Roll:</strong> Rangefinder + Kill Clip</p>
            </div>
            
            <div className="loot-item">
              <h4>1000 Yard Stare</h4>
              <p><strong>Type:</strong> Arc Sniper Rifle</p>
              <p><strong>God Roll:</strong> Triple Tap + Firing Line</p>
            </div>

            <div className="loot-item">
              <h4>Gjallarhorn (Exotic)</h4>
              <p><strong>Type:</strong> Exotic Rocket Launcher</p>
              <p><strong>How to Obtain:</strong> Complete the "And Out Fly the Wolves" quest</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">💡 Pro Tips</h2>
          <ul className="tips-list">
            <li><strong>Burden Management:</strong> Always grab engrams before your timer runs out.</li>
            <li><strong>Scorch Cannons:</strong> Save heavy ammo for boss DPS - use Scorch Cannons for shields.</li>
            <li><strong>Eyasluna Farming:</strong> This is one of the best Hand Cannons in the game - farm it!</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
