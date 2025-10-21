import React from "react";
import PlayerStats from "../../components/PlayerStats";
import '../../components/GuideStyles.css';

export default function DesertPerpetual(Epic) {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/desertperp.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">Desert Perpetual</h1>
          <p className="guide-subtitle">Fate's Beginning</p>
        </div>
      </div>
      
      <div className="guide-container">
        {/* Player Stats Section */}
        <PlayerStats 
          activityType="raid"
          activityName="Desert Perpetual"
          activitySlug="desert-perpetual-(epic)"
        />

        {/* Lore Section */}
        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              Deep within the ancient ruins of Mars lies the Desert Perpetual, a mysterious construct that exists between time and space. 
              This raid challenges fireteams to unravel the secrets of the Cabal Empire's most guarded stronghold.
            </p>
            <p>
              The Desert Perpetual was built as a monument to Cabal military might, housing ancient technology and weapons that could 
              reshape the fate of the solar system. Guardians must venture deep into its halls to prevent the Cabal from unleashing 
              this devastating power.
            </p>
          </div>
        </section>

        {/* Encounters Section */}
        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">Entrance: The Breach</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Break through the Cabal fortifications and establish a foothold in the Desert Perpetual.</p>
              <p><strong>Strategy:</strong> Split into two teams of three. Each team must breach the left and right gates by defeating gatekeepers and dunking energy cores.</p>
              <p><strong>Key Mechanics:</strong> Energy cores spawn after defeating elite Cabal. Carry them to the corresponding gate receptacles.</p>
              <p><strong>Tips:</strong> Coordinate with your team before dunking cores to ensure both sides are ready.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">First Encounter: Shifting Sands</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Navigate the temporal maze while managing debuffs and maintaining arena stability.</p>
              <p><strong>Roles:</strong> 2 Runners, 2 Add Clear, 2 Plate Holders</p>
              <p><strong>Strategy:</strong> Runners retrieve time crystals and deliver them to plates. Plate holders stand on pressure plates to stabilize the arena.</p>
              <p><strong>Key Mechanic:</strong> The arena shifts between timelines periodically. Adapt your positioning accordingly.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Second Encounter: The War Council</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat two Cabal commanders while managing their unique mechanics.</p>
              <p><strong>Strategy:</strong> Split into two teams of three. Each team handles one commander. Both commanders must be defeated within a reasonable time window.</p>
              <p><strong>Commander Mechanics:</strong></p>
              <ul className="tips-list">
                <li><strong>Left - Val'kuul:</strong> Creates fire hazards. Stay mobile and avoid burn zones.</li>
                <li><strong>Right - Bracus Thar'ok:</strong> Summons protective barriers. Use special charges to break them.</li>
              </ul>
              <p><strong>Coordination:</strong> Communicate health percentages and coordinate final damage.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Final Boss: Dominus Khazul</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat Dominus Khazul and prevent the Desert Perpetual's power from being unleashed.</p>
              
              <p><strong>Phase 1 - Shield Phase:</strong></p>
              <p>Khazul is protected by two elemental shields (Solar and Arc). Destroy energy pylons to remove shield layers. Assign three players per element.</p>
              
              <p><strong>Phase 2 - DPS Phase:</strong></p>
              <p>Once shields are down, damage phase begins. Stand in the "Temporal Well" for a damage buff. Avoid fire waves by jumping over them.</p>
              <p><strong>Recommended DPS:</strong> Linear Fusion Rifles, Rocket Launchers, or high-damage Supers.</p>
              
              <p><strong>Phase 3 - Final Stand:</strong></p>
              <p>At 30% health, Khazul becomes enraged. Focus all damage on the boss while managing periodic add spawns.</p>
              <p><strong>Add Management:</strong> Assign one player to handle adds while others focus on boss damage.</p>
            </div>
          </div>
        </section>

        {/* Loot Table */}
        <section className="guide-section">
          <h2 className="section-title">🎁 Loot & Rewards</h2>
          <div className="loot-table">
            <div className="loot-item">
              <h4>Scorching Verdict</h4>
              <p><strong>Type:</strong> Solar Hand Cannon (140 RPM)</p>
              <p><strong>Drops From:</strong> The Breach & War Council</p>
              <p><strong>God Roll:</strong> Outlaw + Rampage or Rapid Hit + Explosive Payload</p>
            </div>
            
            <div className="loot-item">
              <h4>Eternal Horizon</h4>
              <p><strong>Type:</strong> Kinetic Scout Rifle (200 RPM)</p>
              <p><strong>Drops From:</strong> Shifting Sands</p>
              <p><strong>God Roll:</strong> Triple Tap + Focused Fury</p>
            </div>

            <div className="loot-item">
              <h4>Perpetual Reign</h4>
              <p><strong>Type:</strong> Void Linear Fusion Rifle</p>
              <p><strong>Drops From:</strong> Dominus Khazul (Final Boss)</p>
              <p><strong>God Roll:</strong> Clown Cartridge + Firing Line</p>
            </div>

            <div className="loot-item">
              <h4>Mantle of the Desert</h4>
              <p><strong>Type:</strong> Legendary Armor Set</p>
              <p><strong>Drops From:</strong> All encounters</p>
              <p><strong>Special Notes:</strong> High-stat armor with Desert Perpetual aesthetic</p>
            </div>
          </div>
        </section>

        {/* Recommended Loadouts */}
        <section className="guide-section">
          <h2 className="section-title">🛡️ Recommended Loadouts</h2>
          
          <div className="loadout-card">
            <h3>Warlock</h3>
            <p><strong>Subclass:</strong> Well of Radiance (Solar) for team support and boss DPS</p>
            <p><strong>Exotic Armor:</strong> Phoenix Protocol or Lunafaction Boots</p>
            <p><strong>Weapons:</strong></p>
            <ul className="tips-list">
              <li>Kinetic: Witherhoard or Scout Rifle</li>
              <li>Energy: Solar/Arc weapons for shields</li>
              <li>Heavy: Linear Fusion Rifle or Rocket Launcher</li>
            </ul>
          </div>

          <div className="loadout-card">
            <h3>Hunter</h3>
            <p><strong>Subclass:</strong> Nightstalker (Void) with Mobius Quiver or Gunslinger</p>
            <p><strong>Exotic Armor:</strong> Orpheus Rig or Celestial Nighthawk</p>
            <p><strong>Weapons:</strong></p>
            <ul className="tips-list">
              <li>Kinetic: Sniper Rifle or Hand Cannon</li>
              <li>Energy: Fusion Rifle or Trace Rifle</li>
              <li>Heavy: Linear Fusion or Rocket Launcher</li>
            </ul>
          </div>

          <div className="loadout-card">
            <h3>Titan</h3>
            <p><strong>Subclass:</strong> Sentinel (Void) with Ward of Dawn for team buff</p>
            <p><strong>Exotic Armor:</strong> Heart of Inmost Light or Helm of Saint-14</p>
            <p><strong>Weapons:</strong></p>
            <ul className="tips-list">
              <li>Kinetic: Auto Rifle or Pulse Rifle</li>
              <li>Energy: Shotgun for close-range adds</li>
              <li>Heavy: Machine Gun or Linear Fusion</li>
            </ul>
          </div>
        </section>

        {/* Tips & Tricks */}
        <section className="guide-section">
          <h2 className="section-title">💡 Pro Tips</h2>
          <ul className="tips-list">
            <li><strong>Communication:</strong> Clear callouts are essential, especially during War Council.</li>
            <li><strong>Element Coverage:</strong> Ensure your fireteam has Solar and Arc weapons for shields.</li>
            <li><strong>Jump Timing:</strong> Practice jumping over fire waves during boss DPS.</li>
            <li><strong>Stay Together:</strong> Group up in the Temporal Well for damage buffs during boss phase.</li>
            <li><strong>Add Management:</strong> Don't ignore adds during boss fight - they can overwhelm you quickly.</li>
            <li><strong>Use Rally Banners:</strong> Always rally before each encounter to have full ammo and super.</li>
            <li><strong>Learn Patterns:</strong> Boss mechanics follow patterns - learn them to improve consistency.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
