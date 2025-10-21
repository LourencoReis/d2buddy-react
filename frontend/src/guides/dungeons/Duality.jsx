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
          <h2 className="section-title"> Dungeon Start puzzle</h2>
          <div className="overview-content">
            <p>
              In the start of the dungeon the player will fall from a great height into what looks like a dead end.
              However at the very end of the room that the user can see the through the bars you can see a bell. 
              <img src="./images/bell.jpg" alt="Bell" />
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
