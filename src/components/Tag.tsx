import type { ReactNode } from "react";

export type TagVariant = "default" | "brand" | "success" | "error";

export type TagProps = {
  variant?: TagVariant;
  children: ReactNode;
};

export function Tag({ variant = "default", children }: TagProps) {
  const classes = ["fz-tag", variant !== "default" && `fz-tag--${variant}`]
    .filter(Boolean)
    .join(" ");
  return <span className={classes}>{children}</span>;
}
