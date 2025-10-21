# Guide Image Customization Reference

## Two-Image System

Each raid/dungeon guide can now have **TWO customizable images**:

### 1️⃣ Full-Page Background (Optional)
- **Purpose:** Atmospheric background visible throughout the entire scrollable page
- **Behavior:** Fixed in place (parallax effect) while content scrolls over it
- **Best for:** Environment shots, skyboxes, atmospheric imagery
- **Class:** `guide-page-background`

### 2️⃣ Hero Image (Required)
- **Purpose:** Eye-catching image in the title section at the top
- **Behavior:** Visible in the hero section, covers ~50% of viewport height
- **Best for:** Boss images, encounter screenshots, iconic raid moments
- **Class:** `guide-hero`

---

## How to Use

### Option A: Hero Image Only (Default)
```jsx
export default function MyRaid() {
  return (
    <main className="page-layout">
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/my-hero.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">My Raid Name</h1>
          <p className="guide-subtitle">Subtitle</p>
        </div>
      </div>
      {/* Rest of content */}
    </main>
  );
}
```

### Option B: Both Images (Full Experience)
```jsx
export default function MyRaid() {
  return (
    <main className="page-layout">
      {/* Full-page background */}
      <div 
        className="guide-page-background"
        style={{ backgroundImage: `url(/images/my-background.jpg)` }}
      />
      
      {/* Hero section */}
      <div 
        className="guide-hero"
        style={{ backgroundImage: `url(/images/my-hero.jpg)` }}
      >
        <div className="guide-hero-overlay">
          <h1 className="guide-title">My Raid Name</h1>
          <p className="guide-subtitle">Subtitle</p>
        </div>
      </div>
      {/* Rest of content */}
    </main>
  );
}
```

---

## Visual Effect

```
┌─────────────────────────────────┐
│  HERO IMAGE (my-hero.jpg)       │ ← Top section with title
│  [Title and Subtitle Here]      │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│                                 │
│  FULL-PAGE BG (my-background)   │ ← Fixed, visible as you scroll
│  shows through here             │
│                                 │
│  [Guide Content Sections]       │
│  • Lore                         │
│  • Encounters                   │
│  • Loot                         │
│  • Tips                         │
│                                 │
│  Background stays fixed,        │
│  content scrolls over it        │
│                                 │
└─────────────────────────────────┘
```

---

## Gradient Overlay

The system automatically applies a gradient to the full-page background:
- **Top:** 40% opacity (lighter, shows more image)
- **Middle:** 80% opacity (balanced)
- **Bottom:** 95-100% opacity (darker, better text readability)

This ensures text remains readable no matter what background you use.

---

## Image Recommendations

### Full-Page Background:
- **Resolution:** 1920x1080 or higher
- **Style:** Atmospheric, not too busy
- **Examples:** 
  - Starry sky from the raid location
  - Distant landscape
  - Environmental ambiance
  - Abstract patterns

### Hero Image:
- **Resolution:** 1920x1080 or higher
- **Style:** High-impact, iconic moment
- **Examples:**
  - Boss encounter screenshot
  - Raid entrance
  - Iconic location within raid
  - Dramatic action shot

---

## Examples from Existing Guides

### Crota's End (Current Setup):
```jsx
// Full-page background: Desert environment
<div className="guide-page-background"
     style={{ backgroundImage: `url(/images/desertperp.jpg)` }} />

// Hero image: Crota's End specific
<div className="guide-hero"
     style={{ backgroundImage: `url(/images/crotasend.jpg)` }} />
```

### Vault of Glass (Single Image):
```jsx
// Only hero image, no full-page background
<div className="guide-hero"
     style={{ backgroundImage: `url(/images/vaultofglass2.jpg)` }} />
```

---

## Quick Tips

✅ **DO:**
- Use high-quality images (1920x1080+)
- Test on both desktop and mobile
- Keep full-page backgrounds subtle
- Use dramatic hero images

❌ **DON'T:**
- Use extremely bright full-page backgrounds (text becomes unreadable)
- Use the same image for both (defeats the purpose)
- Use low-resolution images (they'll look pixelated)

---

## Removing Full-Page Background

To remove the full-page background from a guide, simply delete or comment out the `guide-page-background` div:

```jsx
// Remove this:
<div className="guide-page-background" style={{ backgroundImage: `url(...)` }} />

// Keep this:
<div className="guide-hero" style={{ backgroundImage: `url(...)` }} />
```

The guide will fall back to a solid dark background.
