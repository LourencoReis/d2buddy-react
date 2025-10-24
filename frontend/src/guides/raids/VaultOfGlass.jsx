import React from 'react';
import PlayerStats from '../../components/PlayerStats';
import '../../components/GuideStyles.css';

export default function VaultOfGlass() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/vaultofglass2.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">Vault of Glass</h1>
          <p className="guide-subtitle">The Glass Throne</p>
        </div>
      </div>
      
      <div className="guide-container">
        {/* Player Stats Section */}
        <PlayerStats 
          activityType="raid"
          activityName="Vault of Glass"
          activitySlug="vault-of-glass"
        />

        {/* Lore Section */}
        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>
              Deep beneath Venus, the Vault of Glass was built by the Vex as a space where they could manipulate reality itself. 
              Here, the Vex have been experimenting with time and causality, erasing entire timelines from existence. 
              The Vault exists partially outside of our reality - those who die here may never have existed at all.
            </p>
          </div>
        </section>

        {/* Encounters Section */}
        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">Opening & Spire Formation</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Form three teams to capture and hold sync plates simultaneously.</p>
              <p><strong>Strategy:</strong> Split into teams of 2 for each sync plate (left, middle, right). Clear Vex and hold plates until spire forms.</p>
              <p><strong>Key Points:</strong> Communication is essential. Call out when plates are secure and when you need help.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Confluxes</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Prevent Vex from sacrificing themselves to the confluxes while managing waves of enemies.</p>
              <p><strong>Strategy:</strong> Assign teams to each conflux. Priority targets are anything moving toward confluxes. Use area denial supers and weapons.</p>
              <p><strong>Positions:</strong> Each of the sides requires someone to defend the conflux. Position yourself in a way that does not let the enemies walk around freely.</p>
              <p><strong>Critical:</strong> If too many Vex sacrifice, your team wipes. Focus fire on sacrificing enemies!</p>
              <p><strong>Callouts:</strong> If multiple members of the team get marked for negation quickly gather around in the middle near the circle so everyone can get cleansed at the same time costing the team only a bit of time but no resurection tokens are used</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Oracles</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Destroy Oracles in the correct sequence to avoid the "Ritual of Negation."</p>
              <p><strong>Strategy:</strong> Listen for the Oracle tones and destroy them in order. Number the Oracle locations 1-7 and call out the sequence.</p>
              <p><strong>Encounter length:</strong> At the start of the encounter only 3 oracles will appear. As the correct order of oracles are shot the encounter will progress as 1 oracle is added each round until all 7 oracles spawn. Making this encounter 5 rounds of precise communication between the raid team.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Templar Boss Fight</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat the Templar while managing his shields and teleportation.</p>
              <p><strong>Roles:</strong> This encounter will only consist of 3 players having a role. There will be one holder of the aegis (relic used to break the templar's shield) and 2 people that will destroy oracles at the start of the encounter</p>
              <p><strong>Encounter length:</strong> This encounter starts by the oracles appearing again. The oracles start in 3 again, however after this the aegis holder will immediately break the templar's shield. The team will stand together while the aegis holder needs to do his duty of cancelling the templar's teleports.</p>
              <p><strong>But how will the aegis holder stop Templar from teleporting?</strong> Once templar's shield is broken somewhere around the arena there will be some beacons of light with a red ring around it. To stop templar from teleporting and regaining his shield the aegis holder must step within the ring and stop the boss's teleport. However this will happen multiple times until the boss is defeated.</p>
              <p><strong>Critical Callouts:</strong> While the team is doing their DPS they must look around as the aegis holder might need help to step in the beacons of light which indicate where the templar will teleport to.</p>
              <p><strong>Strategy:</strong> One player with the Aegis shield cleanses the team and takes down Templar's shield. DPS phase begins when shield is down.</p>
              <p><strong>Pump out as much damage as you can:</strong> Be careful, if you take too long the templar will summon more oracles. The goal is to be able to defeat him before he gets the chance to do this. However if you are confident let the oracles explode and keep damaging the templar since the ritual of negation takes a few seconds to wipe your team.</p>
              <p><strong>Desirable loot:</strong> Fatebringer (Hand Cannon) can drop here</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Gorgon's Labyrinth</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Navigate through the maze without being spotted by Gorgons.</p>
              <p><strong>Strategy:</strong> Move slowly and hide behind cover when Gorgons look in your direction. Follow the designated path and wait for callouts.</p>
              <p><strong>Be careful not to be spotted! If one of the Gorgons detects you, they will wipe out your team and have you do the whole section again!</strong></p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Gatekeepers</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Retrieve relics from past and future timelines while defending the center conflux.</p>
              <p><strong>Strategy:</strong> Send teams through Mars (right) and Venus (left) portals to get relics. Use relics to cleanse and protect the team from the Templar's attacks.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Atheon, Time's Conflux</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Defeat Atheon using time manipulation and coordinated DPS phases.</p>
              
              <div className="encounter-image">
                <img src="/images/atheon-arena.jpg" alt="Atheon Boss Arena" />
                <p className="image-caption">Atheon's throne room with the three portal platforms</p>
              </div>
              
              <p><strong>Strategy:</strong> This is a complex encounter requiring perfect coordination between teleported and outside teams.</p>
              
              <p><strong>Phase Breakdown:</strong></p>
              <ul>
                <li><strong>Initial Phase:</strong> Shoot the cube in the middle to start the encounter. Afterwards split the team into two for each side Mars portal(left) and Venus portal(right)</li>
                <li><strong>Teleport Phase:</strong> Three random players get sent to past (Venus/green) or future (Mars/orange)</li>
                <li><strong>Players that dont get teleported, what's their role?</strong> The 3 players outside have to assign one person to call out the oracles that light up in atheon's throne in a row. The way that they are called out can be either by using directions or numbers. Meanwhile, the members that dont read oracles should keep the portal that was called out by the team inside for example the team was teleported to mars so they call out mars and the other members that are in atheon's throne open the mars portal and clear all the enemies to get a clean dps phase. However if the team has a verity's brow setup (refer to optimal builds section) the team needs to leave enemies alive so they should just focus on opening the portal and make sure the reader doesnt have to worry about clearing enemies.</li>
                <li><strong>Portal Team:</strong> Once the 3 players are teleported one of them must pick up the aegis as QUICK AS POSSIBLE this is critical for the encounter to continue. Since the players are teleported in a debuff called prevading darkness will start to stack up, It is the aegis holder job to hold the block keybind to form a shield that cleanses themselves as well as their teammates. As the aegis is picked up the players should immediately call out which side they are either mars or venus. As this is critical for the players to leave the portal. The players inside must move forward, eliminate the gatekeeper inside and move to the back of the room turn around and the reader outside must call out the 3 oracles that were lit up by the reader. The team inside should assign 2 people to shoot the oracles. After 3 rounds a message will display in the bottom left "Guardians make their own fate" This is a sign that the portal section is done and all players should gather outside the portal.</li>
                <li><strong>Before DPS:</strong> As the 3 players that left the portal come out, everyone should gather on the stairs that go close to atheon's throne. The aegis holder should be cleansing all of the team as the prevading darkness debuff still applies during the dps phase.</li>
                <li><strong>Important:</strong> "Time's Vengeance" increases your overall ability damage against <strong>ATHEON and only atheon.</strong> However it is recommended that the team uses a build like verity's brow warlock with fusion nades (Refer to build recommendations section)</li>
               <li><strong>DPS Phase:</strong> Once everyone is gathered and cleansed the team must move to the staircase near the throne and maximise their damage. Since the team is all gathered a debuff will show up in a random player's screen and visual indicator of blue and red ticking. This debuff is called imminent detain and once the timer runs out the player is stuck in a bubble much like templar. BE CAREFUL do not stay close to your teammates when you have this debuff. Call out that you have the debuff and once you are stuck in a bubble your teammates must shoot you <strong>DO NOT USE ANTI BARRIER ROUNDS AGAINST THE BUBBLE IT DOES NOT WORK</strong></li>
              </ul>
              
              <div className="encounter-image">
                <img src="/images/atheon-dps.jpg" alt="Atheon DPS Setup" />
                <p className="image-caption">Optimal positioning for DPS phase on the stairs with Well of Radiance</p>
              </div>
              
              <p><strong>Critical Callouts:</strong></p>
              <ul>
                <li>"We're on (Venus or Mars) open the portal"</li>
                <li>"Portal open!" - Outside team confirms portal is active</li>
                <li>"Times Vengeance active!" - make sure to use your grenades</li>
                <li>"Supplicants spawning!" - Explosive enemies targeting outside team</li>
                <li>"I need cleanse!" - Aegis holder must cleanse teammates</li>
              </ul>
              
              <p><strong>Exotic Loot:</strong> <span className="exotic-text">Vex Mythoclast</span> - The exotic fusion rifle can drop here! Low drop rate but can have its chance of dropping increased by completing specific challenges and triumphs. <strong>Check the Challenges Section for more information</strong></p>
            </div>
          </div>
        </section>

        {/* Overall Loot Table */}
        <section className="guide-section">
          <h2 className="section-title">💎 Complete Loot Table</h2>
          <div className="loot-table">
            <div className="loot-encounter">
              <h4>Opening/Conflux/Oracles</h4>
              <p>All Legendary drops</p>
            </div>
            <div className="loot-encounter">
              <h4>Confluxes</h4>
              <p>• Vision of Confluence • Found Verdict • Corrective Measure • Gauntlets • Class items</p>
            </div>
            <div className="loot-encounter">
              <h4>Oracles</h4>
              <p>• Vision of Confluence • Found Verdict • Praedyth's Revenge • Gauntlets • Legs</p>
            </div>
            <div className="loot-encounter">
              <h4>Templar</h4>
              <a color='' href="https://www.light.gg/db/items/4184168210/fatebringer">Fatebringer   • Armor</a>
              <a href="https://www.light.gg/db/items/3654744298/corrective-measure"> Corrective Measure</a>
              <a href="https://www.light.gg/db/items/3654744298/corrective-measure">• Vision of Confluence</a>
            </div>
            <div className="loot-encounter">
              <h4>Gatekeeper</h4>
              <p>• Fatebringer • Found Verdict • Hezen's Vengeance • Helmet</p>
            </div>
            <div className="loot-encounter">
              <h4>Atheon, Time's Conflux</h4>
              <p>• <span className="exotic-text">Vex Mythoclast</span> • Mythoclast Catalyst • Praedyth's Revenge • Corrective Measures • Hezen's Vengeance • Helmet • Chest</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}