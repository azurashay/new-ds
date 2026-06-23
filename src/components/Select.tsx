import { Icon, type IconName } from "./Icon";

export type SelectProps = {
  placeholder?: string;
  value?: string;
  leadingIcon?: IconName;
  onClick?: () => void;
};

export function Select({ placeholder = "Select one…", value, leadingIcon, onClick }: SelectProps) {
  return (
    <div className="fz-sel" role="button" tabIndex={0} onClick={onClick}>
      {leadingIcon && (
        <span className="fz-ico">
          <Icon name={leadingIcon} />
        </span>
      )}
      <span className="fz-grow">{value || placeholder}</span>
      <span className="fz-ico">
        <Icon name="chevron" />
      </span>
    </div>
  );
}
