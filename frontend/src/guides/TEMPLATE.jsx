import React from "react";
import PlayerStats from "../components/PlayerStats";
import '../components/GuideStyles.css';

/**
 * RAID/DUNGEON GUIDE TEMPLATE
 * 
 * HOW TO USE:
 * 1. Copy this file to either /guides/raids/ or /guides/dungeons/
 * 2. Rename it to match your raid/dungeon name (e.g., DeepStoneCrypt.jsx)
 * 3. Replace all placeholder text with your actual content
 * 4. Update the image path to match your raid/dungeon image
 * 5. Add the guide to /guides/index.js in either raidGuides or dungeonGuides
 * 6. Add a card to either Raids.jsx or Dungeons.jsx
 */

export default function YourRaidDungeonName() {
  return (
    <main className="page-layout">
      {/* Hero Section with Background Image */}
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/your-image.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">Your Raid/Dungeon Name</h1>
          <p className="guide-subtitle">Your Subtitle or Location</p>
        </div>
      </div>
      
      <div className="guide-container">
        {/* Player Stats Section - Shows your personal stats for this activity */}
        <PlayerStats 
          activityType="raid" // or "dungeon"
          activityName="Your Raid/Dungeon Name"
          activitySlug="your-raid-dungeon-slug" // URL-friendly version
        />

        {/* Lore Section */}
        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              Add your lore content here. Describe the story, setting, and context
              of this raid or dungeon. What makes it significant in the Destiny universe?
            </p>
            <p>
              You can add multiple paragraphs to flesh out the narrative.
            </p>
          </div>
        </section>

        {/* Encounters Section */}
        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          {/* Encounter 1 */}
          <div className="encounter-card">
            <h3 className="encounter-title">Encounter 1 Name</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> What players need to accomplish in this encounter.</p>
              <p><strong>Strategy:</strong> Detailed explanation of how to complete this encounter.</p>
              <p><strong>Roles:</strong> If applicable, describe specific player roles (runner, add clear, etc.)</p>
              <p><strong>Key Points:</strong> Important mechanics or tips to remember.</p>
              <p><strong>Common Mistakes:</strong> Things to avoid or watch out for.</p>
            </div>
          </div>

          {/* Encounter 2 */}
          <div className="encounter-card">
            <h3 className="encounter-title">Encounter 2 Name</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Description here.</p>
              <p><strong>Strategy:</strong> Strategy here.</p>
              <p><strong>Key Mechanics:</strong> List important mechanics.</p>
            </div>
          </div>

          {/* Add more encounters as needed */}
          {/* Boss Encounter */}
          <div className="encounter-card">
            <h3 className="encounter-title">Final Boss Name</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat the final boss.</p>
              <p><strong>Phase 1:</strong> Description of first phase mechanics.</p>
              <p><strong>Phase 2:</strong> Description of second phase mechanics.</p>
              <p><strong>DPS Strategy:</strong> Recommended weapons and strategies for damage.</p>
              <p><strong>Wipe Mechanics:</strong> What causes a team wipe and how to avoid it.</p>
            </div>
          </div>
        </section>

        {/* Loot Table */}
        <section className="guide-section">
          <h2 className="section-title">🎁 Loot & Rewards</h2>
          <div className="loot-table">
            <div className="loot-item">
              <h4>Weapon Name</h4>
              <p><strong>Type:</strong> Hand Cannon / Scout Rifle / etc.</p>
              <p><strong>Drops From:</strong> Which encounter</p>
              <p><strong>God Roll:</strong> Recommended perks (e.g., Outlaw + Rampage)</p>
            </div>
            
            <div className="loot-item">
              <h4>Another Weapon</h4>
              <p><strong>Type:</strong> Weapon type</p>
              <p><strong>Drops From:</strong> Encounter name</p>
              <p><strong>God Roll:</strong> Perk recommendations</p>
            </div>

            <div className="loot-item">
              <h4>Exotic Weapon/Armor (if applicable)</h4>
              <p><strong>Type:</strong> Exotic weapon/armor name</p>
              <p><strong>How to Obtain:</strong> Quest steps or requirements</p>
              <p><strong>Special Notes:</strong> Why this exotic is worth getting</p>
            </div>
          </div>
        </section>

        {/* Recommended Loadouts */}
        <section className="guide-section">
          <h2 className="section-title">🛡️ Recommended Loadouts</h2>
          
          <div className="loadout-card">
            <h3>Warlock</h3>
            <p><strong>Subclass:</strong> Well of Radiance / Shadebinder / etc.</p>
            <p><strong>Exotic Armor:</strong> Phoenix Protocol / Starfire Protocol</p>
            <p><strong>Weapons:</strong> Kinetic, Energy, and Heavy recommendations</p>
            <p><strong>Mods:</strong> Important armor mods to use</p>
          </div>

          <div className="loadout-card">
            <h3>Hunter</h3>
            <p><strong>Subclass:</strong> Nightstalker / Gunslinger / etc.</p>
            <p><strong>Exotic Armor:</strong> Orpheus Rig / Celestial Nighthawk</p>
            <p><strong>Weapons:</strong> Weapon recommendations</p>
            <p><strong>Mods:</strong> Mod suggestions</p>
          </div>

          <div className="loadout-card">
            <h3>Titan</h3>
            <p><strong>Subclass:</strong> Sunbreaker / Sentinel / etc.</p>
            <p><strong>Exotic Armor:</strong> Heart of Inmost Light / Ursa Furiosa</p>
            <p><strong>Weapons:</strong> Weapon recommendations</p>
            <p><strong>Mods:</strong> Mod suggestions</p>
          </div>
        </section>

        {/* Tips & Tricks */}
        <section className="guide-section">
          <h2 className="section-title">💡 Pro Tips</h2>
          <ul className="tips-list">
            <li>Tip 1: Specific advice for success</li>
            <li>Tip 2: Another helpful suggestion</li>
            <li>Tip 3: Communication is key - use clear callouts</li>
            <li>Tip 4: Practice makes perfect - don't give up!</li>
            <li>Tip 5: Watch a video guide if you're a visual learner</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
