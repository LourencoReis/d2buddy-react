# Two-Image Background System - Visual Guide

## ✅ FIXED: Header Visibility Issue

The header buttons are now visible! Here's what was fixed:

**Problem:** The background layer had `z-index: 1` which covered the header
**Solution:** 
- Background: `z-index: 0` (behind everything)
- Hero section: `z-index: 1` (above background)
- Header: `z-index: 100` (above everything)

---

## 🎨 Crota's End - Two-Image Example

Crota's End now demonstrates the full two-image system:

### Image #1: Full-Page Background
```jsx
<div 
  className="guide-page-background"
  style={{ backgroundImage: `url(/images/desertperp.jpg)` }}
/>
```
- **What it does:** Fixed atmospheric background visible throughout the entire page
- **Image used:** `desertperp.jpg` (Mars desert environment)
- **Effect:** Stays in place while you scroll, creates parallax effect

### Image #2: Hero Section
```jsx
<div 
  className="guide-hero"
  style={{ backgroundImage: `url(/images/crotasend.jpg)` }}
>
```
- **What it does:** Eye-catching image at the top with the title
- **Image used:** `crotasend.jpg` (Crota-specific imagery)
- **Effect:** Visible in the hero section at the top

---

## 🔍 Visual Breakdown

When you view Crota's End, here's what you'll see:

```
┌─────────────────────────────────────┐
│  HEADER (z-index: 100)              │ ← Navigation, buttons visible
│  Home | Raids | Dungeons | Profile  │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│                                     │
│  HERO IMAGE (crotasend.jpg)         │ ← Crota-specific image
│  z-index: 1                         │
│                                     │
│  ┌───────────────────────────┐     │
│  │  Crota's End              │     │ ← Title overlay
│  │  The Dark Below           │     │
│  └───────────────────────────┘     │
│                                     │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│                                     │
│  CONTENT AREA (z-index: 1)          │
│  [Dark sections with text]          │
│                                     │
│  FULL-PAGE BG (desertperp.jpg)      │ ← Visible through
│  z-index: 0                         │   transparent areas
│  [Shows through content gaps]       │
│                                     │
│  📖 Lore & Background               │
│  [Text content...]                  │
│                                     │
│  ⚔️ Encounters                      │
│  [The Abyss...]                     │
│  [The Bridge...]                    │
│                                     │
│  🎁 Loot & Rewards                  │
│  [Weapon list...]                   │
│                                     │
└─────────────────────────────────────┘
```

---

## 🎬 The Gradient Effect

The full-page background has an automatic gradient overlay:

```css
Top of page:    40% dark (you see more of the image)
     ↓
Middle:         80% dark (balanced visibility)
     ↓
Bottom:         95% dark (text readability)
```

This ensures:
- ✅ The background is visible but not distracting
- ✅ Text remains readable at all times
- ✅ Professional, polished look

---

## 🧪 Test It Now

Visit: `http://localhost:3000/raids/crotas-end` (or your deployed site)

You should see:
1. **Header buttons are clickable** at the very top
2. **Hero image (crotasend.jpg)** in the title section
3. **Full-page background (desertperp.jpg)** showing through as you scroll
4. **Content sections** with dark backgrounds sitting over the full-page image

---

## 🛠️ How to Customize Other Guides

Copy this pattern to any guide:

```jsx
export default function MyRaid() {
  return (
    <main className="page-layout">
      {/* Background image (optional) */}
      <div 
        className="guide-page-background"
        style={{ backgroundImage: `url(/images/my-atmosphere.jpg)` }}
      />
      
      {/* Hero image (required) */}
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/my-hero.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">My Raid Name</h1>
          <p className="guide-subtitle">My Subtitle</p>
        </div>
      </div>
      
      <div className="guide-container">
        {/* Your content */}
      </div>
    </main>
  );
}
```

---

## 📊 Z-Index Layer Diagram

```
Layer 100: Header & Navigation (always on top)
    ↓
Layer 1:   Hero Section + Content
    ↓
Layer 0:   Full-Page Background
    ↓
Background: Solid color (#0a0a0a)
```

Everything works correctly now! 🎉
