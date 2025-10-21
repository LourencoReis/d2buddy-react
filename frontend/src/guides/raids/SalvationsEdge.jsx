import React from "react";
import PlayerStats from "../../components/PlayerStats";
import '../../components/GuideStyles.css';

export default function SalvationsEdge() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/salvationsedge.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">Salvation's Edge</h1>
          <p className="guide-subtitle">The Final Shape</p>
        </div>
      </div>
      
      <div className="guide-container">
        <PlayerStats 
          activityType="raid"
          activityName="Salvation's Edge"
          activitySlug="salvations-edge"
        />

        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              At the very edge of known reality lies Salvation's Edge, a realm where the Witness seeks to complete its final mission. 
              This raid challenges Guardians to confront the ultimate threat and prevent the collapse of existence itself.
            </p>
            <p>
              The architecture here defies understanding - paracausal forces warp space and time, creating impossible geometries that 
              shift between dimensions. Only through mastery of Light and Dark can fireteams hope to succeed.
            </p>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">Encounter 1: Herald of Finality</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat the Herald while managing reality-shifting mechanics.</p>
              <p><strong>Strategy:</strong> Split into three teams. Coordinate plate activations while clearing waves of Taken and Subjugators.</p>
              <p><strong>Key Mechanic:</strong> Players must collect and deposit resonance to unlock damage phases.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Encounter 2: Verity (Dissent)</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Solve shape-matching puzzles while under time pressure.</p>
              <p><strong>Roles:</strong> Inside team (3 players) and Outside team (3 players)</p>
              <p><strong>Strategy:</strong> Inside players must communicate shapes and statues. Outside players guide them through correct sequences.</p>
              <p><strong>Wipe Mechanic:</strong> Failing to match shapes correctly or running out of time causes a wipe.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Encounter 3: Repository</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Bank darkness energy while defending against continuous waves.</p>
              <p><strong>Strategy:</strong> Designate runners to collect and bank darkness charges. Defenders clear adds and protect runners.</p>
              <p><strong>Key Points:</strong> Communication is critical. Call out when charges are ready and when help is needed.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Final Boss: The Witness</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat the Witness and save the universe from the Final Shape.</p>
              
              <p><strong>Phase 1 - Glyphkeeper:</strong></p>
              <p>Teams must defeat Glyphkeepers and collect glyphs to progress. Assign teams to left, middle, and right.</p>
              
              <p><strong>Phase 2 - Resonance:</strong></p>
              <p>Collect resonance from defeated enemies and deposit at nodes. All six nodes must be activated simultaneously.</p>
              
              <p><strong>Phase 3 - DPS:</strong></p>
              <p>Once all nodes are active, the Witness becomes vulnerable. Stand in the safe zone and unleash maximum damage.</p>
              <p><strong>Recommended DPS:</strong> Still Hunt, Linear Fusion Rifles, or Explosive Light rockets.</p>
              
              <p><strong>Final Stand:</strong></p>
              <p>At low health, the Witness enters enrage. Focus all remaining damage to finish the encounter.</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">🎁 Loot & Rewards</h2>
          <div className="loot-table">
            <div className="loot-item">
              <h4>Caretaker's Rebuke</h4>
              <p><strong>Type:</strong> Kinetic Pulse Rifle</p>
              <p><strong>God Roll:</strong> Onslaught + Target Lock</p>
            </div>
            
            <div className="loot-item">
              <h4>Edge of Intent</h4>
              <p><strong>Type:</strong> Solar Fusion Rifle</p>
              <p><strong>God Roll:</strong> Envious Assassin + Bait and Switch</p>
            </div>

            <div className="loot-item">
              <h4>Saved by the Final Shape</h4>
              <p><strong>Type:</strong> Void Linear Fusion Rifle</p>
              <p><strong>God Roll:</strong> Precision Instrument + Focused Fury</p>
            </div>

            <div className="loot-item">
              <h4>Acasia's Dejection (Exotic)</h4>
              <p><strong>Type:</strong> Exotic Trace Rifle</p>
              <p><strong>How to Obtain:</strong> Complete raid challenges and quest steps</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">💡 Pro Tips</h2>
          <ul className="tips-list">
            <li><strong>Verity Communication:</strong> Use clear, consistent callouts for shapes (sphere, cube, pyramid, cylinder, cone, prism).</li>
            <li><strong>Prismatic Builds:</strong> Salvation's Edge benefits greatly from Prismatic subclass combinations.</li>
            <li><strong>Rally Flags:</strong> Always use rally banners before each encounter.</li>
            <li><strong>Practice Verity:</strong> This encounter is the hardest for most teams. Practice shape recognition.</li>
            <li><strong>Node Timing:</strong> During Witness, coordinate node activations with countdowns.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
