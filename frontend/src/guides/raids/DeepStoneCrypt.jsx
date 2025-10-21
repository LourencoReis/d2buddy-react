import React from "react";
import PlayerStats from "../../components/PlayerStats";
import '../../components/GuideStyles.css';

export default function DeepStoneCrypt() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/deepstonecrypt.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">Deep Stone Crypt</h1>
          <p className="guide-subtitle">Europa's Secret</p>
        </div>
      </div>
      
      <div className="guide-container">
        <PlayerStats 
          activityType="raid"
          activityName="Deep Stone Crypt"
          activitySlug="deep-stone-crypt"
        />

        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              Hidden beneath Europa's frozen surface lies the Deep Stone Crypt, the birthplace of the Exos. This Bray Tech facility 
              holds dark secrets about the creation of Exo consciousness and has been compromised by Fallen forces led by Eramis's lieutenants.
            </p>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">Crypt Security</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Disable the Crypt Security system by coordinating between basement and upper areas.</p>
              <p><strong>Roles:</strong> Scanner (sees which panels to shoot), Operator (shoots panels)</p>
              <p><strong>Strategy:</strong> Scanner calls out which fuses to shoot. Operator shoots them. Rotate augments between players.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Atraks-1, Fallen Exo</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat Atraks-1 while managing her replication mechanic.</p>
              <p><strong>Roles:</strong> Scanner (identifies real Atraks), Operator (opens airlocks), Suppressor (stops wipe mechanic)</p>
              <p><strong>Strategy:</strong> Damage Atraks-1 until she replicates. Scanner identifies the glowing Atraks. Operator ejects her through airlocks.</p>
              <p><strong>Space Walk:</strong> Some players go to space to eject Atraks copies.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Rapture (Descent)</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Descend through Europa while managing panels and augments.</p>
              <p><strong>Strategy:</strong> Operator shoots panels to slow descent. Scanner identifies correct panels.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Taniks, the Abomination</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat the reborn Taniks using nuclear cores.</p>
              
              <p><strong>Phase 1 - Core Collection:</strong></p>
              <p>Defeat Taniks's shield using Scanner to identify correct panels. Collect nuclear cores and bank them.</p>
              
              <p><strong>Phase 2 - Orbital Strike:</strong></p>
              <p>Deposit cores in bins. Once all four bins are filled, Taniks launches an orbital strike. Hide in the safety bubble.</p>
              
              <p><strong>Phase 3 - DPS:</strong></p>
              <p>After orbital strike, damage Taniks. Repeat the cycle until he's defeated.</p>
              
              <p><strong>Final Stand:</strong></p>
              <p>Taniks detaches and you must finish him quickly as debris falls from the ceiling.</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">🎁 Loot & Rewards</h2>
          <div className="loot-table">
            <div className="loot-item">
              <h4>Trustee</h4>
              <p><strong>Type:</strong> Kinetic Scout Rifle</p>
              <p><strong>God Roll:</strong> Reconstruction + Redirection</p>
            </div>
            
            <div className="loot-item">
              <h4>Succession</h4>
              <p><strong>Type:</strong> Kinetic Sniper Rifle</p>
              <p><strong>God Roll:</strong> Reconstruction + Vorpal Weapon</p>
            </div>

            <div className="loot-item">
              <h4>Eyes of Tomorrow (Exotic)</h4>
              <p><strong>Type:</strong> Exotic Rocket Launcher</p>
              <p><strong>How to Obtain:</strong> Random drop from Taniks</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">💡 Pro Tips</h2>
          <ul className="tips-list">
            <li><strong>Augment Rotation:</strong> Practice swapping augments smoothly.</li>
            <li><strong>Atraks DPS:</strong> Lament (Exotic Sword) melts Atraks quickly.</li>
            <li><strong>Core Management:</strong> Don't hold cores too long or you'll die.</li>
            <li><strong>Safety Bubble:</strong> Get in the bubble BEFORE the orbital strike countdown ends.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
