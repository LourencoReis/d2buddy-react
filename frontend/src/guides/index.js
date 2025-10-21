// Import all raid guides
import VaultOfGlass from './raids/VaultOfGlass';
import LastWish from './raids/LastWish';
import DesertPerpetual from './raids/DesertPerpetual';
import DesertPerpetualEpic from './raids/DesertPerpetualEpic';
import SalvationsEdge from './raids/SalvationsEdge';
import CrotasEnd from './raids/CrotasEnd';
import RootOfNightmares from './raids/RootOfNightmares';
import KingsFall from './raids/KingsFall';
import VowOfTheDisciple from './raids/VowOfTheDisciple';
import DeepStoneCrypt from './raids/DeepStoneCrypt';
import GardenOfSalvation from './raids/GardenOfSalvation';

// Import all dungeon guides
import PitOfHeresy from './dungeons/PitOfHeresy';
import VespersHost from './dungeons/VespersHost';
import WarlordsRuin from './dungeons/WarlordsRuin';
import GhostsOfTheDeep from './dungeons/GhostsOfTheDeep';
import SpireOfTheWatcher from './dungeons/SpireOfTheWatcher';
import Duality from './dungeons/Duality';
import GraspOfAvarice from './dungeons/GraspOfAvarice';
import Prophecy from './dungeons/Prophecy';
import ShatteredThrone from './dungeons/ShatteredThrone';
import SunderedDoctrine from './dungeons/SunderedDoctrine';

// Raid guide mappings
export const raidGuides = {
  'vault-of-glass': {
    component: VaultOfGlass,
    title: 'Vault of Glass',
    subtitle: 'The Glass Throne',
    lore: `Deep beneath Venus, the Vault of Glass was built by the Vex as a space where they could manipulate reality itself. Here, the Vex have been experimenting with time and causality, erasing entire timelines from existence. The Vault exists partially outside of our reality - those who die here may never have existed at all.`,
    backgroundImage: '/images/vaultofglass2.jpg'
  },
  'last-wish': {
    component: LastWish,
    title: 'Last Wish',
    subtitle: 'The Dreaming City\'s Heart',
    lore: `The Last Wish raid takes place in the Dreaming City, a mysterious realm within the Reef. Here lies Riven, the last known Ahamkara, who has been Taken and corrupted.`,
    backgroundImage: '/images/lastwish.jpg'
  },
  'desert-perpetual': {
    component: DesertPerpetual,
    title: 'Desert Perpetual',
    subtitle: 'Fate\'s Beginning',
    lore: `Deep within the ancient ruins of Mars lies the Desert Perpetual, a mysterious construct that exists between time and space. This raid challenges fireteams to unravel the secrets of the Cabal Empire's most guarded stronghold.`,
    backgroundImage: '/images/desertperp.jpg'
  },
  'desert-perpetual-epic': {
    component: DesertPerpetualEpic,
    title: 'Desert Perpetual (Epic)',
    subtitle: 'Fate\'s End',
    lore: `Deep within the ancient ruins of Mars lies the Desert Perpetual, a mysterious construct that exists between time and space. This epic-difficulty raid challenges fireteams to unravel the secrets of the Cabal Empire's most guarded stronghold.`,
    backgroundImage: '/images/desertperp.jpg'
  },
  'salvations-edge': {
    component: SalvationsEdge,
    title: 'Salvation\'s Edge',
    subtitle: 'The Final Shape',
    lore: `At the very edge of known reality lies Salvation's Edge, a realm where the Witness seeks to complete its final mission. This raid challenges Guardians to confront the ultimate threat and prevent the collapse of existence itself.`,
    backgroundImage: '/images/salvationsedge.jpg'
  },
  'crotas-end': {
    component: CrotasEnd,
    title: 'Crota\'s End',
    subtitle: 'The Dark Below',
    lore: `Deep within the Hellmouth on the Moon lies Crota's End, the throne world of the Hive Prince Crota, Son of Oryx. After Eris Morn's fireteam was slaughtered here, Guardians venture into the Ascendant Realm to end Crota's reign forever.`,
    backgroundImage: '/images/crotasend.jpg'
  },
  'root-of-nightmares': {
    component: RootOfNightmares,
    title: 'Root of Nightmares',
    subtitle: 'Lightfall\'s Darkest Hour',
    lore: `Within the Traveler's pale heart grows the Root of Nightmares, a twisted Pyramid ship infested with darkness. The Witness has corrupted this vessel, transforming it into a nexus of Darkness energy that threatens all of Neptune.`,
    backgroundImage: '/images/rootofnightmares.jpg'
  },
  'kings-fall': {
    component: KingsFall,
    title: 'King\'s Fall',
    subtitle: 'The Taken King\'s Dreadnaught',
    lore: `Oryx, the Taken King, waits aboard his Dreadnaught - a weapon capable of destroying entire fleets. After the death of his son Crota, Oryx has come to our solar system seeking revenge. Guardians must venture into his throne world and end his reign.`,
    backgroundImage: '/images/kingsfall.jpg'
  },
  'vow-of-the-disciple': {
    component: VowOfTheDisciple,
    title: 'Vow of the Disciple',
    subtitle: 'Rhulk\'s Pyramid',
    lore: `Deep within Savathûn's Throne World lies a sunken Pyramid ship, home to Rhulk, Disciple of the Witness. This ancient being wields the Darkness itself and has corrupted an entire Worm God.`,
    backgroundImage: '/images/vowofthedisciple.jpg'
  },
  'deep-stone-crypt': {
    component: DeepStoneCrypt,
    title: 'Deep Stone Crypt',
    subtitle: 'Europa\'s Secret',
    lore: `Hidden beneath Europa's frozen surface lies the Deep Stone Crypt, the birthplace of the Exos. This Bray Tech facility holds dark secrets about the creation of Exo consciousness and has been compromised by Fallen forces.`,
    backgroundImage: '/images/deepstonecrypt.jpg'
  },
  'garden-of-salvation': {
    component: GardenOfSalvation,
    title: 'Garden of Salvation',
    subtitle: 'The Black Garden',
    lore: `The Black Garden holds a dark secret - the origin point of the Vex. After the Pyramid's arrival on the Moon, a signal has emanated from deep within the Garden. Guardians must uncover the truth and face the Sanctified Mind.`,
    backgroundImage: '/images/gardenofsalvation.jpg'
  }
};

