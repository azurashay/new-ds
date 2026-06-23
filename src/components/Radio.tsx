import { Icon } from "./Icon";

export type RadioVariant = "simple" | "badge" | "card";

export type RadioProps = {
  variant?: RadioVariant;
  label?: string;
  description?: string;
  /** Letter shown in the badge variant, e.g. "A" */
  badge?: string;
  name: string;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
};

export function Radio({
  variant = "simple",
  label = "Radio",
  description,
  badge = "A",
  name,
  value,
  checked,
  defaultChecked,
  disabled,
  onChange,
}: RadioProps) {
  const input = (
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );

  if (variant === "badge") {
    return (
      <label className="fz-chip is-radio">
        {input}
        <span className="fz-badge">{badge}</span>
        {label}
      </label>
    );
  }

  if (variant === "card") {
    return (
      <label className="fz-card">
        {input}
        <span className="fz-thumb">
          <Icon name="image" />
        </span>
        <span className="fz-body">
          <span className="fz-t">{label}</span>
          {description && <span className="fz-d">{description}</span>}
        </span>
        <span className="fz-box is-round" />
      </label>
    );
  }

  return (
    <label className="fz-choice">
      {input}
      <span className="fz-box is-round" />
      {label}
    </label>
  );
}
