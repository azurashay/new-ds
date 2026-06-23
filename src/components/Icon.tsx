export type IconName =
  | "search"
  | "help"
  | "clock"
  | "chevron"
  | "chevronSmall"
  | "image";

const PATHS: Record<IconName, JSX.Element> = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 1 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
  chevron: <polyline points="6 9 12 15 18 9" />,
  chevronSmall: <polyline points="4 6 8 10 12 6" />,
  image: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </>
  ),
};

type IconProps = {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 24 }: IconProps) {
  const small = name === "chevronSmall";
  return (
    <svg
      viewBox={small ? "0 0 16 16" : "0 0 24 24"}
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={small ? 1.7 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
