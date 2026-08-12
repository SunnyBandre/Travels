# Al-Afiyah Travels — Setup

You're on **Tailwind v4** (installed via the official Vite guide), which is
CSS-first — there's no `tailwind.config.js` to write. All theme customization
(colors, fonts) lives directly in `src/index.css` via an `@theme` block, and
Vite picks it up automatically through the `@tailwindcss/vite` plugin you
already installed.

## 1. Copy files into your Vite project

Drop these into your existing `src/` folder (overwrite `App.jsx` and `index.css`):

```
src/App.jsx
src/index.css        → replace yours with this one entirely
src/components/*.jsx
src/data/content.js
vite.config.js        → confirm it matches (see below)
```

## 2. Confirm `vite.config.js`

Make sure it includes the Tailwind plugin (this should already be the case
if you followed the official guide):

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

## 3. Theme (colors + fonts)

`src/index.css` defines a custom `gold`/`cream` color palette and two font
families inside `@theme { ... }`. Tailwind auto-generates utility classes
from these — e.g. `--color-gold-600` becomes `bg-gold-600` / `text-gold-600`,
and `--font-heading` becomes `font-heading`. No JS config needed.

## 4. Fonts

`src/index.css` imports **Cinzel** (headings) and **Oswald** (nav/body/buttons)
from Google Fonts — these were my best visual match for your screenshot.
If your brand uses different fonts, tell me the names and I'll swap:

- the `@import url(...)` line at the top of `src/index.css`
- the `--font-heading` / `--font-heading-alt` values in the `@theme` block

No other files need to change.

## 5. Images

Every image is a placeholder Unsplash URL, centralized in `src/data/content.js`
so you don't have to touch any component to swap them. Replace with your own
photos (either real URLs or `import img from "../assets/..."` + use the
imported variable instead of a string).

## 6. Run it

```
npm install
npm run dev
```

## Structure

- `Navbar` — logo, links, mobile menu, Book Now button
- `Hero` — headline over the plane/sunset photo
- `SectionBanner` — reusable solid-gold heading strip (Popular Tours, Our
  Travel Services, Explore More, etc.)
- `TourPromo` — reusable banner-image + title + blurb + CTA block (used for
  Umrah, Dubai, Yacht, Aviation)
- `KashmirSection` — the labeled 20-photo gallery + CTA
- `ServicesSection` — alternating image/text rows (Hotel, Car Rental, Visa,
  Flights, Packages, Documentation)
- `Introduction` — dark gold band with destination photo grid + copy
- `ExploreMore` — Domestic / International tour cards
- `Community` — social icons (Instagram/WhatsApp/Facebook, inline SVG, no
  external icon library needed)
- `Contact` — feedback form + phone/mail cards
- `CTABanner` — "Message us on WhatsApp" strip
- `Footer` — thank-you + link columns

Everything is responsive (stacks on mobile, grids on `sm`/`md`+), and all
copy lives in `src/data/content.js` so you can edit text without touching
any JSX.
