/**
 * Code Connect mapping — Button
 * TODO before publishing:
 *   1. Replace `node-id=TODO` with the real Figma component link
 *      (in Figma: right-click the Button component set → Copy link).
 *   2. Confirm the Figma property names below ("Variant", "Size", "Disabled",
 *      "Label") match the component's actual properties — names are case-sensitive.
 * Publish: see ../../CODE-CONNECT.md
 */
import figma from "@figma/code-connect";
import { Button } from "./Button";

figma.connect(
  Button,
  "https://www.figma.com/design/iDxjKR2GG0z8xE8piANtIp/Folloze-Design-System?node-id=TODO",
  {
    props: {
      label: figma.string("Label"),
      variant: figma.enum("Variant", {
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
      disabled: figma.boolean("Disabled"),
    },
    example: ({ label, variant, size, disabled }) => (
      <Button variant={variant} size={size} disabled={disabled}>
        {label}
      </Button>
    ),
    imports: ['import { Button } from "@folloze/design-system"'],
  },
);
