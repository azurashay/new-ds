# Design System — Decision Log

Append-only record of choices and open questions. Newest on top.

## Decisions
- **2026-06-17 — My Boards redesign v2 (frontend-design skill).** Reworked per inspiration
  (Untitled UI / VitalFlow): white canvas (not grey), strong hierarchy with a KPI row (new
  Card/Stat component — icon chip + value + label + trend Tag, swappable icon), big header,
  modern Card/Board (soft shadow, light tinted thumbnail, muted label), DS-only. Note: variable
  `brand/primary-100` (VariableID 2:5) misrenders as black when bound to a fill — avoided it for
  thumbnails (used secondary/tertiary-100). Worth investigating/recreating that primitive.
- **2026-06-17 — My Boards screen redesign + Card/Avatar components.** Added DS components
  Avatar (initials, Initials text prop) and Card/Board (brand-subtle thumbnail + Online Tag
  overlay + doc/views stats + owner Avatar). Built a clean "Screen / My Boards" on a Screens
  page (inspiration: Untitled UI dashboard): white top bar (logo + DS underline Tabs +
  help/bell/avatar, bottom border), white side nav (right border, My Boards selected subtle),
  grey main with title + DS Buttons (Add Channel/Add Board/Generate Board), DS segmented Tabs
  filter, and a 3-col grid of Card instances. Composed only from DS components + variables.
