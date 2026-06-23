import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "brand" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    "fz-btn",
    `fz-btn--${variant}`,
    size !== "md" && `fz-btn--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
