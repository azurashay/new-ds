/**
 * Code Connect mapping — SplitButton (button "with dropdown")
 * Figma: Button system, Split Button variants (frame node 134:2622; component set ~152:597).
 * TODO before publishing:
 *   1. Replace `node-id=134-2622` with the real Split Button component-set link.
 *   2. Confirm Figma property names ("Style", "Size", "Label") match the component.
 * Publish: see ../../CODE-CONNECT.md
 */
import figma from "@figma/code-connect";
import { SplitButton } from "./SplitButton";

figma.connect(
  SplitButton,
  "https://www.figma.com/design/iDxjKR2GG0z8xE8piANtIp/Folloze-Design-System?node-id=134-2622",
  {
    props: {
      label: figma.string("Label"),
      variant: figma.enum("Style", {
        Primary: "primary",
        Brand: "brand",
        Outline: "outline",
        Ghost: "ghost",
      }),
      size: figma.enum("Size", {
        Small: "sm",
        Medium: "md",
        Large: "lg",
      }),
    },
    example: ({ label, variant, size }) => (
      <SplitButton variant={variant} size={size}>
        {label}
      </SplitButton>
    ),
    imports: ['import { SplitButton } from "@folloze/design-system"'],
  },
);
