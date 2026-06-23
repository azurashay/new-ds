import { useState } from "react";
import {
  Button,
  Tabs,
  Input,
  Textarea,
  Select,
  Tag,
  Checkbox,
  Radio,
  Toggle,
  Sidebar,
  SplitButton,
} from "../components";
import type { NavItem } from "../components";
import { Foundations } from "./Foundations";

const NAV_ITEMS: NavItem[] = [
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
];

function Section({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pv-sec">
      <div className="pv-sec-head">
        <h2>{title}</h2>
        {note && <span>{note}</span>}
      </div>
      {children}
    </section>
  );
}

export function App() {
  const [seg, setSeg] = useState("Overview");
  const [line, setLine] = useState("All boards");

  return (
    <main className="pv-main">
      <h1 className="pv-title">Folloze Design System</h1>
      <p className="pv-sub">
        React component library. Monochrome base, purple accent. Instrument Sans for headings,
        Inter for everything else. Every value comes from a design token.
      </p>

      <Foundations />

      <Section title="Navigation" note="sidebar · expanded">
        <div className="pv-canvas">
          <Sidebar items={NAV_ITEMS} />
        </div>
      </Section>

      <Section title="Buttons" note="primary · brand · outline · ghost">
        <div className="pv-canvas">
          <Button variant="primary">Book a Meeting</Button>
          <Button variant="primary">Book a Meeting →</Button>
          <Button variant="brand">Get started</Button>
          <Button variant="outline">See campaigns</Button>
          <Button variant="ghost">Learn more →</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
        <div className="pv-label">Sizes</div>
        <div className="pv-canvas">
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary">Medium</Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
        </div>
        <div className="pv-label">With icon</div>
        <div className="pv-canvas">
          <Button variant="primary" leadingIcon="plus">
            Button
          </Button>
          <Button variant="brand" leadingIcon="plus">
            Button
          </Button>
          <Button variant="outline" leadingIcon="plus">
            Button
          </Button>
          <Button variant="ghost" leadingIcon="plus">
            Button
          </Button>
        </div>
        <div className="pv-label">With dropdown (split)</div>
        <div className="pv-canvas">
          <SplitButton variant="primary">Create Campaign</SplitButton>
          <SplitButton variant="brand">Create Campaign</SplitButton>
          <SplitButton variant="outline">Create Campaign</SplitButton>
          <SplitButton variant="ghost">Create Campaign</SplitButton>
        </div>
        <div className="pv-label">Split sizes</div>
        <div className="pv-canvas">
          <SplitButton variant="brand" size="sm">
            Create Campaign
          </SplitButton>
          <SplitButton variant="brand">Create Campaign</SplitButton>
          <SplitButton variant="brand" size="lg">
            Create Campaign
          </SplitButton>
        </div>
      </Section>

      <Section title="Tabs" note="segmented · underline">
        <div className="pv-label">Segmented</div>
        <Tabs
          variant="segmented"
          items={["Overview", "Campaigns", "Analytics", "Settings"]}
          value={seg}
          onChange={setSeg}
        />
        <div className="pv-label">Underline</div>
        <Tabs
          variant="underline"
          items={["All boards", "Published", "Drafts", "Archived"]}
          value={line}
          onChange={setLine}
        />
      </Section>

      <Section title="Inputs" note="text · search · prefix · states">
        <div className="pv-canvas pv-col">
          <Input label="Default" placeholder="Placeholder" />
          <Input label="With icon" placeholder="Placeholder" trailingIcon="help" />
          <Input label="Search" placeholder="Search" leadingIcon="search" />
          <Input label="Prefix" placeholder="Placeholder" addon={<>USD</>} />
          <Input label="URL" placeholder="www.folloze.com" addon={<>http://</>} />
          <Input label="Disabled" placeholder="Disabled" disabled />
          <Input label="Error" defaultValue="wrong@" error="Please enter a valid email." />
          <Textarea label="Text area" placeholder="Type your message…" />
        </div>
      </Section>

      <Section title="Select" note="dropdown">
        <div className="pv-canvas pv-col">
          <Select />
          <Select leadingIcon="clock" />
        </div>
      </Section>

      <Section title="Tags" note="category · status">
        <div className="pv-canvas">
          <Tag>Category</Tag>
          <Tag variant="brand">Featured</Tag>
          <Tag variant="success">Active</Tag>
          <Tag variant="error">Expired</Tag>
        </div>
      </Section>

      <Section title="Checkboxes" note="simple · pill chip · card">
        <div className="pv-label">Simple</div>
        <div className="pv-row">
          <Checkbox label="Checkbox" />
          <Checkbox label="Checkbox" defaultChecked />
        </div>
        <div className="pv-label">Pill chip</div>
        <div className="pv-row">
          <Checkbox variant="chip" label="Option one" defaultChecked />
          <Checkbox variant="chip" label="Option two" />
        </div>
        <div className="pv-label">Card</div>
        <div className="pv-row">
          <Checkbox
            variant="card"
            label="Checkbox"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            defaultChecked
          />
          <Checkbox
            variant="card"
            label="Checkbox"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </Section>

      <Section title="Radios" note="simple · letter badge · card">
        <div className="pv-label">Simple</div>
        <div className="pv-row">
          <Radio name="r1" label="Radio" />
          <Radio name="r1" label="Radio" defaultChecked />
        </div>
        <div className="pv-label">Letter badge</div>
        <div className="pv-row">
          <Radio name="r2" variant="badge" badge="A" label="Website design" defaultChecked />
          <Radio name="r2" variant="badge" badge="A" label="Rebuild design" />
        </div>
        <div className="pv-label">Card</div>
        <div className="pv-row">
          <Radio
            name="r3"
            variant="card"
            label="Radio button"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            defaultChecked
          />
          <Radio
            name="r3"
            variant="card"
            label="Radio button"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </Section>

      <Section title="Toggles" note="switch">
        <div className="pv-row">
          <Toggle label="Option one" />
          <Toggle label="Option one" defaultChecked />
        </div>
        <div className="pv-col" style={{ marginTop: 18 }}>
          <Toggle
            variant="row"
            label="Toggle checkbox"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim."
          />
          <Toggle
            variant="row"
            label="Toggle checkbox"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim."
            defaultChecked
          />
        </div>
      </Section>
    </main>
  );
}
