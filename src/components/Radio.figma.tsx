/**
 * Code Connect mapping — Radio
 * TODO before publishing:
 *   1. Replace `node-id=TODO` with the real Figma Radio component-set link.
 *   2. Confirm Figma property names ("Checked", "Variant", "Label") match.
 * Publish: see ../../CODE-CONNECT.md
 */
import figma from "@figma/code-connect";
import { Radio } from "./Radio";

figma.connect(
  Radio,
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
        Badge: "badge",
        Card: "card",
      }),
    },
    example: ({ label, checked, variant }) => (
      <Radio name="group" variant={variant} checked={checked} label={label} />
    ),
    imports: ['import { Radio } from "@folloze/design-system"'],
  },
);
