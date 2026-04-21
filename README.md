# The Virtue Expedition — Widgets

Interactive widgets embedded in Canvas LMS pages for The Virtue Expedition curriculum (Grades 3–5).

## What's in this repo

```
virtue-expedition/
├── README.md                ← you are here
├── index.html               ← gallery page: previews all widgets
├── .gitignore               ← keeps preview files out of git
├── journey-map/
│   └── index.html           ← widget 1: landscape with 7 landmarks
├── virtue-header/
│   └── index.html           ← widget 2: activity title card
├── passage-stamp/
│   └── index.html           ← widget 3: celebratory reward moment
├── up-next/
│   └── index.html           ← widget 4: next-station preview card
└── shared/
    ├── tokens.css           ← design tokens (colors, fonts) used by all widgets
    └── virtues.js           ← single source of truth for virtue metadata
```

Each widget folder with an `index.html` is a standalone piece that can be embedded in Canvas via an iframe.

---

## Setting up GitHub Pages (one-time)

1. Push this folder to a new public GitHub repo, e.g. `virtue-expedition`
2. Go to **Settings → Pages**
3. Under "Source", choose **Deploy from a branch** → branch `main` → folder `/ (root)` → Save
4. GitHub will give you a URL like `https://YOUR_USERNAME.github.io/virtue-expedition/`
5. Wait ~1 minute for the first deploy

Every push to `main` after this updates the site automatically.

---

## Widget 1: The Journey Map

**Live URL:** `https://YOUR_USERNAME.github.io/virtue-expedition/journey-map/`

Illustrated landscape showing all seven virtues as landmarks along a trail. Current virtue gets a planted flag and glow. Completed virtues show a green checkmark.

### URL parameters

| Parameter   | Values                         | Default    | Example                      |
|-------------|--------------------------------|------------|------------------------------|
| `current`   | virtue key                     | `courage`  | `?current=honesty`           |
| `completed` | comma-separated virtue keys    | *(empty)*  | `?completed=courage,honesty` |
| `grade`     | `3`, `4`, or `5`               | `4`        | `?grade=4`                   |

**Virtue keys:** `courage`, `honesty`, `responsibility`, `courtesy`, `service`, `perseverance`, `selfgovt`
(Also accepts `self-government`, `self-govt`, `selfgovernment` for convenience.)

### Embed code

```html
<iframe
  src="https://YOUR_USERNAME.github.io/virtue-expedition/journey-map/?current=courage"
  width="100%" height="360" frameborder="0" scrolling="no"
  style="display:block;border:0;max-width:820px;margin:0 auto 20px;">
</iframe>
```

---

## Widget 2: The Virtue Header

**Live URL:** `https://YOUR_USERNAME.github.io/virtue-expedition/virtue-header/`

The archway title card that sits at the top of each activity, below the Journey Map. Each virtue has its own faint background illustration (lantern, scale, oak, arch, bridge, mountain, compass) to match its landmark on the map.

### URL parameters

| Parameter  | Values                          | Default                 | Example                                  |
|------------|---------------------------------|-------------------------|------------------------------------------|
| `virtue`   | virtue key                      | `courage`               | `?virtue=honesty`                        |
| `station`  | `1`–`7`                         | `1`                     | `?station=5`                             |
| `headline` | URL-encoded custom headline     | *(auto-generated)*      | `?headline=What+is+courage%3F`           |
| `tagline`  | URL-encoded custom tagline      | *(uses virtue default)* | `?tagline=A+girl+must+cross...`          |

If you omit `headline`, it defaults to `"[Station Name]: [Virtue Name]"` — e.g., "The Invitation: Courage".
If you omit `tagline`, it uses the virtue's standard tagline.

### Embed code

```html
<iframe
  src="https://YOUR_USERNAME.github.io/virtue-expedition/virtue-header/?virtue=courage&station=1&headline=What%20is%20courage%2C%20really%3F"
  width="100%" height="260" frameborder="0" scrolling="no"
  style="display:block;border:0;max-width:820px;margin:0 auto 20px;">
</iframe>
```

