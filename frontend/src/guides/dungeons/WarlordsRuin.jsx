import React from "react";
import PlayerStats from "../../components/PlayerStats";
import '../../components/GuideStyles.css';

export default function WarlordsRuin() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/desertperp.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">Warlord's Ruin</h1>
          <p className="guide-subtitle">Fortress of Broken Dreams</p>
        </div>
      </div>
      
      <div className="guide-container">
        <PlayerStats 
          activityType="dungeon"
          activityName="Warlord's Ruin"
          activitySlug="warlords-ruin"
        />

        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              Hidden within the European Dead Zone lies a fortress once ruled by a powerful Warlord. The fortress has fallen into darkness, 
              and now Taken forces occupy its halls. Guardians must venture into the ruins to uncover its secrets.
            </p>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">The Ascent</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Navigate treacherous terrain while fighting Taken enemies.</p>
              <p><strong>Strategy:</strong> Use environmental hazards to your advantage.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Final Boss: The Warlord</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat the corrupted Warlord.</p>
              <p><strong>Strategy:</strong> Manage immunity phases and environmental mechanics.</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">🎁 Loot & Rewards</h2>
          <div className="loot-table">
            <div className="loot-item">
              <h4>Warlord's Weapons</h4>
              <p><strong>Note:</strong> Features unique weapon designs themed around the fortress.</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">💡 Pro Tips</h2>
          <ul className="tips-list">
            <li><strong>Platforming:</strong> Take your time on jumping puzzles.</li>
            <li><strong>Taken Mods:</strong> Consider using Taken barrier mods.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
