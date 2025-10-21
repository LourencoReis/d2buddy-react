import React from "react";
import PlayerStats from "../../components/PlayerStats";
import '../../components/GuideStyles.css';

export default function KingsFall() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/kingsfall.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">King's Fall</h1>
          <p className="guide-subtitle">The Taken King's Dreadnaught</p>
        </div>
      </div>
      
      <div className="guide-container">
        <PlayerStats 
          activityType="raid"
          activityName="King's Fall"
          activitySlug="kings-fall"
        />

        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              Oryx, the Taken King, waits aboard his Dreadnaught - a weapon capable of destroying entire fleets. After the death of his son Crota, 
              Oryx has come to our solar system seeking revenge. Guardians must venture into his throne world and end his reign.
            </p>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">Tomb Ships & Portal</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Jump across moving tomb ships and activate the portal.</p>
              <p><strong>Strategy:</strong> Time your jumps carefully. One player must activate relics to progress.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Totems / Warpriest</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Maintain the Deathsinger's Power by swapping between plates.</p>
              <p><strong>Strategy:</strong> Players rotate between left and middle, right and middle plates to prevent wipes.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Golgoroth</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat Golgoroth using his own pool of reclaimed light.</p>
              <p><strong>Strategy:</strong> Gaze holder captures Golgoroth's attention while the team DPSs from the damage pool.</p>
              <p><strong>DPS:</strong> Linear Fusions, Snipers, or Whisper of the Worm recommended.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Daughters of Oryx</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat both Deathsingers before their song kills your team.</p>
              <p><strong>Mechanic:</strong> One player becomes the "torn between dimensions" runner and must jump through platforms.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Oryx, the Taken King</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat Oryx by detonating corrupted light bombs.</p>
              <p><strong>Mechanic:</strong> Kill Ogres, collect light, stagger Oryx, detonate bombs in final stand.</p>
              <p><strong>Final Stand:</strong> Once Oryx reaches low health, detonate all remaining bombs to finish him.</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">🎁 Loot & Rewards</h2>
          <div className="loot-table">
            <div className="loot-item">
              <h4>Smite of Merain</h4>
              <p><strong>Type:</strong> Arc Pulse Rifle</p>
              <p><strong>God Roll:</strong> Demolitionist + Adrenaline Junkie</p>
            </div>
            
            <div className="loot-item">
              <h4>Touch of Malice (Exotic)</h4>
              <p><strong>Type:</strong> Exotic Kinetic Scout Rifle</p>
              <p><strong>How to Obtain:</strong> Complete the King's Fall exotic quest</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">💡 Pro Tips</h2>
          <ul className="tips-list">
            <li><strong>Platforming:</strong> Practice your jumps - King's Fall has a lot of jumping sections.</li>
            <li><strong>Oryx Bombs:</strong> Don't detonate bombs early. Wait for the final stand phase.</li>
            <li><strong>Communication:</strong> Call out torn player, Ogre kills, and knight positions clearly.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
