import type { ReactNode } from "react";
import { Icon } from "./Icon";
import type { ButtonVariant, ButtonSize } from "./Button";

export type SplitButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  onMainClick?: () => void;
  onTriggerClick?: () => void;
};

export function SplitButton({
  variant = "brand",
  size = "md",
  children,
  onMainClick,
  onTriggerClick,
}: SplitButtonProps) {
  const wrap = [
    "fz-split",
    `fz-split--${variant}`,
    size !== "md" && `fz-split--${size}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrap}>
      <button className="fz-split-main" onClick={onMainClick}>
        {children}
      </button>
      <button className="fz-split-trigger" aria-label="More actions" onClick={onTriggerClick}>
        <Icon name="chevronDown" size={18} />
      </button>
    </div>
  );
}
