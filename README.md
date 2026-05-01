# Agrivanna Website v2

A fresh rebuild of the Agrivanna site, inspired by [greenlyte.tech](https://www.greenlyte.tech/). Dark editorial look, Geist type, bright lime accent, interactive hero, rotating partners, magazine-grid news, and a roadmap timeline.

Zero styling is carried from the previous site. Only the **functional** pieces (HubSpot portal/form IDs, Vercel caching headers, redirects) were preserved.

---

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v3**
- **Geist** (Vercel variable font — Sans + Mono)
- **motion** / `motion/react` (Framer Motion successor) — used by `VariableProximity` and `Reveal`
- **lucide-react** icons
- **HubSpot Forms** embed (`portalId 342489770`, `formId 7a9b5027-edb2-4e96-96cd-840d6cd13b1d`)
- **Vercel Analytics**

## Run locally

```bash
cd "Agrivanna Website v2"
npm install
npm run dev
```

Open http://localhost:3000.

## Pages

| Route | Purpose |
|---|---|
| `/` | Hero with interactive `VariableProximity` letterform + the problem + pillars + partners marquee + pilot CTA |
| `/solutions` | Three-part system (collar, drone base, PRS software) + impact stats + pricing card |
| `/team` | Cofounders + advisory board with bios |
| `/news` | Magazine grid of press/awards + vertical roadmap timeline |

## Key design choices

### Color palette (from supplied reference image)
- **Ink (backgrounds):** `#050607`, `#0A0B0D`, `#111316`, `#1A1D21`
- **Lime (accent):** `#A6FF3D` · `#8AF51E`
- **Bone (text):** `#F6F6F4`, `#9A9A93`

### Typography
- **Geist Sans 400** for body and headlines (matches inspiration site)
- **Geist Mono** for eyebrows, labels, timecodes
- Tracking is deliberately tight on display headlines (`tracking-tightest` = `-0.04em`)

### Interactions
- **VariableProximity** — the exact component from the brief. Used in the home hero on the word "fence." It lives in `components/VariableProximity.tsx` and uses `motion/react` via `useAnimationFrame` + mouse-position proximity to interpolate font variation settings letter by letter.
- **Reveal** — a lightweight `motion` wrapper for scroll-in staggers across every page.
- **PartnersMarquee** — horizontal rotating slider of trusted partners with transparent logos, hover to pause, edge fades, each logo is a link directly relevant to Agrivanna's relationship (NuWest → nuwestinteriors.com, Plug and Play → LinkedIn cohort post, THRIVE → Academy Cohort VII, Hunter Hub → Liftoff post). Hover reveals a context caption.
- **Navbar** — floating pill navbar that compacts on scroll, blurs, and highlights active route.
- **HubSpotFormPopup** — same portal/form IDs as v1 so leads keep flowing to the existing CRM; completely restyled.

## Code organization (intentionally varied)

Three distinct patterns are used so the codebase doesn't feel templated:

1. **Hooks-heavy interactive** — `Navbar.tsx`, `HubSpotFormPopup.tsx`, `VariableProximity.tsx` (client-side, effects, refs)
2. **Config-object-driven layout** — `Footer.tsx`, `PartnersMarquee.tsx`, `app/solutions/page.tsx` (arrays → map → UI, easy to edit content without touching JSX structure)
3. **Data in `/lib`, UI in `/components`** — `/team`, `/news` pull typed data from `lib/team.ts` and `lib/news.ts` into dedicated card components (`PersonCard.tsx`)

## What carries over from the old site

Only the plumbing:
- HubSpot portal ID `342489770` / form ID `7a9b5027-edb2-4e96-96cd-840d6cd13b1d` / region `na3`
- Calendly demo link
- Vercel caching headers for `/:path*.mp4` and image paths
- Social link URLs (LinkedIn / Instagram / YouTube / Mail)

No CSS, components, or page structure was reused.

## Assets

All imagery lives in `public/`:
- `team/` — founders and advisors
- `products/` — collar, drone, PRS software (transparent backgrounds)
- `partners/` — NuWest, Plug and Play, THRIVE SVG
- `story/` — team ranch shots, pitch comp wins, rancher interviews
- `logos/` — Agrivanna wordmark + mark
- `video/collar-loop.mp4` — hero-ready collar footage

## Things to edit later

- Add a real `favicon.ico`
- Drop in a hero video behind the headline if desired (there's a `public/video/collar-loop.mp4` ready to wire up)
- The advisor photos are grayscale-on-default; if you'd rather they stay color, remove `grayscale` from `PersonCard.tsx`
- Press summaries in `lib/news.ts` were written from the article titles — update the copy if you want specific quotes
