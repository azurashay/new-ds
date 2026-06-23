/**
 * Code Connect mapping — Textarea
 * TODO before publishing:
 *   1. Replace `node-id=TODO` with the real Figma Text area component link.
 *   2. Confirm Figma property names ("Label", "Placeholder") match.
 * Publish: see ../../CODE-CONNECT.md
 */
import figma from "@figma/code-connect";
import { Textarea } from "./Textarea";

figma.connect(
  Textarea,
  "https://www.figma.com/design/iDxjKR2GG0z8xE8piANtIp/Folloze-Design-System?node-id=TODO",
  {
    props: {
      label: figma.string("Label"),
      placeholder: figma.string("Placeholder"),
    },
    example: ({ label, placeholder }) => (
      <Textarea label={label} placeholder={placeholder} />
    ),
    imports: ['import { Textarea } from "@folloze/design-system"'],
  },
);
