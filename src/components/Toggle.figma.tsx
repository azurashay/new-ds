/**
 * Code Connect mapping — Toggle
 * TODO before publishing:
 *   1. Replace `node-id=TODO` with the real Figma Toggle component-set link.
 *   2. Confirm Figma property names ("Checked", "Variant", "Label") match.
 * Publish: see ../../CODE-CONNECT.md
 */
import figma from "@figma/code-connect";
import { Toggle } from "./Toggle";

figma.connect(
  Toggle,
  "https://www.figma.com/design/iDxjKR2GG0z8xE8piANtIp/Folloze-Design-System?node-id=TODO",
  {
    props: {
      label: figma.string("Label"),
      checked: figma.enum("Checked", {
        True: true,
        False: false,
      }),
      variant: figma.enum("Variant", {
        Inline: "inline",
        Row: "row",
      }),
    },
    example: ({ label, checked, variant }) => (
      <Toggle variant={variant} checked={checked} label={label} />
    ),
    imports: ['import { Toggle } from "@folloze/design-system"'],
  },
);
