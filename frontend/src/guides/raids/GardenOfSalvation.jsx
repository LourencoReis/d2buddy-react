import React from "react";
import PlayerStats from "../../components/PlayerStats";
import '../../components/GuideStyles.css';

export default function GardenOfSalvation() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/gardenofsalvation.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">Garden of Salvation</h1>
          <p className="guide-subtitle">The Black Garden</p>
        </div>
      </div>
      
      <div className="guide-container">
        <PlayerStats 
          activityType="raid"
          activityName="Garden of Salvation"
          activitySlug="garden-of-salvation"
        />

        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              The Black Garden holds a dark secret - the origin point of the Vex. After the Pyramid's arrival on the Moon, 
              a signal has emanated from deep within the Garden. Guardians must uncover the truth and face the Sanctified Mind, 
              a Vex construct attempting to establish a connection to the Pyramid.
            </p>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">Evade the Consecrated Mind</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Build a path forward by tethering to Vex cubes while being chased.</p>
              <p><strong>Strategy:</strong> Two players collect the Voltaic Overflow buff and tether to white cubes to build platforms.</p>
              <p><strong>Key Mechanic:</strong> If you hold the buff too long, you'll die. Pass it by shooting teammates.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Summon the Consecrated Mind</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Activate Vex plates while managing tether mechanics.</p>
              <p><strong>Strategy:</strong> Split into two teams (left and right). Collect buffs and tether to activate plates.</p>
              <p><strong>Tip:</strong> Communication is key - call out when you need the buff passed.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Defeat the Consecrated Mind</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Chase and damage the Consecrated Mind while tethering.</p>
              <p><strong>Strategy:</strong> Follow the Mind through the arena. Use tethers to break its shield, then damage the glowing eye.</p>
              <p><strong>Roles:</strong> Two tether players, four DPS players.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Sanctified Mind, Sol Inherent</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat the Sanctified Mind using tether and mote mechanics.</p>
              
              <p><strong>Phase 1 - Mote Collection:</strong></p>
              <p>Kill Angelic enemies to collect motes. Bank 30 motes on your side (left or right) to start rebuild.</p>
              
              <p><strong>Phase 2 - Rebuild:</strong></p>
              <p>Tether players connect from platforms to the boss. This removes the boss's shield.</p>
              
              <p><strong>Phase 3 - DPS:</strong></p>
              <p>Once shields are down, damage the boss. Stand on platforms for damage buff.</p>
              <p><strong>Recommended DPS:</strong> Izanagi's Burden, Whisper of the Worm, or Linear Fusions.</p>
              
              <p><strong>Cross Counter:</strong></p>
              <p>Teams must swap sides periodically to avoid being overwhelmed by enemies.</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">🎁 Loot & Rewards</h2>
          <div className="loot-table">
            <div className="loot-item">
              <h4>Sacred Provenance</h4>
              <p><strong>Type:</strong> Kinetic Pulse Rifle</p>
              <p><strong>God Roll:</strong> Rapid Hit + Kill Clip</p>
            </div>
            
            <div className="loot-item">
              <h4>Zealot's Reward</h4>
              <p><strong>Type:</strong> Void Fusion Rifle</p>
              <p><strong>God Roll:</strong> Demolitionist + Rampage</p>
            </div>

            <div className="loot-item">
              <h4>Divinity (Exotic)</h4>
              <p><strong>Type:</strong> Exotic Arc Trace Rifle</p>
              <p><strong>How to Obtain:</strong> Complete the Divine Fragmentation quest</p>
              <p><strong>Note:</strong> Requires solving puzzles throughout the raid</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">💡 Pro Tips</h2>
          <ul className="tips-list">
            <li><strong>Tether Practice:</strong> Learn to tether quickly and efficiently.</li>
            <li><strong>Mote Priority:</strong> Banking 30 motes is more important than add clear.</li>
            <li><strong>Cross Counter:</strong> Have a plan for when and how teams swap sides.</li>
            <li><strong>Platform DPS:</strong> Always stand on the activated platforms for the damage buff.</li>
            <li><strong>Divinity Run:</strong> If doing the Divinity quest, coordinate puzzle solutions beforehand.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
