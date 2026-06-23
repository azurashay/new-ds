export type TabsVariant = "segmented" | "underline";

export type TabsProps = {
  variant?: TabsVariant;
  items: string[];
  value: string;
  onChange: (value: string) => void;
};

export function Tabs({ variant = "segmented", items, value, onChange }: TabsProps) {
  const wrap = variant === "segmented" ? "fz-tabs-seg" : "fz-tabs-line";
  return (
    <div className={wrap} role="tablist">
      {items.map((item) => (
        <button
          key={item}
          role="tab"
          aria-selected={item === value}
          className={`fz-tab${item === value ? " is-active" : ""}`}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
