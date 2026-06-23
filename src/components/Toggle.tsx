export type ToggleVariant = "inline" | "row";

export type ToggleProps = {
  variant?: ToggleVariant;
  label?: string;
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

export function Toggle({
  variant = "inline",
  label = "Option one",
  description,
  checked,
  defaultChecked,
  disabled,
  onChange,
}: ToggleProps) {
  const control = (
    <span className="fz-switch">
      <input
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className="fz-thumb" />
    </span>
  );

  if (variant === "row") {
    return (
      <label className="fz-toggle-row">
        <span className="fz-txt">
          <span className="fz-t">{label}</span>
          {description && (
            <>
              <br />
              <span className="fz-d">{description}</span>
            </>
          )}
        </span>
        {control}
      </label>
    );
  }

  return (
    <label className="fz-toggle-inline">
      {control}
      {label}
    </label>
  );
}
