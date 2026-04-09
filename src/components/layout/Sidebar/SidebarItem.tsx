import type { SidebarItemType } from "../../../types/SidebarItemType";
import { sidebarIcons } from "./sidebarIcons";

type Props = SidebarItemType & { collapsed?: boolean };

export default function SidebarItem({ id, label, href, collapsed = false }: Props) {
  const Icon = sidebarIcons[id];
  const isActive = window.location.pathname.includes(href);
  const textColor = isActive ? "text-secondary" : "text-gray";

  return (
    <a
      className={`flex h-[32px] items-center py-[4px] ${collapsed ? "justify-center px-0 w-full" : "gap-2 px-[13px]"}`}
      href={href}
      title={label}
    >
      <Icon className={`${textColor} shrink-0`} aria-hidden="true" />
      {collapsed && (
        <span className="sr-only">{label}</span>
      )}
      {!collapsed && (
        <span className={`${textColor} font-medium text-sm leading-[18px]`}>{label}</span>
      )}
    </a>
  );
}
