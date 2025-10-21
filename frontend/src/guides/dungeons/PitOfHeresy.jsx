import React from 'react';
import PlayerStats from '../../components/PlayerStats';
import '../../components/GuideStyles.css';

export default function PitOfHeresy() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/pitofheresy.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">Pit of Heresy</h1>
          <p className="guide-subtitle">The Nightmare's Domain</p>
        </div>
      </div>
      
      <div className="guide-container">
        {/* Player Stats Section */}
        <PlayerStats 
          activityType="dungeon"
          activityName="Pit of Heresy"
          activitySlug="pit-of-heresy"
        />

        {/* Lore Section */}
        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              Deep beneath the surface of the Moon lies the Pit of Heresy, a Hive temple where 
              nightmares and ancient evils dwell. Here, Guardians must face their fears and 
              overcome the Hive's most twisted creations to reach Zulmak, Instrument of Torment.
            </p>
          </div>
        </section>

        {/* Encounters Section */}
        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">Necropolis</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Navigate the maze-like Necropolis and defeat the three Hive rituals.</p>
              <p><strong>Strategy:</strong> Solve the maze by finding the correct path and defeat the Hive champions in each ritual area.</p>
              <p><strong>Key Points:</strong> Take your time exploring, and coordinate with your team to tackle each ritual efficiently.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Tunnels of Despair</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Progress through the tunnels while managing the Hive runes and switches.</p>
              <p><strong>Strategy:</strong> Use the correct sequence of switches and runes to progress. One player may need to sacrifice to activate certain switches.</p>
              <p><strong>Critical:</strong> Communication is key. Coordinate who activates what and when.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Chamber of Suffering</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Survive in the chamber while balls of energy try to kill you.</p>
              <p><strong>Strategy:</strong> Stay mobile and use cover. The chamber will try to crush you with moving walls and energy attacks.</p>
              <p><strong>Key Mechanic:</strong> Use the totem plates to progress while avoiding the deadly mechanics.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Harrow</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Navigate the narrow bridges while being attacked by Hive enemies.</p>
              <p><strong>Strategy:</strong> Move carefully across the bridges. One wrong step means death. Clear enemies methodically.</p>
              <p><strong>Critical:</strong> Patience is key. Don't rush and fall off the narrow paths.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Zulmak, Instrument of Torment</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat Zulmak using the sword mechanic and DPS phases.</p>
              <p><strong>Strategy:</strong> Kill the three mini-bosses to get their swords, then use the swords to break Zulmak's shield for DPS.</p>
              <p><strong>Key Mechanic:</strong> Each sword has a specific enemy it can damage. Match the right sword to the right mini-boss.</p>
              <p><strong>DPS Phase:</strong> Once Zulmak's shield is down, maximize damage with heavy weapons and supers.</p>
              <p><strong>Exotic Loot:</strong> <span className="exotic-text">Xenophage</span> - Complete the associated quest for this powerful machine gun!</p>
            </div>
          </div>
        </section>

        {/* Overall Loot Table */}
        <section className="guide-section">
          <h2 className="section-title">💎 Complete Loot Table</h2>
          <div className="loot-table">
            <div className="loot-encounter">
              <h4>Necropolis</h4>
              <p>• Premonition • Heretic • Loud Lullaby • Armor pieces</p>
            </div>
            <div className="loot-encounter">
              <h4>Tunnels of Despair</h4>
              <p>• Tranquility • Arc Logic • Dream Breaker • Armor pieces</p>
            </div>
            <div className="loot-encounter">
              <h4>Chamber of Suffering</h4>
              <p>• Premonition • Heretic • Loud Lullaby • Armor pieces</p>
            </div>
            <div className="loot-encounter">
              <h4>Harrow</h4>
              <p>• Tranquility • Arc Logic • Dream Breaker • Armor pieces</p>
            </div>
            <div className="loot-encounter">
              <h4>Zulmak, Instrument of Torment</h4>
              <p>• <span className="exotic-text">Xenophage</span> (quest) • All dungeon weapons • Armor pieces • Pinnacle gear</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}