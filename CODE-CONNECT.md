# Code Connect — setup & publish

Code Connect links each Figma component to its real React code, so when someone
(or an AI agent) selects a component in Figma, they get the exact Folloze code —
concise and production-accurate — instead of generic CSS.

The mapping files live next to each component: `src/components/*.figma.tsx`.

## ⚠️ Prerequisite — not yet met
Code Connect requires a **Figma Organization or Enterprise plan** with a **Dev or
Full seat**. The current account (shay@folloze.com) is on Pro/Starter, so
publishing is blocked until the plan is upgraded. Everything below is ready to run
the moment that happens.

## To finish each mapping (2 small edits per file)
For every `src/components/*.figma.tsx`:
1. **Set the real Figma link.** In Figma, right-click the component (or component
   set) → **Copy link**, and paste it in place of the `…?node-id=TODO` URL.
2. **Verify the Figma property names.** The strings like `figma.enum("Variant", …)`
   must match the component's actual property names (case-sensitive). Adjust if needed.

(Or just send the component links to Claude and it will fill them in.)

## Publish (after the plan is upgraded)
1. Create a Figma personal access token with the **Code Connect write** scope:
   Figma → Settings → Security → Personal access tokens.
2. Set it in your shell:
   ```bash
   export FIGMA_ACCESS_TOKEN="figd_xxx"
   ```
3. Validate the files (no publish):
   ```bash
   npx figma connect parse
   ```
4. Publish:
   ```bash
   npx figma connect publish
   ```

## Files
- `figma.config.json` — Code Connect config (parser: react, include glob, label)
- `src/components/*.figma.tsx` — one mapping per component
- The intended import shown to developers is `@folloze/design-system` — update this
  in each file's `imports` if the package is published under a different name.
