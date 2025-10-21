# Guide System Documentation

## Overview
The guide system has been refactored to use separate components for each raid and dungeon, making it much easier to maintain and extend.

## File Structure
```
frontend/src/
├── pages/
│   └── RaidGuide.jsx (main router - don't edit this)
├── guides/
│   ├── index.js (guide registry - add new guides here)
│   ├── raids/
│   │   ├── VaultOfGlass.jsx
│   │   ├── LastWish.jsx
│   │   └── [YourNewRaid].jsx
│   └── dungeons/
│       ├── PitOfHeresy.jsx
│       └── [YourNewDungeon].jsx
```

## How to Add a New Raid

### 1. Create the Component File
Create a new file in `frontend/src/guides/raids/YourRaidName.jsx`:

```jsx
import React from 'react';
import PlayerStats from '../../components/PlayerStats';
import '../../components/GuideStyles.css';

export default function YourRaidName() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/yourraid.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">Your Raid Name</h1>
          <p className="guide-subtitle">Your Subtitle</p>
        </div>
      </div>
      
      <div className="guide-container">
        {/* Player Stats Section */}
        <PlayerStats 
          activityType="raid"
          activityName="Your Raid Name"
          activitySlug="your-raid-slug"
        />

        {/* Lore Section */}
        <section className="guide-section">
          <h2 className="section-title">📖 Lore & Background</h2>
          <div className="lore-content">
            <p>Your raid lore here...</p>
          </div>
        </section>

        {/* Encounters Section */}
        <section className="guide-section">
          <h2 className="section-title">⚔️ Encounters</h2>

          <div className="encounter-card">
            <h3 className="encounter-title">Encounter 1 Name</h3>
            <div className="encounter-content">
              <p><strong>Objective:</strong> What you need to do</p>
              <p><strong>Strategy:</strong> How to do it</p>
              <p><strong>Key Points:</strong> Important things to remember</p>
            </div>
          </div>

          {/* Add more encounters */}
        </section>

        {/* Loot Table */}
        <section className="guide-section">
          <h2 className="section-title">💎 Complete Loot Table</h2>
          <div className="loot-table">
            <div className="loot-encounter">
              <h4>Encounter Name</h4>
              <p>• Weapon 1 • Weapon 2 • Armor pieces</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
```

### 2. Add to the Guide Registry
Edit `frontend/src/guides/index.js` and:

1. **Import your component:**
```js
import YourRaidName from './raids/YourRaidName';
```

2. **Add to raidGuides object:**
```js
export const raidGuides = {
  // ... existing raids
  'your-raid-slug': {
    component: YourRaidName,
    title: 'Your Raid Name',
    subtitle: 'Your Subtitle',
    lore: `Your raid lore...`,
    backgroundImage: '/images/yourraid.jpg'
  }
};
```

### 3. Add the Background Image
Place your raid background image in `frontend/public/images/yourraid.jpg`

### 4. Test Your Guide
The guide will be available at `/raid/your-raid-slug`

## How to Add a New Dungeon

Follow the same process but:
1. Create the file in `frontend/src/guides/dungeons/`
2. Use `activityType="dungeon"` in PlayerStats
3. Add to `dungeonGuides` instead of `raidGuides`

## URL Structure
- Raids: `/raid/raid-slug`
- Dungeons: `/raid/dungeon-slug` (uses same route)

## Benefits of This System

✅ **Modular**: Each guide is a separate component  
✅ **Maintainable**: Easy to edit individual guides  
✅ **Scalable**: Simple to add new guides  
✅ **Reusable**: Common components shared across guides  
✅ **Clean**: No more massive single file  

## CSS Classes Available

All guides inherit these CSS classes from `GuideStyles.css`:
- `.guide-hero` - Hero section with background
- `.guide-container` - Main content container
- `.guide-section` - Section wrapper
- `.section-title` - Section headers
- `.encounter-card` - Individual encounter container
- `.encounter-title` - Encounter name
- `.encounter-content` - Encounter description
- `.loot-table` - Loot table container
- `.loot-encounter` - Individual loot entry
- `.exotic-text` - Special styling for exotic items

## Tips

1. **Use consistent naming**: `YourRaidName.jsx` (PascalCase for files)
2. **Use descriptive slugs**: `your-raid-name` (kebab-case for URLs)
3. **Add images**: Always include a background image
4. **Test locally**: Build and test before deploying
5. **Keep it organized**: Group related encounters logically

This system makes it much easier to maintain and expand your guide content!