/**
 * Code Connect mapping — Tag
 * TODO before publishing:
 *   1. Replace `node-id=TODO` with the real Figma Tag component link.
 *   2. Confirm Figma property names ("Variant", "Label") match the component.
 * Publish: see ../../CODE-CONNECT.md
 */
import figma from "@figma/code-connect";
import { Tag } from "./Tag";

figma.connect(
  Tag,
  "https://www.figma.com/design/iDxjKR2GG0z8xE8piANtIp/Folloze-Design-System?node-id=TODO",
  {
    props: {
      label: figma.string("Label"),
      variant: figma.enum("Variant", {
        Default: "default",
        Brand: "brand",
        Success: "success",
        Error: "error",
      }),
    },
    example: ({ label, variant }) => <Tag variant={variant}>{label}</Tag>,
    imports: ['import { Tag } from "@folloze/design-system"'],
  },
);
