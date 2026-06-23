/**
 * Code Connect mapping — Select
 * TODO before publishing:
 *   1. Replace `node-id=TODO` with the real Figma Select component link.
 *   2. Confirm Figma property names ("Placeholder", "Value") match.
 * Publish: see ../../CODE-CONNECT.md
 */
import figma from "@figma/code-connect";
import { Select } from "./Select";

figma.connect(
  Select,
  "https://www.figma.com/design/iDxjKR2GG0z8xE8piANtIp/Folloze-Design-System?node-id=TODO",
  {
    props: {
      placeholder: figma.string("Placeholder"),
      value: figma.string("Value"),
    },
    example: ({ placeholder, value }) => (
      <Select placeholder={placeholder} value={value} />
    ),
    imports: ['import { Select } from "@folloze/design-system"'],
  },
);
