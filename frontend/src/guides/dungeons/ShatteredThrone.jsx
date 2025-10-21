import React from "react";
import PlayerStats from "../../components/PlayerStats";
import '../../components/GuideStyles.css';

export default function ShatteredThrone() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/desertperp.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">The Shattered Throne</h1>
          <p className="guide-subtitle">Dreaming City's First Dungeon</p>
        </div>
      </div>
      
      <div className="guide-container">
        <PlayerStats 
          activityType="dungeon"
          activityName="The Shattered Throne"
          activitySlug="the-shattered-throne"
        />

        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              The Shattered Throne is a manifestation of Mara Sov's throne world within the Dreaming City. This realm between realities 
              has been corrupted by Taken forces, and Guardians must cleanse it to help break the curse upon the Dreaming City.
            </p>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">The Labyrinth</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Navigate the labyrinth while avoiding Thrall and solving symbol puzzles.</p>
              <p><strong>Strategy:</strong> Follow the slow path, clearing enemies as you go. Rushing leads to overwhelm.</p>
              <p><strong>Symbols:</strong> Shoot the correct symbols to unlock doors and progress.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Vorgeth, the Boundless Hunger</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat Vorgeth by collecting petitioner's marks.</p>
              <p><strong>Mechanic:</strong> Kill four wizards around the room. Each wizard drops a petitioner's mark. Collect all four to remove Vorgeth's immunity.</p>
              <p><strong>Strategy:</strong> Assign one wizard per player (if 4-man), or split duties in 3-man teams.</p>
              <p><strong>DPS:</strong> Once all marks are collected, you have ~15 seconds to damage Vorgeth before he wipes the team.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Sjur's Descent</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Navigate the descent while fighting Taken.</p>
              <p><strong>Strategy:</strong> Take your time on platforming. Clear enemies before advancing.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Dûl Incaru, the Eternal Return</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat Dûl Incaru and her three knights.</p>
              <p><strong>Mechanic:</strong> Kill Psions before they multiply. Kill all three knights to gain damage buff stacks.</p>
              <p><strong>Strategy:</strong> Clear Psions immediately. Kill all three knights, collect their buffs, then focus DPS on Dûl Incaru.</p>
              <p><strong>Enrage:</strong> You have limited time to kill the boss before enrage wipes your team.</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">🎁 Loot & Rewards</h2>
          <div className="loot-table">
            <div className="loot-item">
              <h4>Retold Tale</h4>
              <p><strong>Type:</strong> Void Shotgun</p>
              <p><strong>God Roll:</strong> Slideshot + Snapshot Sights</p>
            </div>
            
            <div className="loot-item">
              <h4>Vouchsafe</h4>
              <p><strong>Type:</strong> Kinetic Scout Rifle</p>
              <p><strong>God Roll:</strong> Rapid Hit + Kill Clip</p>
            </div>

            <div className="loot-item">
              <h4>Wish-Ender (Exotic)</h4>
              <p><strong>Type:</strong> Exotic Kinetic Bow</p>
              <p><strong>How to Obtain:</strong> Complete the "???" quest by finding all Taken eggs</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">💡 Pro Tips</h2>
          <ul className="tips-list">
            <li><strong>Labyrinth:</strong> Don't rush. Slow and steady wins the race.</li>
            <li><strong>Vorgeth Wizards:</strong> Kill them quickly to avoid being overwhelmed.</li>
            <li><strong>Psion Priority:</strong> In final encounter, ALWAYS kill Psions first.</li>
            <li><strong>Knight Buffs:</strong> Stack all three knight buffs before starting DPS on Dûl Incaru.</li>
            <li><strong>One-Phase:</strong> With proper buffs, you can one-phase the final boss with coordinated DPS.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
