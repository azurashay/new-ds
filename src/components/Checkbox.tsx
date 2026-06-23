import { Icon } from "./Icon";

export type CheckboxVariant = "simple" | "chip" | "card";

export type CheckboxProps = {
  variant?: CheckboxVariant;
  label?: string;
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  name?: string;
  onChange?: (checked: boolean) => void;
};

export function Checkbox({
  variant = "simple",
  label = "Checkbox",
  description,
  checked,
  defaultChecked,
  disabled,
  name,
  onChange,
}: CheckboxProps) {
  const input = (
    <input
      type="checkbox"
      name={name}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.checked)}
    />
  );

  if (variant === "chip") {
    return (
      <label className="fz-chip">
        {input}
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
        <span className="fz-box" />
      </label>
    );
  }

  return (
    <label className="fz-choice">
      {input}
      <span className="fz-box" />
      {label}
    </label>
  );
}
