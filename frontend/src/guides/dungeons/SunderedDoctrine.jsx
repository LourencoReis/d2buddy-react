import React from "react";
import PlayerStats from "../../components/PlayerStats";
import '../../components/GuideStyles.css';

export default function SunderedDoctrine() {
  return (
    <main className="page-layout">
      {/* Hero Section */}
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/sundered-doctrine.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">The Sundered Doctrine</h1>
          <p className="guide-subtitle">Echoes of Collapse</p>
        </div>
      </div>
      
      <div className="guide-container">
        {/* Player Stats Section */}
        <PlayerStats 
          activityType="dungeon"
          activityName="The Sundered Doctrine"
          activitySlug="the-sundered-doctrine"
        />

        {/* Lore Section */}
        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              Hidden deep within the ruins of the Old Tower lies the Sundered Doctrine, a forgotten vault where the Consensus 
              once stored their most dangerous secrets. After the Red War, this facility was abandoned and left to decay. 
              Now, a rogue faction of Fallen led by Kridis, the Shattered has breached its defenses, seeking the forbidden 
              technology sealed within. The Vanguard tasks you with stopping them before they unleash something catastrophic.
            </p>
          </div>
        </section>

        {/* Encounters Section */}
        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          {/* Encounter 1 */}
          <div className="encounter-card">
            <h3 className="encounter-title">Encounter 1: The Breach</h3>
            <div className="encounter-content">
              <p>
                Navigate through the collapsed corridors of the Old Tower while fending off waves of Fallen forces. 
                Your objective is to activate three terminals to unlock the main vault door.
              </p>
              <p><strong>Mechanics:</strong></p>
              <ul>
                <li><strong>Arc Charges:</strong> Defeat Servitors to obtain Arc Charges and deposit them at terminals</li>
                <li><strong>Overload Champions:</strong> Two Overload Captains will spawn - coordinate stuns with your team</li>
                <li><strong>Timer:</strong> You have 5 minutes to activate all three terminals before the area locks down</li>
              </ul>
              <p><strong>Pro Tip:</strong> Assign each player to a specific terminal to maximize efficiency. Keep one player mobile to help with Champions.</p>
            </div>
          </div>

          {/* Encounter 2 */}
          <div className="encounter-card">
            <h3 className="encounter-title">Encounter 2: The Gauntlet</h3>
            <div className="encounter-content">
              <p>
                A timed platforming section filled with laser grids, rotating walls, and environmental hazards. Work together 
                to progress through multiple checkpoint zones before the facility's defense systems activate.
              </p>
              <p><strong>Mechanics:</strong></p>
              <ul>
                <li><strong>Sequence Plates:</strong> Stand on glowing plates in the correct order to disable laser grids</li>
                <li><strong>Rotating Barriers:</strong> Time your movements through spinning wall segments</li>
                <li><strong>Sniper Vandals:</strong> Take out long-range threats positioned on catwalks above</li>
              </ul>
              <p><strong>Common Mistakes:</strong> Rushing ahead without coordinating plate sequences. Take it slow and communicate!</p>
            </div>
          </div>

          {/* Boss Encounter */}
          <div className="encounter-card">
            <h3 className="encounter-title">Final Boss: Kridis, the Shattered</h3>
            <div className="encounter-content">
              <p>
                Kridis has merged with experimental Vanguard technology, gaining devastating Void abilities. This three-phase 
                encounter requires precise coordination and awareness of environmental hazards.
              </p>
              
              <p><strong>Phase 1: Void Surge (100-66% Health)</strong></p>
              <ul>
                <li><strong>Void Orbs:</strong> Kridis spawns tracking Void orbs - shoot them before they reach you</li>
                <li><strong>Add Waves:</strong> Clear Shanks and Dregs quickly to avoid being overwhelmed</li>
                <li><strong>Barrier Champion:</strong> A Barrier Servitor will spawn at 80% - prioritize breaking the barrier</li>
              </ul>

              <p><strong>Phase 2: Fragmentation (66-33% Health)</strong></p>
              <ul>
                <li><strong>Split Mechanics:</strong> Kridis splits into three holograms - only one takes damage (glows brighter)</li>
                <li><strong>Floor Hazards:</strong> Void pools appear on the ground dealing heavy damage over time</li>
                <li><strong>Overload Captain:</strong> Spawns at 50% health - stun and eliminate quickly</li>
              </ul>

              <p><strong>Phase 3: Final Stand (33-0% Health)</strong></p>
              <ul>
                <li><strong>Immunity Shield:</strong> Kridis gains immunity - destroy four Power Cores around the arena to break it</li>
                <li><strong>Wipe Mechanic:</strong> After 60 seconds in this phase, Kridis activates "Doctrine's End" causing a team wipe</li>
                <li><strong>All Champions:</strong> Barrier and Overload enemies spawn simultaneously</li>
              </ul>

              <p><strong>DPS Strategy:</strong> Linear Fusion Rifles and Rocket Launchers work exceptionally well. Save your Super for the final phase when DPS time is limited.</p>
            </div>
          </div>
        </section>

        {/* Loot Section */}
        <section className="guide-section">
          <h2 className="section-title">🎁 Loot & Rewards</h2>
          <div className="loot-table">
            <div className="loot-encounter">
              <h4>The Breach</h4>
              <p>Sundered Helm (Helmet), Fragment of Unity (Auto Rifle)</p>
            </div>
            <div className="loot-encounter">
              <h4>The Gauntlet</h4>
              <p>Doctrine's Grasp (Glaive), Collapsed Truth (Chest Armor)</p>
            </div>
            <div className="loot-encounter">
              <h4>Final Boss</h4>
              <p>
                Kridis's Wrath (Rocket Launcher), Echo of the Fallen (Leg Armor), 
                Shattered Crown (Class Item)
              </p>
            </div>
            <div className="loot-encounter">
              <h4>Exotic Drop</h4>
              <p className="exotic-text">
                Doctrine's End (Exotic Linear Fusion Rifle) - Precision hits create seeking Void projectiles
              </p>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h3>God Roll Recommendations</h3>
            <div className="loot-encounter">
              <h4>Fragment of Unity (Auto Rifle)</h4>
              <p><strong>PvE:</strong> Subsistence + Rampage or Frenzy</p>
              <p><strong>PvP:</strong> Dynamic Sway Reduction + Kill Clip</p>
            </div>
            <div className="loot-encounter">
              <h4>Kridis's Wrath (Rocket Launcher)</h4>
              <p><strong>PvE:</strong> Auto-Loading Holster + Explosive Light or Vorpal Weapon</p>
              <p><strong>PvP:</strong> Tracking Module + Cluster Bomb</p>
            </div>
          </div>
        </section>

        {/* Recommended Loadouts */}
        <section className="guide-section">
          <h2 className="section-title">🛡️ Recommended Loadouts</h2>
          
          <div className="encounter-card">
            <h3 className="encounter-title">Hunter (Void)</h3>
            <div className="encounter-content">
              <p><strong>Subclass:</strong> Nightstalker with Orpheus Rig</p>
              <p><strong>Weapons:</strong></p>
              <ul>
                <li>Kinetic: Arbalest (Anti-Barrier) or Austringer (Hand Cannon)</li>
                <li>Energy: Calus Mini-Tool (SMG, Solar) with Incandescent</li>
                <li>Heavy: Retrofit Escapade (Linear Fusion, Void) or Apex Predator (Rocket)</li>
              </ul>
              <p><strong>Mods:</strong> Protective Light, Charge Harvester, Reactive Pulse</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Titan (Solar)</h3>
            <div className="encounter-content">
              <p><strong>Subclass:</strong> Sunbreaker with Loreley Splendor Helm</p>
              <p><strong>Weapons:</strong></p>
              <ul>
                <li>Kinetic: Witherhoard (Grenade Launcher)</li>
                <li>Energy: Divinity (Trace Rifle, Arc) for team support</li>
                <li>Heavy: Hothead (Rocket Launcher, Solar) with Explosive Light</li>
              </ul>
              <p><strong>Mods:</strong> Well of Life, Elemental Charge, Font of Might</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Warlock (Void)</h3>
            <div className="encounter-content">
              <p><strong>Subclass:</strong> Voidwalker with Contraverse Hold</p>
              <p><strong>Weapons:</strong></p>
              <ul>
                <li>Kinetic: The Mountaintop (Grenade Launcher, Kinetic)</li>
                <li>Energy: Ikelos SMG (Submachine Gun, Solar) with Voltshot</li>
                <li>Heavy: The Lament (Sword, Arc) for close-range Champions</li>
              </ul>
              <p><strong>Mods:</strong> Volatile Flow, Elemental Armaments, Charged Up</p>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="guide-section">
          <h2 className="section-title">💡 Pro Tips & Tricks</h2>
          <div className="encounter-content">
            <ul>
              <li><strong>Breach Efficiency:</strong> Assign roles before starting - one player per terminal plus a floater for Champions</li>
              <li><strong>Gauntlet Timing:</strong> Use your radar to anticipate enemy spawns on catwalks above</li>
              <li><strong>Boss Phase 2:</strong> The real Kridis always glows slightly brighter than the holograms</li>
              <li><strong>Power Core Locations:</strong> Two cores are on ground level, two are on elevated platforms - split up to destroy them quickly</li>
              <li><strong>Survivability:</strong> Void resist mods are essential for the boss fight - Kridis deals primarily Void damage</li>
              <li><strong>Champion Mods:</strong> Bring both Anti-Barrier and Overload - you'll need them throughout</li>
              <li><strong>Solo Flawless Tip:</strong> Invis Hunters with Omnioculus have the easiest time due to constant survivability</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
