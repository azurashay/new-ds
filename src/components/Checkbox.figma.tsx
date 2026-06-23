/**
 * Code Connect mapping — Checkbox
 * The real Figma component uses a "Checked" variant (True / False), confirmed via
 * the Figma file. TODO before publishing:
 *   1. Replace `node-id=TODO` with the real Figma Checkbox component-set link.
 *   2. If the component also exposes a "Variant" property (Simple/Chip/Card),
 *      confirm the names match below.
 * Publish: see ../../CODE-CONNECT.md
 */
import figma from "@figma/code-connect";
import { Checkbox } from "./Checkbox";

figma.connect(
  Checkbox,
  "https://www.figma.com/design/iDxjKR2GG0z8xE8piANtIp/Folloze-Design-System?node-id=TODO",
  {
    props: {
      label: figma.string("Label"),
      checked: figma.enum("Checked", {
        True: true,
        False: false,
      }),
      variant: figma.enum("Variant", {
        Simple: "simple",
        Chip: "chip",
        Card: "card",
      }),
    },
    example: ({ label, checked, variant }) => (
      <Checkbox variant={variant} checked={checked} label={label} />
    ),
    imports: ['import { Checkbox } from "@folloze/design-system"'],
  },
);
