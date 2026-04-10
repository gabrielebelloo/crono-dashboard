import type { SidebarItemType } from "../../../types/SidebarItemType";
import { sidebarIcons } from "./sidebarIcons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

type Props = SidebarItemType & { collapsed?: boolean };

export default function SidebarItem({ id, label, href, collapsed = false }: Props) {
  const location = useLocation();
  const Icon = sidebarIcons[id];
  const isActive =location.pathname.includes(href);
  const textColor = isActive ? "text-secondary" : "text-gray";

  return (
    <Link
      className={`flex h-[32px] items-center py-[4px] ${collapsed ? "justify-center px-0 w-full" : "gap-2 px-[13px]"}`}
      to={href}
      title={label}
    >
      <Icon className={`${textColor} shrink-0`} aria-hidden="true" />
      {collapsed && <span className="sr-only">{label}</span>}
      {!collapsed && (
        <span className={`${textColor} font-medium text-sm leading-[18px]`}>{label}</span>
      )}
    </Link>
  );
}
