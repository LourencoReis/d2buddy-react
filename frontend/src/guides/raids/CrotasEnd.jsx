import React from "react";
import PlayerStats from "../../components/PlayerStats";
import '../../components/GuideStyles.css';

export default function CrotasEnd() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/crotasend.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">Crota's End</h1>
          <p className="guide-subtitle">The Dark Below</p>
        </div>
      </div>
      
      <div className="guide-container">
        <PlayerStats 
          activityType="raid"
          activityName="Crota's End"
          activitySlug="crotas-end"
        />

        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              Deep within the Hellmouth on the Moon lies Crota's End, the throne world of the Hive Prince Crota, Son of Oryx. 
              After Eris Morn's fireteam was slaughtered here, Guardians venture into the Ascendant Realm to end Crota's reign forever.
            </p>
            <p>
              This raid takes place in Crota's Oversoul Throne, a dimension of pure darkness where death is permanent and the Hive's 
              power is absolute. Only by wielding the Sword of Crota can Guardians hope to strike down this dark god.
            </p>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">The Abyss</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Navigate through the pitch-black Abyss while being chased by Thrall.</p>
              <p><strong>Strategy:</strong> One player should focus on building the bridge while others clear Thrall and stay alive.</p>
              <p><strong>Weight of Darkness:</strong> This debuff slows you down. Remove it by standing on illuminated plates.</p>
              <p><strong>Tips:</strong> Don't Greedy - wait for your team at checkpoints. Invisibility Hunters are very useful here.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">The Bridge</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Build a bridge by standing on plates, then cross to eliminate the Gatekeeper and Swordbearers.</p>
              <p><strong>Strategy:</strong> Form the bridge by having players stand on the central plate. Once formed, send players across one at a time.</p>
              <p><strong>Swordbearer:</strong> Kill the Swordbearer on your side, take the sword, and use it to kill the Gatekeeper on the opposite side.</p>
              <p><strong>Annihilator Totems:</strong> If plates aren't held, totems will wipe the team. Keep plates covered!</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Ir Yût, the Deathsinger</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat Ir Yût before her Liturgy of Ruin wipes your fireteam.</p>
              <p><strong>Strategy:</strong> Clear both wizard towers, then focus all DPS on Ir Yût in the center.</p>
              <p><strong>Time Limit:</strong> You have approximately 3 minutes from when you trigger the encounter to kill Ir Yût.</p>
              <p><strong>Tips:</strong> Coordinate supers and heavy ammo for a quick kill.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Crota, Son of Oryx</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat Crota using his own Sword.</p>
              
              <p><strong>Roles:</strong></p>
              <ul className="tips-list">
                <li>Swordbearer: Picks up the sword and attacks Crota</li>
                <li>DPS Team: Takes down Crota's shield so Swordbearer can damage him</li>
                <li>Boomer Knight Duty: Eliminates knights that spawn on towers</li>
              </ul>
              
              <p><strong>Phase 1:</strong></p>
              <p>Kill the Swordbearer, grab the sword, and coordinate with your team to take down Crota's shield. Once his shield is down, the Swordbearer gets 3-4 sword slams before Crota stands up.</p>
              
              <p><strong>Ogre Phase:</strong></p>
              <p>After two damage rotations, Crota moves to the center and Ogres spawn in the lower rooms. Kill the Ogres quickly.</p>
              
              <p><strong>Phase 2:</strong></p>
              <p>Repeat the damage phase. Crota will become Enraged after a set time - you must kill him before this or wipe.</p>
              
              <p><strong>Oversoul:</strong></p>
              <p>If anyone dies, the Oversoul appears. The team must shoot it down quickly or everyone wipes.</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">🎁 Loot & Rewards</h2>
          <div className="loot-table">
            <div className="loot-item">
              <h4>Abyss Defiant</h4>
              <p><strong>Type:</strong> Solar Auto Rifle</p>
              <p><strong>Drops From:</strong> The Abyss</p>
              <p><strong>God Roll:</strong> Firefly + Rampage</p>
            </div>
            
            <div className="loot-item">
              <h4>Oversoul Edict</h4>
              <p><strong>Type:</strong> Kinetic Pulse Rifle</p>
              <p><strong>Drops From:</strong> The Bridge</p>
              <p><strong>God Roll:</strong> Desperado + Kill Clip</p>
            </div>

            <div className="loot-item">
              <h4>Fang of Ir Yût</h4>
              <p><strong>Type:</strong> Arc Scout Rifle</p>
              <p><strong>Drops From:</strong> Ir Yût</p>
              <p><strong>God Roll:</strong> Triple Tap + Vorpal Weapon</p>
            </div>

            <div className="loot-item">
              <h4>Word of Crota</h4>
              <p><strong>Type:</strong> Void Hand Cannon</p>
              <p><strong>Drops From:</strong> Crota</p>
              <p><strong>God Roll:</strong> Explosive Payload + Frenzy</p>
            </div>

            <div className="loot-item">
              <h4>Necrochasm (Exotic)</h4>
              <p><strong>Type:</strong> Exotic Arc Auto Rifle</p>
              <p><strong>How to Obtain:</strong> Complete the Crota's End quest after multiple clears</p>
              <p><strong>Exotic Perk:</strong> Cursed Thrall explosions on precision kills</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">💡 Pro Tips</h2>
          <ul className="tips-list">
            <li><strong>Abyss:</strong> Hunters with invisibility can solo the lamp phase if needed.</li>
            <li><strong>Bridge:</strong> Don't try to cheese it - learn the proper mechanics.</li>
            <li><strong>Swordbearer Practice:</strong> Practice sword timing in patrols before attempting the raid.</li>
            <li><strong>Crota Timing:</strong> Call out "Crota's down" clearly so the Swordbearer knows when to attack.</li>
            <li><strong>Oversoul Priority:</strong> If someone dies, EVERYONE shoots the Oversoul immediately.</li>
            <li><strong>Gjallarhorn:</strong> Still one of the best weapons for taking down Crota's shield quickly.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
