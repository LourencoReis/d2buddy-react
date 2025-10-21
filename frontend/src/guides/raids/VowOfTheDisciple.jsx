import React from "react";
import PlayerStats from "../../components/PlayerStats";
import '../../components/GuideStyles.css';

export default function VowOfTheDisciple() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/vowofthedisciple.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">Vow of the Disciple</h1>
          <p className="guide-subtitle">Rhulk's Pyramid</p>
        </div>
      </div>
      
      <div className="guide-container">
        <PlayerStats 
          activityType="raid"
          activityName="Vow of the Disciple"
          activitySlug="vow-of-the-disciple"
        />

        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              Deep within Savathûn's Throne World lies a sunken Pyramid ship, home to Rhulk, Disciple of the Witness. 
              This ancient being wields the Darkness itself and has corrupted an entire Worm God. Guardians must venture into 
              this alien vessel to stop Rhulk's plans before it's too late.
            </p>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">Acquisition (Opening)</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Learn the symbol language and unlock the pyramid.</p>
              <p><strong>Strategy:</strong> Three readers call out symbols to three operators who shoot the correct symbols.</p>
              <p><strong>Symbols:</strong> Learn to recognize all nine symbols quickly.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Caretaker</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Stun the Caretaker while reading and shooting symbols across three floors.</p>
              <p><strong>Roles:</strong> Stunning team (3 players) and Symbol team (3 players)</p>
              <p><strong>Strategy:</strong> Stunning team shoots the Caretaker's weak spots. Symbol team progresses floors by reading symbols.</p>
              <p><strong>Wipe Mechanic:</strong> If the Caretaker reaches the top floor, your team wipes.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Exhibition (Totem Room)</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Carry relics through rooms while killing Glyphkeepers.</p>
              <p><strong>Strategy:</strong> Two teams of three. Each team carries a relic (Aegis or Taken Essence) through three rooms.</p>
              <p><strong>Key Mechanic:</strong> Kill Glyphkeepers to reveal symbols. Match the symbol on your screen to progress.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Rhulk, Disciple of the Witness</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat Rhulk while managing his aggressive movement and mechanics.</p>
              
              <p><strong>Phase 1 - Leeching Force:</strong></p>
              <p>Break Rhulk's shields by dunking emanating Force into appropriate obelisks. Read symbols to know which obelisk.</p>
              
              <p><strong>Phase 2 - DPS:</strong></p>
              <p>Once all shields are broken, Rhulk becomes vulnerable. Stand on safe platforms and damage him.</p>
              <p><strong>Warning:</strong> Rhulk is extremely aggressive and will chase players. Stay mobile!</p>
              
              <p><strong>Final Stand:</strong></p>
              <p>At low health, Rhulk destroys all platforms. You have limited time to finish him before the arena collapses.</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">🎁 Loot & Rewards</h2>
          <div className="loot-table">
            <div className="loot-item">
              <h4>Submission</h4>
              <p><strong>Type:</strong> Void SMG</p>
              <p><strong>God Roll:</strong> Frenzy + Rampage</p>
            </div>
            
            <div className="loot-item">
              <h4>Cataclysmic</h4>
              <p><strong>Type:</strong> Solar Linear Fusion Rifle</p>
              <p><strong>God Roll:</strong> Fourth Time's the Charm + Bait and Switch</p>
            </div>

            <div className="loot-item">
              <h4>Collective Obligation (Exotic)</h4>
              <p><strong>Type:</strong> Exotic Void Pulse Rifle</p>
              <p><strong>How to Obtain:</strong> Random drop from Rhulk</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">💡 Pro Tips</h2>
          <ul className="tips-list">
            <li><strong>Symbol Memorization:</strong> Learn all nine symbols before attempting the raid.</li>
            <li><strong>Caretaker Stunning:</strong> Three direct hits to weak points stun him. Coordinate shots.</li>
            <li><strong>Exhibition Communication:</strong> Call out symbols clearly to avoid confusion.</li>
            <li><strong>Rhulk Movement:</strong> He will chase you. Keep moving and maintain distance.</li>
            <li><strong>Final Stand:</strong> Save heavy ammo and supers for the final damage phase.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
