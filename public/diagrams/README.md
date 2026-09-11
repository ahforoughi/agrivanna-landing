# Agrivanna diagrams

Seven explanatory diagrams for the rancher-first redesign (AGV-WEB-2026-09).
Hand-authored SVG. No dependencies, no build step, no raster assets.

**Transparent background** — every file draws only its own content, so the page
charcoal and the `.grid-backdrop` show through. They are built for the dark
sections. Do not drop them onto `.section-light`; the text is bone-on-charcoal
and will disappear.

| File | Use on | Canvas |
|---|---|---|
| `01-ranch-os.svg` | Home — "what Agrivanna is" | 960×620 |
| `02-voice-ingestion.svg` | Home pillar 1 · /solutions Module 01 | 960×480 |
| `03-pasture-rotation.svg` | Home pillar 2 · /solutions Module 02 | 960×500 |
| `04-calving-window.svg` | Home pillar 3 · /solutions Module 03 | 960×520 |
| `05-dam-economics.svg` | /solutions Module 03 · /news case study | 960×460 |
| `06-research-basis.svg` | Home science matrix · /news | 960×372 |
| `07-collar-roadmap.svg` | Home hardware-transition module | 960×540 |

## Tokens

Straight from `tailwind.config.ts` / `globals.css`:

| Role | Token | Hex |
|---|---|---|
| Accent / ready / gain | `lime-400` | `#A6FF3D` |
| Accent, second tier | `lime-600` | `#6FD40C` |
| Headings, values | `bone-50` | `#F6F6F4` |
| Body copy | `bone-300` | `#B6B6AE` |
| Captions, citations | `bone-400` | `#8C8C85` |
| Neutral fill (resting) | `ink-700` | `#2B2F36` |
| Text on lime | `ink-950` | `#14161A` |
| Card fill | — | `#F6F6F4` @ 4% |
| Card border | — | `#F6F6F4` @ 10% |

**Two accessory colours** are not in the site palette. A status map and a
gain/loss chart cannot be built from lime and greys alone, so:

| Role | Hex | Notes |
|---|---|---|
| Caution / in progress | `#FFB020` | "grazing now"; carries ink text, never bone |
| Money lost | `#FF9280` | lightened deliberately — `#FF6B5A` misses AAA on charcoal |

Add both to `tailwind.config.ts` if these get reused in components.

Semantics are consistent across all seven: **lime = ready or gained**,
**amber = in progress or caution**, **warm red = money lost**, **ink-700 =
neutral or waiting**. Red is never used for "resting" — resting is the system
working.

Type scale: eyebrow 11.5/700/1.6ls · title 27/600 · subtitle 14.5/400 ·
card title 16.5/600 · body 13–13.5/400 · micro 11–12. Radii: 14 card,
10–12 inner, pill = height/2.

**No translucent accent fills.** A lime or red tint over charcoal turns muddy
olive/brown. Accent chips and bars are outlined instead — keep it that way.

## Implementation

```tsx
<img src="/diagrams/01-ranch-os.svg" alt="" className="w-full h-auto" />
```

Each file carries `<title>` and `<desc>`, so `alt=""` is correct — screen
readers read the embedded description.

**Fonts.** The files ask for `Geist` by name and fall back to `system-ui`.
Because `next/font` mangles the family name (`--font-geist` resolves to
something like `__Geist_abc123`), a CSS variable inside the SVG will not
resolve — an earlier version did that and rendered serif. To get real Geist,
inline the SVG and add one rule:

```css
.diagram svg text { font-family: var(--font-geist), system-ui, sans-serif; }
```

`next/image` requires `dangerouslyAllowSVG` — don't; use `<img>` or inline.

## Mobile

Authored at 960 wide. `01`, `02`, `06` and `07` are three- and four-across
layouts that go unreadable below ~700px — wrap them in an `overflow-x-auto`
scroller with `min-width: 720px`, or commission stacked narrow variants.
`03`, `04` and `05` degrade acceptably to about 480px.

## Contrast

All text pairs clear WCAG AAA (7:1) against `#14161A` at their rendered size.
If you retint anything, re-check: bone text on `#FFB020` fails badly, which is
why Paddock 3 and the TODAY pill carry ink text instead.