// Dungeon guide mappings
export const dungeonGuides = {
  'pit-of-heresy': {
    component: PitOfHeresy,
    title: 'Pit of Heresy',
    subtitle: 'The Nightmare\'s Domain',
    lore: `Deep beneath the surface of the Moon lies the Pit of Heresy, a Hive temple where nightmares and ancient evils dwell.`,
    backgroundImage: '/images/pitofheresy.jpg'
  },
  'vespers-host': {
    component: VespersHost,
    title: 'Vesper\'s Host',
    subtitle: 'Echoes of the Past',
    lore: `Vesper's Host is a mysterious Bray facility housing experimental technology. Fallen forces have breached the station, seeking to harness its power for their own purposes.`,
    backgroundImage: '/images/desertperp.jpg'
  },
  'warlords-ruin': {
    component: WarlordsRuin,
    title: 'Warlord\'s Ruin',
    subtitle: 'Fortress of Broken Dreams',
    lore: `Hidden within the European Dead Zone lies a fortress once ruled by a powerful Warlord. The fortress has fallen into darkness, and now Taken forces occupy its halls.`,
    backgroundImage: '/images/desertperp.jpg'
  },
  'ghosts-of-the-deep': {
    component: GhostsOfTheDeep,
    title: 'Ghosts of the Deep',
    subtitle: 'Titan\'s Depths',
    lore: `Deep beneath Titan's methane seas lies an ancient Hive fortress. The Lucent Brood has claimed this underwater stronghold, and strange echoes of the past haunt its corridors.`,
    backgroundImage: '/images/desertperp.jpg'
  },
  'spire-of-the-watcher': {
    component: SpireOfTheWatcher,
    title: 'Spire of the Watcher',
    subtitle: 'Mars Observation Tower',
    lore: `On Mars stands an ancient Warmind observation tower, now overrun by hostile forces. The Spire holds valuable data and technology that must be secured.`,
    backgroundImage: '/images/desertperp.jpg'
  },
  'duality': {
    component: Duality,
    title: 'Duality',
    subtitle: 'Calus\'s Mindscape',
    lore: `Within Emperor Calus's mind lies a twisted reflection of the Leviathan. This dungeon explores the duality between reality and nightmare.`,
    backgroundImage: '/images/desertperp.jpg'
  },
  'grasp-of-avarice': {
    component: GraspOfAvarice,
    title: 'Grasp of Avarice',
    subtitle: 'Loot Cave Revisited',
    lore: `The legendary Loot Cave on the Cosmodrome has become something far more sinister. Captain Avarokk, a Fallen obsessed with treasure, has turned Guardians' greed into a trap.`,
    backgroundImage: '/images/desertperp.jpg'
  },
  'prophecy': {
    component: Prophecy,
    title: 'Prophecy',
    subtitle: 'The Nine\'s Trial',
    lore: `The Nine have created a realm between Light and Dark, where they test Guardians to understand the balance between these forces.`,
    backgroundImage: '/images/desertperp.jpg'
  },
  'the-shattered-throne': {
    component: ShatteredThrone,
    title: 'The Shattered Throne',
    subtitle: 'Dreaming City\'s First Dungeon',
    lore: `The Shattered Throne is a manifestation of Mara Sov's throne world within the Dreaming City. This realm between realities has been corrupted by Taken forces.`,
    backgroundImage: '/images/desertperp.jpg'
  },
  'the-sundered-doctrine': {
    component: SunderedDoctrine,
    title: 'The Sundered Doctrine',
    subtitle: 'Echoes of Collapse',
    lore: `Hidden deep within the ruins of the Old Tower lies the Sundered Doctrine, a forgotten vault where the Consensus once stored their most dangerous secrets. Now, a rogue faction of Fallen seeks the forbidden technology sealed within.`,
    backgroundImage: '/images/sundered-doctrine.jpg'
  }
};

// Combined guide lookup
export const allGuides = {
  ...raidGuides,
  ...dungeonGuides
};