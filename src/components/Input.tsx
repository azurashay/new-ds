import type { InputHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

export type InputProps = {
  label?: string;
  leadingIcon?: IconName;
  trailingIcon?: IconName;
  /** Segmented leading addon, e.g. "USD" or "http://" */
  addon?: ReactNode;
  error?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({
  label,
  leadingIcon,
  trailingIcon,
  addon,
  error,
  disabled,
  className,
  ...rest
}: InputProps) {
  const boxClasses = [
    "fz-inp",
    addon && "is-seg",
    error && "is-error",
    disabled && "is-disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const field = <input disabled={disabled} {...rest} />;

  return (
    <div className="fz-field">
      {label && <label>{label}</label>}
      <div className={boxClasses} aria-disabled={disabled || undefined}>
        {addon ? (
          <>
            <div className="fz-lead">{addon}</div>
            <div className="fz-divider" />
            <div className="fz-cell">{field}</div>
          </>
        ) : (
          <>
            {leadingIcon && (
              <span className="fz-ico">
                <Icon name={leadingIcon} />
              </span>
            )}
            {field}
            {trailingIcon && (
              <span className="fz-ico">
                <Icon name={trailingIcon} />
              </span>
            )}
          </>
        )}
      </div>
      {error && <span className="fz-hint is-error">{error}</span>}
    </div>
  );
}
