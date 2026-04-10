import type { SidebarItemType } from "../../../types/SidebarItemType";
import { sidebarIcons } from "./sidebarIcons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

type Props = SidebarItemType & { collapsed?: boolean };

export default function SidebarItem({ id, label, href, collapsed = false, counter }: Props) {
  const location = useLocation();
  const Icon = sidebarIcons[id];
  const isActive = location.pathname.includes(href);
  const textColor = isActive ? "text-secondary" : "text-gray";

  return (
    <Link className={`flex h-[32px] items-center py-[4px]`} to={href} title={label}>
      <div className={`flex items-center w-full ${collapsed ? "px-0 " : "gap-2 px-[13px]"}`}>
        {isActive && (
          <div className="w-[3px] h-[32px] absolute left-0 rounded-tr-[3px] rounded-br-[3px] bg-secondary"></div>
        )}
        <Icon className={`${textColor} shrink-0`} aria-hidden="true" />
        {collapsed && <span className="sr-only">{label}</span>}
        {!collapsed && (
          <span className={`${textColor} font-medium text-sm leading-[18px]`}>{label}</span>
        )}
      </div>
      {counter && !collapsed && (
        <div className="flex justify-center items-center font-medium text-[12px] mr-2 h-[20px] py-[4px] px-[8px] text-white bg-yellow-500 rounded-[12px]">
          {counter}
        </div>
      )}
    </Link>
  );
}