### URL encoding tips

URL parameters need to be URL-encoded. The main gotchas:
- Space → `%20` or `+`
- `?` → `%3F`
- `,` → `%2C`
- `'` (straight apostrophe) → `%27`
- `"` (straight quote) → `%22`
- `'` (curly apostrophe) → `%E2%80%99`

Easiest: open the gallery page, find your desired state, and copy the URL from the iframe's `src` in the browser inspector. It'll already be encoded.

---

## Widget 3: The Passage Stamp

**Live URL:** `https://YOUR_USERNAME.github.io/virtue-expedition/passage-stamp/`

The reward moment at the end of each completed station. Features a gold gradient panel with a seal, pulsing glow ring, and starburst rays. The seal animates in with a small bounce on load.

### URL parameters

| Parameter  | Values     | Default    | Example             |
|------------|------------|------------|---------------------|
| `virtue`   | virtue key | `courage`  | `?virtue=honesty`   |
| `station`  | `1`–`7`    | `1`        | `?station=3`        |

Text adjusts automatically:
- Stations 1–6: "Your [ordinal] passage stamp is earned!"
- Station 7: "You have earned the Seal of [Virtue]!"

Remaining-stations subline also adjusts ("Six more stations...", "One more station...", "All seven stations complete.").

### Embed code

```html
<iframe
  src="https://YOUR_USERNAME.github.io/virtue-expedition/passage-stamp/?virtue=courage&station=1"
  width="100%" height="180" frameborder="0" scrolling="no"
  style="display:block;border:0;max-width:820px;margin:0 auto 20px;">
</iframe>
```

---

## Widget 4: Up Next

**Live URL:** `https://YOUR_USERNAME.github.io/virtue-expedition/up-next/`

The preview card at the bottom of every activity page (except the final one per virtue) that teases the next station. Shows the virtue's landmark as a small illustrated scene, with the next activity's title, a one-sentence hook, and a Continue button.

### URL parameters

| Parameter     | Values                            | Default                 | Example                              |
|---------------|-----------------------------------|-------------------------|--------------------------------------|
| `virtue`      | virtue key                        | `courage`               | `?virtue=honesty`                    |
| `nextStation` | `2`–`7`                           | `2`                     | `?nextStation=3`                     |
| `headline`    | URL-encoded next activity title   | *(auto-generated)*      | `?headline=The+Counted+Coins`        |
| `tagline`     | URL-encoded one-sentence hook     | *(uses virtue default)* | `?tagline=A+girl+finds+two+extra...` |
| `href`        | optional URL for Continue button  | `#`                     | `?href=https://example.com/page2`    |

If you omit `headline`, it defaults to `"[Station Name]: [Virtue Name]"`.
If you omit `tagline`, it uses a generic "Continue to the next station of [Virtue]."
If you omit `href`, the button is a placeholder (`#`). In Canvas, you can either set this to your next page's URL or just leave it as `#` and let students use Canvas's built-in Next button.

### Embed code

```html
<iframe
  src="https://YOUR_USERNAME.github.io/virtue-expedition/up-next/?virtue=courage&nextStation=2&headline=The%20Lamp-Lighter%E2%80%99s%20Daughter&tagline=A%20storm%20is%20rolling%20in..."
  width="100%" height="200" frameborder="0" scrolling="no"
  style="display:block;border:0;max-width:820px;margin:0 auto 20px;">
</iframe>
```

---

## Editing widgets

All widgets are single-file `index.html` with inline CSS/JS, plus shared resources in `shared/`.

**To change colors, fonts, or any design token:** edit `shared/tokens.css`.
**To change virtue names, taglines, or colors:** edit `shared/virtues.js`.

Every widget picks up changes automatically on next load.

**To add a new widget:** create a new folder with an `index.html`, link to `../shared/tokens.css` and `../shared/virtues.js`, push to GitHub. Its URL becomes `/your-widget-name/`.

---

## Browser support

Modern evergreen browsers (Chrome, Safari, Firefox, Edge from 2020 onward). IE11 is not supported.
