import React from 'react';
import PlayerStats from '../../components/PlayerStats';
import '../../components/GuideStyles.css';

export default function LastWish() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/lastwish.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">Last Wish</h1>
          <p className="guide-subtitle">The Dreaming City's Heart</p>
        </div>
      </div>
      
      <div className="guide-container">
        {/* Player Stats Section */}
        <PlayerStats 
          activityType="raid"
          activityName="Last Wish"
          activitySlug="last-wish"
        />

        {/* Lore Section */}
        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              The Last Wish raid takes place in the Dreaming City, a mysterious realm within the Reef. 
              Here lies Riven, the last known Ahamkara, who has been Taken and corrupted. 
              The Guardians must navigate through the twisted reality of the Dreaming City to reach 
              Riven's heart and put an end to the corruption once and for all.
            </p>
          </div>
        </section>

        {/* Encounters Section */}
        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">Kalli, the Corrupted</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat Kalli while managing her teleportation and door mechanics.</p>
              <p><strong>Strategy:</strong> Split into teams to clear rooms. When Kalli teleports, find the safe room with the symbol that matches the one above her head.</p>
              <p><strong>Key Points:</strong> Learn the nine symbols and their callouts. Communication is crucial for finding safe rooms quickly.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Shuro Chi, the Corrupted</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Cleanse Shuro Chi using puzzle mechanics while dealing with her attacks.</p>
              <p><strong>Strategy:</strong> Solve the puzzle plates to stagger Shuro Chi, then use the Prism weapon to cleanse her corruption.</p>
              <p><strong>Critical:</strong> Puzzle must be solved quickly before Shuro Chi wipes the team. Assign roles for puzzle solving and add clearing.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Morgeth, the Spirekeeper</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat Morgeth while managing Taken Strength stacks.</p>
              <p><strong>Strategy:</strong> Players must pick up Taken Strength orbs to prevent Morgeth from gaining power, but too many stacks will kill you.</p>
              <p><strong>Key Mechanic:</strong> Pass Taken Strength between players to balance the stacks and maximize DPS windows.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">The Vault</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Navigate the complex symbol and room mechanics to unlock the path to Riven.</p>
              <p><strong>Strategy:</strong> This is the most complex encounter with multiple rooms, symbol callouts, and precise timing.</p>
              <p><strong>Roles:</strong> Assign specific players to each room and establish clear callout protocols for the symbols.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Riven of a Thousand Voices</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat the last Ahamkara through multiple phases involving eyes, symbols, and massive DPS.</p>
              <p><strong>Strategy:</strong> This is one of the most complex raid encounters ever created, requiring mastery of all previous mechanics.</p>
              <p><strong>Phases:</strong> Eye shooting, symbol callouts, elevator mechanics, and final DPS phase.</p>
              <p><strong>Note:</strong> This encounter can be "cheesed" with high DPS, but the legitimate clear is incredibly rewarding.</p>
              <p><strong>Exotic Loot:</strong> <span className="exotic-text">1000 Voices</span> - Powerful exotic fusion rifle with explosive rounds!</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Queenswalk</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Carry Riven's heart to the Techeun while managing the Heart Bearer mechanic.</p>
              <p><strong>Strategy:</strong> Players take turns carrying the heart while others clear the path. Heart Bearer has limited time before death.</p>
              <p><strong>Critical:</strong> Timing and coordination are essential. Know when to pick up and drop the heart.</p>
            </div>
          </div>
        </section>

        {/* Overall Loot Table */}
        <section className="guide-section">
          <h2 className="section-title">💎 Complete Loot Table</h2>
          <div className="loot-table">
            <div className="loot-encounter">
              <h4>Kalli, the Corrupted</h4>
              <p>• Chattering Bone • Techeun Force • Nation of Beasts • Armor pieces</p>
            </div>
            <div className="loot-encounter">
              <h4>Shuro Chi, the Corrupted</h4>
              <p>• Age-Old Bond • The Supremacy • Techeun Force • Armor pieces</p>
            </div>
            <div className="loot-encounter">
              <h4>Morgeth, the Spirekeeper</h4>
              <p>• Chattering Bone • Nation of Beasts • Tyranny of Heaven • Armor pieces</p>
            </div>
            <div className="loot-encounter">
              <h4>The Vault</h4>
              <p>• Age-Old Bond • The Supremacy • Tyranny of Heaven • Armor pieces</p>
            </div>
            <div className="loot-encounter">
              <h4>Riven of a Thousand Voices</h4>
              <p>• <span className="exotic-text">One Thousand Voices</span> • All raid weapons • Armor pieces • Glittering Key (for additional chests)</p>
            </div>
            <div className="loot-encounter">
              <h4>Queenswalk</h4>
              <p>• All raid weapons • Armor pieces • Additional loot from completion</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}