import React from "react";
import PlayerStats from "../../components/PlayerStats";
import '../../components/GuideStyles.css';

export default function RootOfNightmares() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/rootofnightmares.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">Root of Nightmares</h1>
          <p className="guide-subtitle">Lightfall's Darkest Hour</p>
        </div>
      </div>
      
      <div className="guide-container">
        <PlayerStats 
          activityType="raid"
          activityName="Root of Nightmares"
          activitySlug="root-of-nightmares"
        />

        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              Within the Traveler's pale heart grows the Root of Nightmares, a twisted Pyramid ship infested with darkness. 
              The Witness has corrupted this vessel, transforming it into a nexus of Darkness energy that threatens all of Neptune.
            </p>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">Cataclysm</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Navigate the darkness-infested ship while managing Light and Dark buffs.</p>
              <p><strong>Mechanic:</strong> Players swap between Light and Dark by shooting nodes. Field of Light protects from darkness.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Scission</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Split your team and coordinate between two sides.</p>
              <p><strong>Strategy:</strong> Left and right teams must communicate to connect energy lines and enable damage phases.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Macrocosm</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Collect planetary essence and bank them while managing adds.</p>
              <p><strong>Roles:</strong> Runners collect essence, defenders protect plates, and add clear manages enemies.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Nezarec, Final God of Pain</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat Nezarec by managing Light and Dark buffs.</p>
              <p><strong>Mechanic:</strong> Shoot nodes to swap buffs, stand in correct safe zones during wipes, and coordinate DPS.</p>
              <p><strong>DPS Strategy:</strong> Izanagi's Burden, Linear Fusions, or Whisper of the Worm work well.</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">🎁 Loot & Rewards</h2>
          <div className="loot-table">
            <div className="loot-item">
              <h4>Rufus's Fury</h4>
              <p><strong>Type:</strong> Solar Auto Rifle</p>
              <p><strong>God Roll:</strong> Target Lock + Controlled Burst</p>
            </div>
            
            <div className="loot-item">
              <h4>Conditional Finality (Exotic)</h4>
              <p><strong>Type:</strong> Exotic Stasis/Solar Shotgun</p>
              <p><strong>How to Obtain:</strong> Raid exotic drop from Nezarec</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">💡 Pro Tips</h2>
          <ul className="tips-list">
            <li><strong>Buff Management:</strong> Always know which buff you have (Light or Dark).</li>
            <li><strong>Safe Zones:</strong> During Nezarec, being in the wrong safe zone = instant death.</li>
            <li><strong>Communication:</strong> Call out node swaps and safe zone locations clearly.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
