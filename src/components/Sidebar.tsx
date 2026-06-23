import { Icon, type IconName } from "./Icon";

export type NavBadge = { value: string | number; tone?: "success" | "warning" };

export type NavSubItem = {
  label: string;
  active?: boolean;
  chevron?: boolean;
  onClick?: () => void;
};

export type NavItem = {
  label: string;
  icon: IconName;
  /** brand text + subtle brand background (selected page) */
  active?: boolean;
  /** brand text only, no background (open section) */
  highlighted?: boolean;
  badge?: NavBadge;
  addButton?: boolean;
  expandable?: boolean;
  expanded?: boolean;
  children?: NavSubItem[];
  onClick?: () => void;
};

export type SidebarProps = {
  items: NavItem[];
  onCollapse?: () => void;
};

export function Sidebar({ items, onCollapse }: SidebarProps) {
  return (
    <nav className="fz-sidebar">
      <div className="fz-sidebar-head">
        <button className="fz-sidebar-collapse" aria-label="Collapse sidebar" onClick={onCollapse}>
          <Icon name="chevronLeft" size={18} />
        </button>
      </div>
      <div className="fz-nav">
        {items.map((item) => (
          <NavRow key={item.label} item={item} />
        ))}
      </div>
    </nav>
  );
}

function NavRow({ item }: { item: NavItem }) {
  const cls = [
    "fz-nav-item",
    item.active && "is-active",
    item.highlighted && "is-highlighted",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div className={cls} role="button" tabIndex={0} onClick={item.onClick}>
        <span className="fz-nav-icon">
          <Icon name={item.icon} size={22} />
        </span>
        <span className="fz-nav-label">{item.label}</span>
        {item.addButton && (
          <button className="fz-nav-add" aria-label={`Add ${item.label}`}>
            <Icon name="plus" size={14} />
          </button>
        )}
        {item.badge && (
          <span
            className={[
              "fz-nav-badge",
              item.badge.tone && `fz-nav-badge--${item.badge.tone}`,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {item.badge.value}
          </span>
        )}
        {item.expandable && (
          <span className="fz-nav-chevron">
            <Icon name={item.expanded ? "chevronUp" : "chevronDown"} size={20} />
          </span>
        )}
      </div>

      {item.expanded && item.children && item.children.length > 0 && (
        <div className="fz-nav-sub">
          {item.children.map((sub) => (
            <div
              key={sub.label}
              className={`fz-nav-subitem${sub.active ? " is-active" : ""}`}
              role="button"
              tabIndex={0}
              onClick={sub.onClick}
            >
              <span className="fz-nav-label">{sub.label}</span>
              {sub.chevron && (
                <span className="fz-nav-chevron">
                  <Icon name="chevronRight" size={18} />
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
