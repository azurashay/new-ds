/**
 * Code Connect mapping — Sidebar (Navigation)
 * Figma: "Sidebar / Expanded" (node 41:153).
 * TODO before publishing:
 *   1. Replace `node-id=41-153` below is the real link already — keep or update if the
 *      component is moved. Confirm it points at the component, not just the frame.
 *   2. The sidebar is data-driven (items[]). Figma exposes individual nav rows; map
 *      whichever properties the component set exposes (e.g. State, Badge) if needed.
 * Publish: see ../../CODE-CONNECT.md
 */
import figma from "@figma/code-connect";
import { Sidebar } from "./Sidebar";

figma.connect(
  Sidebar,
  "https://www.figma.com/design/iDxjKR2GG0z8xE8piANtIp/Folloze-Design-System?node-id=41-153",
  {
    props: {},
    example: () => (
      <Sidebar
        items={[
          { label: "Dashboard", icon: "home", active: true },
          { label: "Audience", icon: "person", expandable: true },
          { label: "Posts", icon: "file", badge: { value: 8, tone: "success" } },
          {
            label: "Schedules",
            icon: "calendar",
            addButton: true,
            badge: { value: 3, tone: "warning" },
          },
          {
            label: "Income",
            icon: "pieChart",
            highlighted: true,
            expandable: true,
            expanded: true,
            children: [
              { label: "Earnings" },
              { label: "Refunds", active: true, chevron: true },
              { label: "Declines" },
              { label: "Payouts" },
            ],
          },
          { label: "Promote", icon: "campaign", expandable: true },
        ]}
      />
    ),
    imports: ['import { Sidebar } from "@folloze/design-system"'],
  },
);
