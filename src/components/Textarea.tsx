import type { TextareaHTMLAttributes } from "react";

export type TextareaProps = {
  label?: string;
  error?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ label, error, className, ...rest }: TextareaProps) {
  return (
    <div className="fz-field">
      {label && <label>{label}</label>}
      <textarea className={["fz-ta", className].filter(Boolean).join(" ")} {...rest} />
      {error && <span className="fz-hint is-error">{error}</span>}
    </div>
  );
}
