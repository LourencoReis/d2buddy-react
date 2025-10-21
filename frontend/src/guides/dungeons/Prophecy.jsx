import React from "react";
import PlayerStats from "../../components/PlayerStats";
import '../../components/GuideStyles.css';

export default function Prophecy() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/desertperp.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">Prophecy</h1>
          <p className="guide-subtitle">The Nine's Trial</p>
        </div>
      </div>
      
      <div className="guide-container">
        <PlayerStats 
          activityType="dungeon"
          activityName="Prophecy"
          activitySlug="prophecy"
        />

        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              The Nine have created a realm between Light and Dark, where they test Guardians to understand the balance between these forces. 
              Prophecy challenges fireteams to master both Light and Dark mechanics while confronting manifestations of the Nine's will.
            </p>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">Phalanx Echo</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat the Phalanx Echo while managing Light and Dark motes.</p>
              <p><strong>Mechanic:</strong> Kill Light or Dark enemies to collect corresponding motes. Bank motes to activate DPS.</p>
              <p><strong>Strategy:</strong> Designate Light and Dark runners. Coordinate mote collection and banking.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">The Wasteland (Cube Room)</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Navigate the cube room while managing Hobgoblins and knights.</p>
              <p><strong>Strategy:</strong> Clear enemies systematically. Take your time - rushing leads to wipes.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">The Hexahedron</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Complete the jumping puzzle while managing Taken enemies.</p>
              <p><strong>Tip:</strong> Stay together and help teammates who fall behind.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Kell Echo</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat the Kell Echo using Light and Dark mote mechanics.</p>
              <p><strong>Strategy:</strong> Similar to first encounter - collect and bank motes. Kell Echo teleports frequently.</p>
              <p><strong>DPS:</strong> Use the activated platforms for damage buff. Swords, Snipers, or Linear Fusions work well.</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">🎁 Loot & Rewards</h2>
          <div className="loot-table">
            <div className="loot-item">
              <h4>Darkest Before</h4>
              <p><strong>Type:</strong> Arc Pulse Rifle</p>
              <p><strong>God Roll:</strong> Killing Wind + Rampage</p>
            </div>
            
            <div className="loot-item">
              <h4>A Sudden Death</h4>
              <p><strong>Type:</strong> Void Shotgun</p>
              <p><strong>God Roll:</strong> Slideshot + Opening Shot</p>
            </div>

            <div className="loot-item">
              <h4>The Long Walk</h4>
              <p><strong>Type:</strong> Arc Sniper Rifle</p>
              <p><strong>God Roll:</strong> Triple Tap + Vorpal Weapon</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">💡 Pro Tips</h2>
          <ul className="tips-list">
            <li><strong>Mote Balance:</strong> Don't bank all Light or all Dark - balance them.</li>
            <li><strong>Cube Room:</strong> Clear Hobgoblins first, then focus on Knights.</li>
            <li><strong>Kell Teleports:</strong> The boss teleports often - stay mobile and track its location.</li>
            <li><strong>Platform Buff:</strong> Always stand on the glowing platform during DPS for extra damage.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
