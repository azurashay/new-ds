/**
 * Code Connect mapping — Input
 * TODO before publishing:
 *   1. Replace `node-id=TODO` with the real Figma Input component-set link.
 *   2. Confirm Figma property names ("Label", "Placeholder", "Disabled", "State")
 *      match the component. Map error/icon properties here if they exist.
 * Publish: see ../../CODE-CONNECT.md
 */
import figma from "@figma/code-connect";
import { Input } from "./Input";

figma.connect(
  Input,
  "https://www.figma.com/design/iDxjKR2GG0z8xE8piANtIp/Folloze-Design-System?node-id=TODO",
  {
    props: {
      label: figma.string("Label"),
      placeholder: figma.string("Placeholder"),
      disabled: figma.boolean("Disabled"),
    },
    example: ({ label, placeholder, disabled }) => (
      <Input label={label} placeholder={placeholder} disabled={disabled} />
    ),
    imports: ['import { Input } from "@folloze/design-system"'],
  },
);
