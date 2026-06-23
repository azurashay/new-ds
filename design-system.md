# Folloze Design System — Guide

Human-readable reference. Values live in `tokens/`. Rules live in `CLAUDE.md`.
Version 0.1 — colors + typography complete.

---

## 1. Typography

| Font | Use for |
|------|---------|
| **Instrument Sans** | All headings (H1–H6), taglines |
| **Inter** | All body and UI text (labels, inputs, buttons, captions) |

### Heading scale (Bold 700)
| Level | Desktop | Mobile | Line height |
|-------|---------|--------|-------------|
| H1 | 56px | 40px | 120% |
| H2 | 48px | 36px | 120% |
| H3 | 40px | 32px | 120% |
| H4 | 32px | 24px | 130% / 140% |
| H5 | 24px | 20px | 140% |
| H6 | 20px | 18px | 140% |
| Tagline | 16px (SemiBold) | — | 150% |

### Body scale (Inter, 150% line height)
Large 20 · Medium 18 · Regular 16 · Small 14 · Tiny 12
Weights: Light 300 · Normal 400 · Medium 500 · Semi Bold 600 · Bold 700 · Extra Bold 800

---

## 2. Color — intent

**Principle: monochrome base, purple accent.** Default everything to black/neutral.
Use the brand purple only to draw the eye to what matters.

### When to use each semantic token
| Token | Value | Use for |
|-------|-------|---------|
| `text/black` | #030303 | Default body & heading text |
| `text/grey` | #AAAAAA | Secondary / muted text, placeholders |
| `text/white` | #FFFFFF | Text on dark/black backgrounds |
| `text/brand` | #5959FF | Accent text, active/selected labels |
| `background/white` | #FFFFFF | Default page surface (light mode) |
| `background/grey` | #EEEEEE | Subtle section / card fill |
| `background/black` | #030303 | Inverse surfaces, dark mode base |
| `background/brand` | #5959FF | Primary buttons, key accents |
| `background/brand-dark` | #0A1230 | Deep brand surfaces, hero backgrounds |
| `border/black` | #030303 | Default borders (light mode) |
| `border/grey` | #AAAAAA | Subtle dividers, input borders |
| `border/brand` | #5959FF | Focus / selected outline |
| `link/black` | #030303 | Default links |
| `link/brand` | #5959FF | Emphasized links |

### Accent ramp (purple)
`primary-100 #ADA8FF` → `200 #8280FF` → **`300 #5959FF` (the brand)** → `400 #4710C6` → `500 #270788`.
Use 300 as the action color; 400/500 for hover/pressed.

### System colors — full 100→500 ramps
Each status has a 5-step ramp (100 lightest → 500 darkest), same convention as the brand ramps.
Usage: **100** = background/surface, **300** = bright/illustrative, **400** = main fill,
**500** = text/icon on the light background.

| Status | 100 | 200 | 300 | 400 | 500 |
|--------|-----|-----|-----|-----|-----|
| Success (green) | `#ECFDF3` | `#A6F4C5` | `#32D583` | `#12B76A` | `#027A48` |
| Error (red) | `#FEF3F2` | `#FECDCA` | `#F97066` | `#F04438` | `#B42318` |
| Info (blue) | `#EFF8FF` | `#B2DDFF` | `#53B1FD` | `#2E90FA` | `#175CD3` |
| Warning (amber) | `#FFFAEB` | `#FEDF89` | `#FDB022` | `#F79009` | `#B54708` |

Typical pattern: `text/icon = 500` on `background = 100` (e.g. a success toast = `#027A48` on `#ECFDF3`).

---

## Spacing & Radius

**Spacing** — 4px grid: `space-1 4` · `space-2 8` · `space-3 12` · `space-4 16` · `space-5 24` ·
`space-6 32` · `space-7 48` · `space-8 64` (px).

**Radius**: `xs 4` (small boxes, thumbnails) · `sm 8` (inputs, cards, chips) · `md 12` ·
`lg 16` · `xl 24` · `full 999` (pill buttons, switches).

**Shadows** — navy-tinted (`rgba(10,18,48)`), 5 steps each. **Drop** `xs → xl` for elevation
(cards, dropdowns, modals, popovers). **Inner** `xs → xl` for recessed surfaces (pressed states,
wells, inset fields). Use `--fz-shadow-{step}` and `--fz-shadow-inner-{step}`.

---

## 3. Light & dark modes

Every screen ships in both. The semantic tokens flip between modes:

| Role | Light | Dark |
|------|-------|------|
| Primary background | white | black |
| Secondary background | neutral lightest | neutral darker |
| Primary text | black | white |
| Secondary text | neutral light | neutral light |
| Primary border | black | white |
| Brand accent | #5959FF | #5959FF (unchanged) |

See `tokens/tokens.css` — light is `:root`, dark is `[data-theme="dark"]`.

---

## 4. Components (in Figma UI Elements frame `110-2063`)

Built so far: Buttons, Text inputs, Search, Prefix/suffix inputs, Text area, Select,
Tags, Checkboxes, Radios, Toggles — each in **light + dark**.

Each component documents its states (default / hover / focus / disabled / error).
Detailed per-component specs (sizes, padding, radius) will be added here as we extract them.

### Buttons
- **Shape:** full pill — `border-radius: 999px`. Font: Inter Medium (500), 15px. Padding 14×22 (sm 10×16, lg 16×26).
- **Primary:** bg `#0A1230` (brand-dark), white text → hover `#142766`. Dark mode: white pill, black text.
- **Outline:** transparent, 1px hairline border (`border/grey` light, 20% white in dark), text `#0A1230` → fills on hover.
- **Ghost / text:** no fill, no border, primary text color; underline on hover. Used for inline links like "See campaigns in action →".
- **Brand (accent):** purple `#5959FF` fill — reserve for the single most important action.
- Arrow (`→`) is part of the label, trailing.
- Live reference: `index.html`.

---

## Changelog
- **v0.1** — Extracted full color palette (primitive + semantic) and typography scale from
  Figma. Fixed font inconsistency: replaced Roboto → Inter (body) and removed stray
  "Relative" font → Instrument Sans (203 layers across 3 frames).
