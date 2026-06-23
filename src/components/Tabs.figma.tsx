/**
 * Code Connect mapping — Tabs
 * NOTE: the code <Tabs> is a container (takes items[] + value + onChange), while the
 * Figma component may be a single tab or a tab bar. Align these when publishing.
 * TODO before publishing:
 *   1. Replace `node-id=TODO` with the real Figma Tabs/Tab component link.
 *   2. Confirm Figma property names ("Variant") match; map the active state if present.
 * Publish: see ../../CODE-CONNECT.md
 */
import figma from "@figma/code-connect";
import { Tabs } from "./Tabs";

figma.connect(
  Tabs,
  "https://www.figma.com/design/iDxjKR2GG0z8xE8piANtIp/Folloze-Design-System?node-id=TODO",
  {
    props: {
      variant: figma.enum("Variant", {
        Segmented: "segmented",
        Underline: "underline",
      }),
    },
    example: ({ variant }) => (
      <Tabs
        variant={variant}
        items={["Overview", "Campaigns", "Analytics"]}
        value="Overview"
        onChange={() => {}}
      />
    ),
    imports: ['import { Tabs } from "@folloze/design-system"'],
  },
);
