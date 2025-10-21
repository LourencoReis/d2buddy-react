import React from "react";
import PlayerStats from "../../components/PlayerStats";
import '../../components/GuideStyles.css';

export default function VespersHost() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/desertperp.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">Vesper's Host</h1>
          <p className="guide-subtitle">Echoes of the Past</p>
        </div>
      </div>
      
      <div className="guide-container">
        <PlayerStats 
          activityType="dungeon"
          activityName="Vesper's Host"
          activitySlug="vespers-host"
        />

        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              Vesper's Host is a mysterious Bray facility housing experimental technology. Fallen forces have breached the station, 
              seeking to harness its power for their own purposes. Guardians must infiltrate and secure the station before it's too late.
            </p>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">First Encounter</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Navigate security systems while managing augment mechanics.</p>
              <p><strong>Strategy:</strong> Coordinate augment usage to bypass security and progress.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Final Boss</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat the Fallen commander.</p>
              <p><strong>Strategy:</strong> Manage DPS phases while handling mechanical challenges.</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">🎁 Loot & Rewards</h2>
          <div className="loot-table">
            <div className="loot-item">
              <h4>Dungeon Weapons</h4>
              <p><strong>Note:</strong> Check collections for specific weapon drops from this dungeon.</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">💡 Pro Tips</h2>
          <ul className="tips-list">
            <li><strong>Communication:</strong> Clear callouts are essential for success.</li>
            <li><strong>Loadout:</strong> Bring a mix of add-clear and boss DPS weapons.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
