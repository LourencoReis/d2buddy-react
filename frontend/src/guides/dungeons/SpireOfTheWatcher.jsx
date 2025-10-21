import React from "react";
import PlayerStats from "../../components/PlayerStats";
import '../../components/GuideStyles.css';

export default function SpireOfTheWatcher() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/desertperp.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">Spire of the Watcher</h1>
          <p className="guide-subtitle">Mars Observation Tower</p>
        </div>
      </div>
      
      <div className="guide-container">
        <PlayerStats 
          activityType="dungeon"
          activityName="Spire of the Watcher"
          activitySlug="spire-of-the-watcher"
        />

        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              On Mars stands an ancient Warmind observation tower, now overrun by hostile forces. The Spire holds valuable data and technology 
              that must be secured. Guardians must ascend the tower and neutralize the threat.
            </p>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">Ascent Encounter</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Climb the tower while managing arc charges.</p>
              <p><strong>Strategy:</strong> Collect and deposit arc charges to activate elevators.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Akelous, the Siren's Current</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat the Harpy boss using arc conductor mechanics.</p>
              <p><strong>Strategy:</strong> Chain arc energy between conduits to damage the boss.</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">🎁 Loot & Rewards</h2>
          <div className="loot-table">
            <div className="loot-item">
              <h4>Hierarchy of Needs (Exotic)</h4>
              <p><strong>Type:</strong> Exotic Arc Bow</p>
              <p><strong>How to Obtain:</strong> Random drop from final encounter</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">💡 Pro Tips</h2>
          <ul className="tips-list">
            <li><strong>Arc Charges:</strong> Don't hold charges too long or you'll die.</li>
            <li><strong>Conductor Chains:</strong> Position yourself to chain arc energy efficiently.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
