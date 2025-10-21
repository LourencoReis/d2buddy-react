import React from "react";
import PlayerStats from "../../components/PlayerStats";
import '../../components/GuideStyles.css';

export default function DesertPerpetual() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/desertperp.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">Desert Perpetual (Epic)</h1>
          <p className="guide-subtitle">Fate's End</p>
        </div>
      </div>
      
      <div className="guide-container">
        {/* Player Stats Section */}
        <PlayerStats 
          activityType="raid"
          activityName="Desert Perpetual"
          activitySlug="desert-perpetual"
        />

        {/* Lore Section */}
        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              Deep within the ancient ruins of Mars lies the Desert Perpetual, a mysterious construct that exists between time and space. 
              This epic-difficulty raid challenges fireteams to unravel the secrets of the Cabal Empire's most guarded stronghold.
            </p>
            <p>
              The Desert Perpetual was built as a monument to Cabal military might, but something far more sinister lurks within its walls. 
              Reality itself bends and fractures here, as the Cabal have weaponized paracausal forces they barely understand.
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
              <p><strong>Strategy:</strong> Split into two teams of three. Each team must simultaneously breach the left and right gates by defeating gatekeepers and dunking energy cores.</p>
              <p><strong>Key Mechanics:</strong> Energy cores spawn after defeating elite Cabal. Carry them to the corresponding gate receptacles. Both gates must be opened within 30 seconds of each other.</p>
              <p><strong>Common Mistakes:</strong> Don't advance too quickly - ensure both teams are ready before dunking cores.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">First Encounter: Shifting Sands</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Navigate the temporal maze while managing debuffs and preventing the arena from collapsing.</p>
              <p><strong>Roles:</strong> 2 Runners, 2 Add Clear, 2 Plate Holders</p>
              <p><strong>Strategy:</strong> Runners must retrieve time crystals from alternate timelines and deliver them to plates. Plate holders must stand on pressure plates to stabilize the arena. Add clear focuses on preventing team wipes from overwhelming enemies.</p>
              <p><strong>Time Shift Mechanic:</strong> Every 60 seconds, the arena shifts between past and future. Pay attention to callouts and adjust positioning.</p>
              <p><strong>Critical:</strong> If a runner dies with a crystal, it must be picked up immediately or the encounter resets.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Second Encounter: The War Council</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat three Cabal commanders simultaneously while managing their unique mechanics.</p>
              <p><strong>Strategy:</strong> Split into three pairs, each assigned to a specific commander (left, middle, right). All commanders must die within 15 seconds of each other or they will resurrect.</p>
              <p><strong>Commander Mechanics:</strong></p>
              <ul className="tips-list">
                <li><strong>Left - Val'kuul:</strong> Creates fire tornadoes that track players. Bait them away from your team.</li>
                <li><strong>Middle - Bracus Thar'ok:</strong> Summons protective shields. Use the Arc charges to break them.</li>
                <li><strong>Right - Thumos the Eternal:</strong> Teleports and summons reinforcements. Focus fire when vulnerable.</li>
              </ul>
              <p><strong>Coordination:</strong> Call out commander health percentages. Final DPS should be coordinated: "3, 2, 1, fire!"</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Third Encounter: The Colosseum</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Survive waves of enemies while collecting and banking resonance charges.</p>
              <p><strong>Strategy:</strong> This is a survival encounter with three phases. Each phase increases in difficulty and introduces new enemy types.</p>
              <p><strong>Resonance Mechanic:</strong> Elite enemies drop resonance charges. Bank 10 charges per phase to progress. Charges disappear after 20 seconds if not picked up.</p>
              <p><strong>Phase 1:</strong> Standard Cabal units. Focus on charge collection.</p>
              <p><strong>Phase 2:</strong> Gladiators enter the arena. Stay mobile and use cover.</p>
              <p><strong>Phase 3:</strong> A Champion appears. Stun it and focus fire while continuing to bank charges.</p>
              <p><strong>Pro Tip:</strong> Designate one player as "banker" who focuses solely on picking up and banking charges.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Final Boss: Dominus Khazul, The Eternal Flame</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat Dominus Khazul and prevent the Desert Perpetual from collapsing reality.</p>
              
              <p><strong>Phase 1 - Shield Phase:</strong></p>
              <p>Khazul is protected by three elemental shields (Solar, Arc, Void). Teams must destroy energy pylons to remove each shield layer. Assign two players per element.</p>
              
              <p><strong>Phase 2 - DPS Phase:</strong></p>
              <p>Once all shields are down, damage phase begins. Stand in the "Temporal Well" (glowing circle in the center) for a damage buff. Khazul summons fire waves - jump over them to avoid wipe.</p>
              <p><strong>DPS Strategy:</strong> Linear Fusion Rifles, Rocket Launchers, or Swords are recommended. Wells and Bubbles help survivability.</p>
              
              <p><strong>Phase 3 - Final Stand:</strong></p>
              <p>At 30% health, Khazul becomes enraged. The arena starts collapsing. You have 90 seconds to finish him or wipe.</p>
              <p><strong>Adds:</strong> Elite Centurions spawn continuously. Assign one player to add clear duty.</p>
              <p><strong>Detainment:</strong> Random players get detained in bubbles. Teammates must shoot the bubble to free them quickly.</p>
              
              <p><strong>Wipe Mechanics:</strong></p>
              <ul className="tips-list">
                <li>Failing to destroy pylons within the timer</li>
                <li>Too many players dying in Temporal Well</li>
                <li>Not finishing boss before enrage timer in final stand</li>
                <li>Getting hit by fire waves during DPS</li>
              </ul>
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
              <p><strong>God Roll:</strong> Outlaw + Explosive Payload or Rapid Hit + Kill Clip</p>
            </div>
            
            <div className="loot-item">
              <h4>Eternal Horizon</h4>
              <p><strong>Type:</strong> Kinetic Scout Rifle (200 RPM)</p>
              <p><strong>Drops From:</strong> Shifting Sands & The Colosseum</p>
              <p><strong>God Roll:</strong> Triple Tap + Focused Fury</p>
            </div>

            <div className="loot-item">
              <h4>Perpetual Reign</h4>
              <p><strong>Type:</strong> Void Linear Fusion Rifle</p>
              <p><strong>Drops From:</strong> Dominus Khazul (Final Boss)</p>
              <p><strong>God Roll:</strong> Clown Cartridge + Firing Line (top DPS option)</p>
            </div>

            <div className="loot-item">
              <h4>Mantle of the Desert</h4>
              <p><strong>Type:</strong> Legendary Armor Set</p>
              <p><strong>Drops From:</strong> All encounters</p>
              <p><strong>Special Notes:</strong> High-stat armor with unique Desert Perpetual aesthetic</p>
            </div>

            <div className="loot-item">
              <h4>Khazul's Wrath (Exotic)</h4>
              <p><strong>Type:</strong> Exotic Solar Rocket Launcher</p>
              <p><strong>How to Obtain:</strong> Complete the Desert Perpetual quest after defeating Khazul 5 times</p>
              <p><strong>Exotic Perk:</strong> "Eternal Flame" - Precision hits with other weapons load a rocket automatically. Rockets create a burning AoE.</p>
            </div>
          </div>
        </section>

        {/* Recommended Loadouts */}
        <section className="guide-section">
          <h2 className="section-title">🛡️ Recommended Loadouts</h2>
          
          <div className="loadout-card">
            <h3>Warlock</h3>
            <p><strong>Subclass:</strong> Well of Radiance (Dawnblade Solar) - Essential for boss DPS</p>
            <p><strong>Exotic Armor:</strong> Phoenix Protocol or Starfire Protocol</p>
            <p><strong>Weapons:</strong></p>
            <ul className="tips-list">
              <li>Kinetic: Witherhoard or Arbalest</li>
              <li>Energy: Solar/Arc/Void weapons for shield breaking</li>
              <li>Heavy: Linear Fusion Rifle (Reed's Regret, Taipan-4fr)</li>
            </ul>
            <p><strong>Mods:</strong> Font of Might, Elemental Time Dilation, Well of Life</p>
          </div>

          <div className="loadout-card">
            <h3>Hunter</h3>
            <p><strong>Subclass:</strong> Nightstalker (Void) with Mobius Quiver or Gunslinger with Celestial Nighthawk</p>
            <p><strong>Exotic Armor:</strong> Orpheus Rig (Void) / Star-Eater Scales (Solar)</p>
            <p><strong>Weapons:</strong></p>
            <ul className="tips-list">
              <li>Kinetic: Izanagi's Burden or Scout Rifle</li>
              <li>Energy: Divinity (if support role) or Fusion Rifle</li>
              <li>Heavy: Rocket Launcher with Auto-Loading Holster</li>
            </ul>
            <p><strong>Mods:</strong> Focusing Strike, Utility Kickstart, Reaper mods for add clear</p>
          </div>

          <div className="loadout-card">
            <h3>Titan</h3>
            <p><strong>Subclass:</strong> Sentinel (Void) with Ward of Dawn or Sunbreaker (Solar)</p>
            <p><strong>Exotic Armor:</strong> Heart of Inmost Light or Ursa Furiosa</p>
            <p><strong>Weapons:</strong></p>
            <ul className="tips-list">
              <li>Kinetic: Lament (Exotic Sword) for add clear</li>
              <li>Energy: Shotgun or Sniper for Champions</li>
              <li>Heavy: Linear Fusion or Machine Gun</li>
            </ul>
            <p><strong>Mods:</strong> Elemental Charge, Protective Light, Champion mods</p>
          </div>
        </section>

        {/* Tips & Tricks */}
        <section className="guide-section">
          <h2 className="section-title">💡 Pro Tips</h2>
          <ul className="tips-list">
            <li><strong>Communication:</strong> Use clear callouts for phases, especially during War Council when coordinating kills.</li>
            <li><strong>Loadout Diversity:</strong> Make sure your team has all three elements covered for shield breaking.</li>
            <li><strong>Learn the Patterns:</strong> Khazul's fire waves follow predictable patterns. Jump timing is crucial.</li>
            <li><strong>Don't Greed:</strong> Play safe during final stand. A slow, steady approach is better than wiping.</li>
            <li><strong>Practice Roles:</strong> Know your assigned role before starting. Confusion leads to wipes.</li>
            <li><strong>Rally Banners:</strong> Stock up on raid banners. You'll need them for every encounter.</li>
            <li><strong>Checkpoint Farming:</strong> Focus on farming specific encounters for the weapons you want.</li>
            <li><strong>Master Mode:</strong> Epic difficulty is challenging but fair. Master mode adds Champions and reduces revives.</li>
          </ul>
        </section>

        {/* Challenge Mode */}
        <section className="guide-section">
          <h2 className="section-title">🏆 Challenge Mode</h2>
          <div className="lore-content">
            <p><strong>Weekly Rotating Challenge:</strong> Each week features a specific challenge that modifies encounter mechanics.</p>
            
            <p><strong>Breach Challenge - "Swift Strike":</strong> Both gates must be opened within 10 seconds of each other (instead of 30).</p>
            
            <p><strong>Shifting Sands Challenge - "Timeless":</strong> Complete the encounter without anyone dying to the time shift debuff.</p>
            
            <p><strong>War Council Challenge - "Perfect Synchrony":</strong> All three commanders must die within 3 seconds of each other.</p>
            
            <p><strong>Colosseum Challenge - "Flawless Banking":</strong> Bank all charges without letting any expire.</p>
            
            <p><strong>Khazul Challenge - "One Phase":</strong> Defeat Khazul in a single DPS phase (requires high coordination and optimal DPS).</p>
            
            <p><strong>Rewards:</strong> Completing challenges grants additional loot drops and progress toward the raid exotic quest.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
