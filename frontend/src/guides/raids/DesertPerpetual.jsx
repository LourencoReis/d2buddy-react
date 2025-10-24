import React from "react";
import PlayerStats from "../../components/PlayerStats";
import '../../components/GuideStyles.css';

export default function DesertPerpetual({ 
  heroImage = "/images/endcutscene.jpg",
  title = "Desert Perpetual",
  subtitle = "Fate's Beginning",
  activitySlug = "desert-perpetual"
}) {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">{title}</h1>
          <p className="guide-subtitle">{subtitle}</p>
        </div>
      </div>
      
      <div className="guide-container">
        {/* Player Stats Section */}
        <PlayerStats 
          activityType="raid"
          activityName={title}
          activitySlug={activitySlug}
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

        {/* Non Linearity Section */}
        <section className="guide-section">
          <h2 className="section-title">🌀 Non-Linearity & Exploration</h2>
          <div className="non-linearity-content">
            <p>
              The Desert Perpetual features a non-linear design, allowing fireteams to explore its vast environments in a non-linear fashion. 
              Players can choose different paths, uncover hidden secrets, and engage in optional encounters.
            </p>
            <p><strong>But what does this mean?</strong></p>
            <p>
              In practical terms, this means that fireteams can approach encounters in multiple ways. 
              Some paths may lead to easier fights, while others could provide valuable loot or lore insights.
            </p>
            <p><strong>So We can do any encounter?</strong> Exactly! You can chose the order of the encounters that you go through. This meaning that you could choose which encounter you find easiest frist or hardest! Below we will give a recommendation of what order is the easiest to follow.</p>
          </div>
        </section>

        {/* Encounters Section */}
        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">Epoptes , Lord of Quanta</h3>
            <div className="encounter-content">
              <p><strong>To select the Epoptes encounter (often called "hydra") you must select the left path. Then you must go through its jumping puzzle and then you will arrive at the encounter.</strong>(Image below)</p>
              <div className="encounter-image">
                <img src="/images/selecthydra.jpg" alt="Epoptes selection" style={{ maxWidth: '600px' }} />
              </div>
              <p><strong>Objective:</strong> Break the lenses and defeat the all-seeing choral vex hydra.</p>
              <p>As you walk in the arena you will notice there is a massive pit in the middle where the boss will be all the time.</p>
              
              <div className="encounter-image">
                <img src="/images/hydraarena.jpg.png" alt="Arena overview" style={{ maxWidth: '600px' }} />
              </div>

              <p>However if you wonder in the left room and right room you will see that the boss is also there. If you look at it you will that it has a shield and some eyes in its shield. This is the main mechanic for the inside room which is explained a little later.
              The hydra's lenses will be in both rooms.</p>
              
              <p><strong>Left Room:</strong> The left room will have a lens on the left side and a cyclops will spawn here.</p>
              <div className="encounter-image">
                <img src="/images/leftsideplatehydra.jpg" alt="Left room view" style={{ maxWidth: '400px' }} />
              </div>
              <p><strong>Right Room:</strong> The right room will have a lens on the right side and a cyclops will spawn here.</p>
              <div className="encounter-image">
                <img src="/images/rightsidehydraplate.jpg" alt="Right room view" style={{ maxWidth: '600px' }} />
              </div>
              <p>Before you go into each of the rooms you will see a bronze plate. This is important since this is the buff that will allow to destroy the lenses'es eyes in each room. You make this buff by eliminating the cyclops that spawn on each side.</p>
              <div className="encounter-image">
                <img src="/images/epoptesbuff2.jpg" alt="Epoptes main buff" style={{ maxWidth: '600px' }} />
              </div>

              <p><strong>Organisation of the team:</strong> To start you must split the 6 player team into 3 groups of 2. 2 people will be assigned to go into the room in the corner rooms. Left room and right room. The other 2 teammates will stay in the middle of the room.</p>
              <p><strong>Roles-Outside team:</strong> The outside team for the most part will be ad clearing.However they are just as important both when it comes to making the arena safe and not overly dangerous.After the inside team destroys 3 eyes the outside team will have to prepare themselves.The boss begins to do the wipe mechanic , the two members outside will have to quickly kill the cyclops and pick up the buff in the places on the left and right side.</p>
              <p><strong>Roles-Inside rooms:</strong> Once both sides eliminate the cyclops both teams must run to the plates and make sure everyone gets a buff. However 2 players only really need the buff the other 2 just have the buff in case something goes wrong.
              What you must do inside is the following: <br /> Run towards the side the epoptes'es lense is pointing to (you will that it shines light to, that is where you should stand.) In this room you will see that in some places in the wall you will see a diagram that resembles the eyes of the lens's shield.(image below)</p>
              
              <div className="encounter-image">
                <img src="/images/wipemechanicinfoandseeingeyes.jpg" alt="Epoptes shield eyes diagram" style={{ maxWidth: '600px' }} />
              </div>
              
              <p>Now that you are in front of the lens you must follow it around room so you're always looping the room while you are calling out the eyes that the right side room needs to destroy aswell as destroy the eyes that the other side tells you to destroy.
                So the ideal thing is that you and the partner on the other side call out the most eyes you can before the boss does it's wipe mechanic.
              </p>
              <p><strong>What is the wipe mechanic?</strong> In this encounter the boss has many ways to eliminate your team. However one of those is supposed to happen and you must have teamwork to prevent it from happening.</p>
              <div className="encounter-image">
                <img src="/images/wipemechanicinfoandseeingeyesdraw.jpg" alt="Epoptes wipe mechanic" style={{ maxWidth: '600px' }} />
              </div>
              <p>In the bottom left of your screen, above your super ability text will show and there is a soundqueue.This is where the crucial part of the outside team comes.</p>
              <p><strong>The outside must do:</strong> Kill the cyclops as fast as possible so they can also buff up. Walk towards the middle of the arena and read the same structure as they eye diagram the inside team sees.The members must assign themselves to calling for left and the other to right. This is CRUCIAL since this will be the key to preventing the wipe mechanic.</p>
              <p><strong>So what does the outside team need to do to prevent the wipe mechanic?</strong> The outside team must each assign to call for left inside and call for right inside. The person on the left side of the obelisk will provide the call out for the right inside person, which eye to destroy on their set of eyes to prevent a wipe. The person outside will then go to the right side of obelisk and destroy the two eyes that their partner outside didn't call.</p>
              <p> <strong>INSIDE TEAM : BE AWARE THAT WHEN SOMETHING LIKE LEFT OR RIGHT IS CALLED YOU MUST INTERPRET AS IF YOU WERE COMING FROM THE OUTSIDE OF THE ROOM!!!</strong></p>
              
              <div className="encounter-image">
                <img src="/images/eyesoutside.jpg" alt="Epoptes final arena view" style={{ maxWidth: '600px' }} />
              </div>
              <p><strong>What must you do after?</strong>After the wipe mechanic is prevented you will have your buff you got at the plate revoked. The inside players must run outside , help their outside teammates eliminate the cyclops to make the buff re-appear in the plates. After this you must continue destroying the eyes until the biggest one , the middle one is the only one standing. </p>
              <p><strong>What happens with the last eye?</strong>The last eye will end both the lenses. So make sure that the person shooting the eys on the other side also only has the middle eye left. If not keep calling out the eyes in the eye diagram in the inside rooms. Once both middle eyes are destroyed in the side rooms the lens will be defeated.</p>
              <p><strong>Everyone must come out!</strong>Now that both lenses are destroyed the boss in the middle will have a similar mechanic. However it will be much quicker. Now that both side lenses are destroyed the boss will have a lens for each side. If you have the buff and finished left side you will be able to destroy one of the shields and the person that destroyed the lens on the other side will be able to destroy the other shield.</p>
              <p><strong>DPS TIME! oh wait...</strong>Now everyone must gather up. Get close together , clear any remaining enemies.Now that both shields are destroyed the boss will start assigning random teamates until all of them destroy its shield. To destroy its regenerating shields like the ones that were up once both lenses were destroyed. You must look above your abilities and 2 members at random will be selected. You will see which shield you are assigned to because it will shine a light.Once you know which shield you are assigned to run to the front of it and walk with it as it will be rotating just like the lenses's shield.</p>
              <p><strong>Make sure to bring weapons with high fire rate!</strong>The reason for this is that once the boss lingers for a little bit with the shields up and the players are ready the eyes that were destroyed in the lenses will appear again , but this time around you can shoot them you must shoot the middle one last to completly destroy the shield.<strong>MAKE SURE TO BE IN TIME FOR THE DESTROYING OF THE EYES , THIS IS CRITICAL SO THAT YOUR TEAM CAN DO PROPER DAMAGE TO THE BOSS.</strong></p>
              <p><strong>Rince and repeat</strong>
              If you are not able to 1 phase this boss the lenses will respawn in the side rooms and you then you repeat the whole process. </p>
              <p><strong>Important call outs:</strong></p>
              <ul>
                <li>Call outs to prevent wipe mechanic: left , top or bottom</li>
                <li>Call out for eyes:Top left , top mid , top right , mid left , mid right , bottom left , bottom mid , bottom right</li>
                <li>Cyclops spawning</li>
                <li>Let's buff up/Pick up buff/Come to plate for buff</li>
              </ul>
              <p><strong>Important note:</strong> Communication is key! Make sure to call out your actions clearly and listen for your teammates' calls.</p>
              <p><strong>Extra tips:</strong>Make sure to have a teamate on debuffing duty , ideally a warlock player to use their song of flame super or well of radiance to provide protection and damage buffs to the team. If you really want to optimize damage have a few titans usint the thundercrash super with the storm's keep aspect to generate bolt charge for the extra damage for the whole team.</p>
            </div>
          </div>
          <div className="encounter-card">
            <h3 className="encounter-title">Agraios ,  Inherent</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> Successfully destroy Agarios,</p>
              <p><strong>Roles:</strong> 2 Runners, 2 Add Clear, 2 Plate Holders</p>
              <p><strong>Strategy:</strong> Runners retrieve time crystals and deliver them to plates. Plate holders stand on pressure plates to stabilize the arena.</p>
              <p><strong>Key Mechanic:</strong> The arena shifts between timelines periodically. Adapt your positioning accordingly.</p>
            </div>
          </div>

          <div className="encounter-card">
            <h3 className="encounter-title">Iatros , Inward-Turned</h3>
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
            <h3 className="encounter-title">Koregos , the Wordline</h3>
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
          <h2 className="section-title">🎁 Loot Table</h2>
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
              <li>Kinetic: Mint Retrograde or Outbreak Perfected </li>
              <li>Energy: ad clear weapons Or sniper (for Koregos specific role)</li>
              <li>Heavy: Tractor Cannon or Legend of Acrius (Iatros encounter only)</li>
            </ul>
          </div>

          <div className="loadout-card">
            <h3>Hunter <strong>(NOTE THAT THIS CLASS IS HEAVILY HANDICAPPED IN THIS RAID. However if you do decide to play as hunter)</strong></h3>
            <p><strong>Subclass:</strong> Gunslinger or Prismatic </p>
            <p><strong>Exotic Armor:</strong> Star-eater scales (for orb generation to provide more supers for your team) Relativsm (Spirit of the Cyrtarachne)</p>
            <p><strong>Weapons:</strong></p>
            <ul className="tips-list">
              <li>Kinetic: Sniper Rifle(for koregos) or Mint Retrograde</li>
              <li>Energy: Fusion Rifle or Trace Rifle or sniper (for Koregos specific role)</li>
              <li>Heavy: Machine gun (for ad clear) or Rocket Launcher</li>
            </ul>
          </div>

          <div className="loadout-card">
            <h3>Titan</h3>
            <p><strong>Subclass:</strong> Striker (Arc) Thundercrash super for dps or Berserker(Strand) for melee damage in Iatros encounter</p>
            <p><strong>Exotic Armor:</strong> Cuirass of the falling star(for arc) or Wishful Ignorance(Strand)</p>
            <p><strong>Weapons:</strong></p>
            <ul className="tips-list">
              <li>Kinetic: Mint Retrograde or Outbreak Perfected</li>
              <li>Energy: Antedate(for peacekeepers dps) or regular ad clearing weapons</li>
              <li>Heavy: Machine Gun(for ad-clearing) or Rocket Launcher or Legend of Acrius(iatros) or Finality's auger (for peacekeeper rotation)</li>
            </ul>
          </div>
        </section>

        {/* Tips & Tricks */}
        <section className="guide-section">
          <h2 className="section-title">💡 Pro Tips</h2>
          <ul className="tips-list">
            <li><strong>Communication:</strong> Clear callouts are essential, especially during the set up for damage phases.</li>
            <li><strong>Team composition:</strong> Ensure your fireteam has member that always focuses on webuffing bosses,titans using cuirass of the falling star with thundercrash and ammmo economy damage choices.</li>
            <li><strong>Jump Timing:</strong> Practice jumping over fire waves during boss DPS.</li>
            <li><strong>Stay Together:</strong> Group up in the Temporal Well for damage buffs during boss phase.</li>
            <li><strong>Add Management:</strong> Don't ignore adds during boss fight - they can overwhelm you quickly.</li>
            <li><strong>Use Rally Banners:</strong> Always rally before each encounter to have full ammo and super.</li>
            <li><strong>Learn Patterns:</strong> Boss mechanics follow patterns - learn them to improve consistency.</li>
          </ul>
        </section>
        <section className="guide-section">
          <h2 className="section-title">
            <img src="/images/helmet.png" alt="" style={{ width: '24px', height: '24px', marginRight: '8px', verticalAlign: 'middle' }} />
            Greek References in this raid
          </h2>
          <ul className="tips-list">
            <li> Agraios(Άγριος) - Represents the concept of the primal forces of nature.</li>
            <li>Koregos( Χορηγός) - Symbolizes the connection between time and space.</li>
            <li>Chronos ( Χρόνος) - Embodies the relentless passage of time.</li>
            <li>Iatros ( Iατρός) - Represents the healing aspect of time.</li>
            <li>Epoptes( Eπόπτης) - Symbolizes the all-seeing aspect of time.</li>
            <li>Diastole ( Διαστολή)- In Iatros's encounter there is a mechanic that involves the heart expanding and contracting.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
