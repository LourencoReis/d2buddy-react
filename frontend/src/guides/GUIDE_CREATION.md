# Guide Creation Instructions

This directory contains all raid and dungeon guides for the D2Buddy application.

## Structure

```
guides/
├── index.js          # Central registry for all guides
├── TEMPLATE.jsx      # Template file for creating new guides
├── raids/            # Raid guide components
│   ├── VaultOfGlass.jsx
│   ├── LastWish.jsx
│   ├── DesertPerpetualEpic.jsx
│   └── ...
└── dungeons/         # Dungeon guide components
    ├── PitOfHeresy.jsx
    └── ...
```

## Creating a New Raid or Dungeon Guide

### Step 1: Copy the Template
1. Copy `TEMPLATE.jsx` to either `raids/` or `dungeons/` folder
2. Rename it to match your raid/dungeon name (e.g., `DeepStoneCrypt.jsx`)

### Step 2: Update the Component
Edit your new file and update:
- Component name (e.g., `export default function DeepStoneCrypt()`)
- Hero image path and title/subtitle
- Lore content
- Encounters (add/remove as needed)
- Loot table
- Recommended loadouts
- Tips and tricks

### Step 3: Register in index.js
Add your guide to `guides/index.js`:

```javascript
// 1. Import your component
import DeepStoneCrypt from './raids/DeepStoneCrypt';

// 2. Add to raidGuides or dungeonGuides object
export const raidGuides = {
  // ... existing raids
  'deep-stone-crypt': {
    component: DeepStoneCrypt,
    title: 'Deep Stone Crypt',
    subtitle: 'Europa\'s Secret',
    lore: `Your lore summary here...`,
    backgroundImage: '/images/deepstonecrypt.jpg'
  }
};
```

**Important:** The key (e.g., `'deep-stone-crypt'`) must match the URL slug format:
- Lowercase
- Hyphens instead of spaces
- No special characters

### Step 4: Add a Card to the Page
Add your raid/dungeon card to either `pages/Raids.jsx` or `pages/Dungeons.jsx`:

```jsx
<RaidCard title="Deep Stone Crypt" image="/images/deepstonecrypt.jpg" />
// or
<DungeonCard title="Vesper's Host" image="/images/vespers-host.jpg" slug="vespers-host" />
```

The card will automatically:
- Generate the correct URL slug
- Link to `/raids/deep-stone-crypt` or `/dungeons/vespers-host`
- Display your image and title

### Step 5: Add the Image
Place your background image in `frontend/public/images/` with a descriptive name.

## Guide Template Sections

The template includes these sections (customize as needed):

1. **Hero Section** - Large background image with title
2. **Player Stats** - Displays user's personal stats for this activity
3. **Lore & Background** - Story and context
4. **Encounters** - Detailed walkthrough of each encounter
5. **Loot & Rewards** - Weapons, armor, and god rolls
6. **Recommended Loadouts** - Class-specific builds
7. **Pro Tips** - Quick tips and tricks

## Example: Desert Perpetual (Epic)

See `raids/DesertPerpetualEpic.jsx` for a complete example with:
- Multiple complex encounters
- Boss mechanics with phases
- Challenge mode information
- Detailed loot tables
- Class-specific recommendations

## URL Routing

The app automatically routes:
- `/raids/:raidSlug` → RaidGuide component
- `/dungeons/:dungeonSlug` → RaidGuide component

The `RaidGuide.jsx` component looks up the guide from the registries and renders it.

## Tips

- Keep encounter descriptions clear and concise
- Use bold text for important callouts
- Include wipe mechanics and common mistakes
- Add specific weapon/mod recommendations
- Update PlayerStats props with correct activityType and slug

## Quick Reference: Adding a Guide

1. ✅ Copy `TEMPLATE.jsx` to `raids/` or `dungeons/`
2. ✅ Rename and customize the component
3. ✅ Import in `guides/index.js`
4. ✅ Register in `raidGuides` or `dungeonGuides` object
5. ✅ Add card to `pages/Raids.jsx` or `pages/Dungeons.jsx`
6. ✅ Add image to `public/images/`

That's it! Your guide is now live and accessible.
