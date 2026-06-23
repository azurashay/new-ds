# Folloze Design System — AI Build Rules

> This file is the entry point for any AI tool (Claude Code, etc.) that designs or
> builds Folloze UI. Read it fully before generating any screen, component, or style.
> It is the single source of truth for *how* to use the system. The values live in
> `tokens/design-tokens.json` and `tokens/tokens.css`.

## Source of truth
- **Figma file:** `daRp090YYLurl2btZc8uzE` (Folloze)
  - Typography — node `110-1884`
  - Color Variables — node `110-2141`
  - UI Elements — node `110-2063`
- The Figma color/type **variables are published from an external library**, not local
  to this file. When values change in the library, update `tokens/` here to match.

## Non-negotiable rules
1. **Never hardcode a raw hex, font, or size.** Always use a token from `tokens/`.
   If a value you need doesn't exist as a token, stop and flag it — don't invent one.
2. **Fonts:** headings = `Instrument Sans`. Body / UI text = `Inter`. Nothing else.
   (Roboto and "Relative" were removed — never reintroduce them.)
3. **Color intent — monochrome base, purple accent.** Black/neutral is the default for
   text, backgrounds, and borders. The brand purple (`brand` = `#5959FF`) is an **accent
   only**: primary actions, links, focus, selected states. Don't flood UI with purple.
4. **Semantic over primitive.** Use semantic tokens (`text/*`, `background/*`, `border/*`,
   `link/*`) in components. Use primitives (`primary 300`, `neutral dark`…) only when
   defining new semantic tokens.
5. **Two modes:** every screen must work in **light** and **dark**. See mode mapping in
   `design-system.md`. Don't pin a component to one mode's literal color.
6. **Match the existing component states** in the UI Elements frame (default / hover /
   focus / disabled / error). Don't ship a component without its states.

## When you design a screen
1. Read this file + `design-system.md` + `tokens/design-tokens.json`.
2. Build only from existing tokens and component patterns.
3. If something is missing, add it to `decisions.md` as an open question — don't guess.
4. Keep accessibility in mind: text contrast ≥ 4.5:1, focus states visible, hit areas ≥ 44px.

## Files in this folder
- `CLAUDE.md` — this file (rules)
- `src/components/` — **the React component library** (TypeScript). One file per component:
  Button, Tabs, Input, Textarea, Select, Tag, Checkbox, Radio, Toggle, Icon. `index.ts` is
  the barrel export. These are the source of truth for component code — pixel-perfect to the
  Figma DS file `iDxjKR2GG0z8xE8piANtIp`. Code Connect will map Figma components to these.
- `src/styles/components.css` — component styles. Every value references a token, no raw hex.
- `index.html` + `src/preview/` — the live React preview. Run `npm run dev` to see every
  component, or `npm run build` for a static bundle in `dist/`.
- `reference.html` — the original static (HTML/CSS) showcase, kept as a visual reference.
- `design-system.md` — human-readable guide: tokens with intent, modes, components
- `tokens/design-tokens.json` — machine-readable tokens
- `tokens/tokens.css` — CSS custom properties (consumed by the components)
- `decisions.md` — decision log + open questions

_Status: v0.2 — tokens complete + React component library built (9 components, light mode).
Next: dark-mode component states, then Figma Code Connect mapping._
