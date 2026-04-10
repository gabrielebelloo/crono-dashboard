import type { SidebarItemType } from "../../../types/SidebarItemType";
import { sidebarIcons } from "./sidebarIcons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ArrowIcon from "../../../assets/icons/arrow.svg?react";

type Props = SidebarItemType & {
  collapsed?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
  onNavigate?: () => void;
};

export default function SidebarItem({
  id,
  label,
  href,
  collapsed = false,
  counter,
  isExpandable,
  isExpanded = false,
  onToggle,
  onNavigate,
}: Props) {
  const location = useLocation();
  const Icon = sidebarIcons[id];
  const isActive = location.pathname === href;
  const textColor = isActive ? "text-secondary" : "text-gray group-hover:text-secondary/80";
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = () => {
    if (isExpandable) onToggle?.();
    else onNavigate?.();
  };

  return (
    <Link
      className={`group flex h-[40px] w-full items-center rounded-md ${
        collapsed ? "justify-center" : "justify-between"
      } py-[4px] transition-colors duration-150`}
      to={href}
      title={label}
      onClick={handleClick}
    >
      <div
        className={`flex items-center relative ${collapsed ? "justify-center w-full" : "gap-2 px-[13px] flex-1"}`}
      >
        {isActive && (
          <div className="w-[3px] h-[32px] absolute left-0 rounded-tr-[3px] rounded-br-[3px] bg-secondary" />
        )}
        <Icon
          className={`${textColor} shrink-0 transition-colors duration-150`}
          aria-hidden="true"
        />
        {collapsed && <span className="sr-only">{label}</span>}
        {!collapsed && (
          <span
            className={`${textColor} font-medium text-sm leading-[18px] transition-colors duration-150`}
          >
            {label}
          </span>
        )}
      </div>
      {!collapsed && (
        <div className="flex justify-center items-center gap-2 mr-2">
          {!!counter && (
            <div className="flex justify-center items-center font-semibold text-[12px] h-[20px] px-[8px] text-white bg-[#F9BB06] rounded-[12px]">
              {counter}
            </div>
          )}
          {isExpandable && (
            <ArrowIcon
              className={`${textColor} transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
            />
          )}
        </div>
      )}
    </Link>
  );
}