- **2026-06-17 — Semantic text scale fixed + token-only rule.** `text/secondary` remapped to
  `#666` (neutral/base) for readable muted text; added `text/placeholder` (#aaa, neutral/light)
  for placeholders/disabled. Menu + dropdown text now uses semantic text tokens only (no raw
  primitives); Input/Select placeholders moved to text/placeholder. Standing rule: bind every
  element property to a token (semantic where one exists). `primary-50` (#EEEDFF) was added by
  Claude (not in the source Figma library) to back `background/brand-subtle` for the subtle
  selected state — Shay OK'd keeping it. Local token files synced.
- **2026-06-16 — Dropdown/Menu components.** On a Menu page: "Menu / Single select" (search +
  rich rows: Material icon-in-square + title + description + "Coming soon" badge + selected
  state with chevron) and "Menu / Multi select" (search + Select-all with indeterminate
  checkbox + count + checkbox rows with colored initial avatars + name/email). Checkboxes
  checked = brand purple + white check; selected rows = background/brand-subtle. Subtle CTA
  footers added (single: "Explore all →" brand link; multi: Clear + "Apply · N" brand-subtle
  pill). Select-all/divider/list grouped in one body container for consistent 4px rhythm.
  Updated: CTAs now use real DS Button instances (Outline/Ghost/Brand); added a CTA below the
  search in both ("New product" / "Invite member", Outline full-width).
- **2026-06-16 — Navigation systems + icon library decision.** Built two sidebars on a
  Navigation page: Sidebar/Expanded (logo, collapse btn, items with icons/badges/expandable
  groups, active states, sub-items) and Sidebar/Collapsed (icon-rail + black tooltip + floating
  flyout submenu = Nav/Flyout component). All token-bound. Selected state uses the brand
  purple (background/brand + white text/icon); expanded-parent uses purple text only; logo
  removed from the top per Shay. **Revised:** selection is now SUBTLE — added primitive
  `primary-50` (#EEEDFF) + semantic `background/brand-subtle`; selected nav = subtle purple bg
  + brand-purple text/icon (not solid purple). Material icon library NOW connected to the
  DS file: "Material Design Icons (Community) (Copy)" (team library, 1,915 icons, all styles).
  Button Icon-swap menus surface all Material icons. Navigation sidebars (Expanded + Collapsed)
  rebuilt to use Material library icon instances (home/person/description/calendar_today/pie_chart/
  campaign + chevrons), recolored via vector-fill override (brand purple selected, neutral default). (MCP search_design_system index lagged
  right after publish, but the in-app swap works immediately.) Added nav icons (pie-chart,
  description, local-offer, chevron-left, expand-less) → 22 local icons total. Decision on full
  icon set: connect the official Material icon library (UI-only enable step pending from Shay);
  local set covers common needs meanwhile. Note: DS file already subscribes to team libraries
  "Folloze App DS" and "live board DS".
- **2026-06-16 — Icons + Button icon slots + Underline tabs.** Added an Icons page with 17
  Google Material Symbol vector components (drawn from official paths, no external file needed).
  Button rebuilt: every variant has Leading/Trailing icon BOOLEAN toggles + Icon left/right
  INSTANCE_SWAP (swap to any icon); icon color matches the button style. Tab extended to
  Style (Segmented/Underline) × State (Default/Active) = 4 variants.
- **2026-06-16 — Design System built in Figma (new file).** File `iDxjKR2GG0z8xE8piANtIp`
  in the "new ds" project (folloze team). From scratch, existing files untouched.
  Foundations: 4 variable collections (Primitives 46 / Semantic 24 / Spacing 8 / Radius 6),
  23 text styles, 10 effect styles — all scoped + code-syntaxed + aliased. Components (variant
  sets, variable-bound): Button (12), Input (3), Tag (5), Checkbox (2), Radio (2), Toggle (2),
  Select (2), Tab (2 + segmented example). Button padding aligned to the 4px spacing grid
  (12×24 etc.) rather than the HTML's 14×22, so it binds to tokens. A stray earlier copy was
  created in the wrong team and must be deleted manually (MCP can't delete files).
- **2026-06-16 — Shadows defined: drop + inner, 5 steps each.** `xs/sm/md/lg/xl` for both,
  navy-tinted `rgba(10,18,48)` to harmonize with the brand. Drop = elevation; inner = recessed.
  _Why:_ needed depth tokens for cards/modals/pressed states; navy tint keeps shadows on-brand
  vs. a neutral grey.
- **2026-06-16 — System colors expanded to 4 full ramps + spacing/radius tokens added.**
  Success, Error each grown from 2 values to a 5-step ramp (100→500); added **Info** (blue,
  azure `#2E90FA`) and **Warning** (amber `#F79009`) ramps to match. Spacing = 4px grid
  (space-1…8: 4/8/12/16/24/32/48/64). Radius = xs 4 / sm 8 / md 12 / lg 16 / xl 24 / full 999.
  _Why:_ status states and layout rhythm need a complete, consistent token set for AI builds.
- **2026-06-16 — Consolidated to one visual document.** All component showcases merged into
  `index.html` (light only, no dark-mode toggle per Shay); separate `components/*.html` removed.
- **2026-06-16 — Tabs added (no Figma source).** Designed in-system (in `index.html`):
  segmented (pill container, active = black pill light / white pill dark) + underline (active =
  black 2px underline, bold). _Why:_ Folloze needs tabs but none exist in Figma yet; modeled on
  the existing pill-chip family. TODO: build the matching component in Figma.
- **2026-06-16 — Control "selected/on" color = black (light) / white (dark).** Checkboxes,
  radios, pill chips, toggles, and tab active states all use black/white — NOT the navy pill.
  The navy `#0A1230` is reserved exclusively for the primary button. _Why:_ verbatim from the
  Figma Style Guide component sets.
- **2026-06-16 — Primary button = deep-navy pill.** `border-radius:999px`, bg `#0A1230`
  (secondary-500), white text, Inter Medium 15px, padding 14×22. Dark mode → white pill,
  black text. Outline = transparent + hairline border; ghost = text only. _Why:_ matches the
  real Figma component; navy pill reads more premium than a square black button. Brand purple
  stays reserved for the single most important accent action.
- **2026-06-16 — Fonts locked:** Instrument Sans (headings) + Inter (body). Roboto and
  "Relative" removed entirely. _Why:_ consistency; Roboto/Relative were leftovers from a
  purchased UI kit, not the Folloze brand.
- **2026-06-16 — Color intent: monochrome base, purple accent.** Black/neutral is the
  default; brand purple (`primary-300 #5959FF`) is reserved for accents and primary
  actions. _Why:_ Shay's call — cleaner, more premium than purple-heavy UI.
- **2026-06-16 — Single source of truth = Figma file `daRp090YYLurl2btZc8uzE`.** Tokens
  mirrored here in `tokens/` for AI tools to consume.

## Open questions / TODO
- [ ] **Variable library location** — color/type variables are published from an external
      Figma library, not local to this file. Where does that library live? Who owns it?
- [ ] **Naming mismatch** — semantic variable names in Figma are `primary/secondary/tertiary/
      alternate`, but the doc labels are `white/grey/dark/black/brand`. Pick one naming and
      align Figma + tokens.
- [ ] **Spacing / radius / elevation** — not yet defined as tokens. Extract from component
      padding, gaps, and corner radii in the UI Elements frame.
- [ ] **Dark mode semantic tokens** — currently single-value in Figma; the dark mappings in
      `tokens.css` are inferred. Confirm against the dark UI Elements column and, ideally,
      add a real "dark" mode to the Figma variable collection.
- [ ] **Component specs** — document per-component sizes/states for handoff to Claude Code.
