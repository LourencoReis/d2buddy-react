import React from "react";
import PlayerStats from "../../components/PlayerStats";
import '../../components/GuideStyles.css';

export default function Duality() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/desertperp.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">Duality</h1>
          <p className="guide-subtitle">Calus's Mindscape</p>
        </div>
      </div>
      
      <div className="guide-container">
        <PlayerStats 
          activityType="dungeon"
          activityName="Duality"
          activitySlug="duality"
        />

        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              Within Emperor Calus's mind lies a twisted reflection of the Leviathan. This dungeon explores the duality between reality and nightmare, 
              as Guardians navigate between the physical and mental planes to confront Calus's darkest thoughts.
            </p>
          </div>
        </section>
        <section className="guide-section">
          <h2 className="section-title">🔔 Dungeon Start Puzzle</h2>
          <div className="encounter-content">
            <p>
              In the start of the dungeon the player will fall from a great height into what looks like a dead end.
              However, at the very end of the room that you can see through the bars, there is a <strong>bell</strong>.
            </p>
            
            {/* Image Section */}
            <div className="encounter-image">
              <img src="/images/bell.jpg" alt="The Bell mechanic in Duality" />
              <p className="image-caption">The Bell - Main mechanic for realm swapping</p>
            </div>
            
            <p>
              This is the <strong>main mechanic</strong> for the dungeon. When you shoot it until completion, 
              it teleports you to the <strong>Nightmare Realm</strong>.
            </p>
            
            <p><strong>How It Works:</strong></p>
            <ul>
              <li>The Nightmare Realm allows you to travel to places you normally aren't supposed to reach</li>
              <li>You use bells to access different mechanics or travel distances that are blocked in the normal realm</li>
              <li>To progress from the start, shoot the bell and move forward</li>
            </ul>
            
            <p><strong>⚠️ Important Warning:</strong></p>
            <p>
              When you're in the Nightmare Realm and see another bell, <strong>DO NOT shoot it from far away!</strong> 
              If you shoot it when you're not close to it, you will die. To use the bell correctly in the Nightmare Realm, 
              you must be standing <strong>close to it</strong> before shooting to safely teleport back to the normal world.
            </p>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">Nightmare of Gahlran</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat Gahlran while managing realm shifts.</p>
              <p><strong>Mechanic:</strong> Ring the bells to swap between Nightmare and Reality realms.</p>
              <p><strong>Strategy:</strong> Collect Standards in Nightmare, deposit in Reality to enable DPS.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">The Vault</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Navigate the vault while managing two-realm mechanics.</p>
              <p><strong>Strategy:</strong> Coordinate between Nightmare and Reality teams to progress.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Nightmare of Caiatl</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat the Nightmare of Caiatl.</p>
              <p><strong>Strategy:</strong> Collect and deposit bellkeepers to enable damage phases. Manage realm swaps carefully.</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">🎁 Loot & Rewards</h2>
          <div className="loot-table">
            <div className="loot-item">
              <h4>Heartshadow (Exotic)</h4>
              <p><strong>Type:</strong> Exotic Void Sword</p>
              <p><strong>How to Obtain:</strong> Random drop from final encounter</p>
              <p><strong>Perk:</strong> Go invisible after landing heavy attacks</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">💡 Pro Tips</h2>
          <ul className="tips-list">
            <li><strong>Bell Timing:</strong> Don't ring bells too early or late.</li>
            <li><strong>Standard Carriers:</strong> Designate who carries standards before the encounter.</li>
            <li><strong>Colossus Priority:</strong> Always kill bellkeeper Colossi quickly.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
