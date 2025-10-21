import React from "react";
import PlayerStats from "../../components/PlayerStats";
import '../../components/GuideStyles.css';

export default function GhostsOfTheDeep() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/desertperp.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">Ghosts of the Deep</h1>
          <p className="guide-subtitle">Titan's Depths</p>
        </div>
      </div>
      
      <div className="guide-container">
        <PlayerStats 
          activityType="dungeon"
          activityName="Ghosts of the Deep"
          activitySlug="ghosts-of-the-deep"
        />

        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              Deep beneath Titan's methane seas lies an ancient Hive fortress. The Lucent Brood has claimed this underwater stronghold, 
              and strange echoes of the past haunt its corridors. Guardians must dive into the abyss to confront what lies beneath.
            </p>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">The Descent</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Navigate through underwater sections while managing oxygen.</p>
              <p><strong>Strategy:</strong> Move quickly between air pockets.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">The Ritual</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Disrupt Hive rituals while managing symbols.</p>
              <p><strong>Strategy:</strong> Coordinate symbol shooting with your fireteam.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Final Boss: Ecthar, Sword of Oryx</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat Ecthar using relic mechanics.</p>
              <p><strong>Strategy:</strong> Use the Aegis to break shields and enable DPS phases.</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">🎁 Loot & Rewards</h2>
          <div className="loot-table">
            <div className="loot-item">
              <h4>The Navigator (Exotic)</h4>
              <p><strong>Type:</strong> Exotic Strand Trace Rifle</p>
              <p><strong>How to Obtain:</strong> Random drop from final encounter</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">💡 Pro Tips</h2>
          <ul className="tips-list">
            <li><strong>Oxygen Management:</strong> Plan your route through underwater sections.</li>
            <li><strong>Aegis Mastery:</strong> Practice using the Aegis relic effectively.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
