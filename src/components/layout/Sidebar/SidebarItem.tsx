import type { SidebarItemType } from "../../../types/sidebarItem";
import { sidebarIcons } from "./sidebarIcons";
import { Link, useLocation } from "react-router-dom";
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
      className={`group flex h-[32px] w-full items-center ${
        collapsed ? "justify-center" : ""
      } transition-colors duration-150`}
      to={href}
      title={label}
      onClick={handleClick}
    >
      {!collapsed && (
        <div
          className={`w-[3px] self-stretch rounded-tr-[3px] rounded-br-[3px] shrink-0 transition-colors duration-150 ${
            isActive ? "bg-secondary" : "bg-transparent"
          }`}
        />
      )}
      <div
        className={`flex items-center ${
          collapsed
            ? "justify-center w-full"
            : `gap-[8px] py-[4px] pl-[13px] ${isExpandable ? "pr-[16px]" : "pr-[13px]"} flex-1`
        }`}
      >
        <Icon
          className={`${textColor} shrink-0 transition-colors duration-150`}
          aria-hidden="true"
        />
        {collapsed && <span className="sr-only">{label}</span>}
        {!collapsed && (
          <span className={`${textColor} text-s3 transition-colors duration-150 flex-1`}>
            {label}
          </span>
        )}
        {!collapsed && counter != null && (
          <div className="box-border flex h-[20px] w-[31px] shrink-0 flex-col items-center justify-center gap-[10px] rounded-[12px] bg-yellow px-[8px] py-1 text-white">
            <span className="flex h-4 w-[15px] shrink-0 items-center justify-center text-b3 leading-[16px] tabular-nums">
              {counter}
            </span>
          </div>
        )}
        {!collapsed && isExpandable && (
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center overflow-visible">
            <ArrowIcon
              className={`${textColor} size-6 origin-center transition-transform duration-200 ease-out motion-reduce:transition-none ${
                isExpanded ? "-rotate-90" : "rotate-90"
              }`}
              width={24}
              height={24}
              aria-hidden="true"
            />
          </span>
        )}
      </div>
    </Link>
  );
}
