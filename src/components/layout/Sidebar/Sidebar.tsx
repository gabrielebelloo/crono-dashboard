import { useState } from "react";
import type { SidebarItemType } from "../../../types/SidebarItemType";
import SidebarItem from "./SidebarItem";
import CronoLogo from "../../../assets/crono-logo-transparent.svg?react";
import CronoLogoMark from "../../../assets/crono-logo-mark.svg?react";
import ArrowForwardIcon from "../../../assets/arrow-forward.svg?react";
import GiftIcon from "../../../assets/gift-icon.svg?react";

const SIDEBAR_COLLAPSED_W = 64;
const SIDEBAR_UNCOLLAPSED_W = 192;

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItems: SidebarItemType[] = [
    { id: "dashboard", label: "Dashboard", href: "/dashboard" },
    { id: "findNew", label: "Find New", href: "/find-new" },
    { id: "lists", label: "Lists", href: "/lists" },
    { id: "templates", label: "Templates", href: "/templates" },
    { id: "sequences", label: "Sequences", href: "/sequences" },
    { id: "tasks", label: "Tasks", href: "/tasks" },
    { id: "inbox", label: "Inbox", href: "/inbox" },
    { id: "deals", label: "Deals", href: "/deals" },
    { id: "analytics", label: "Analytics", href: "/analytics" },
  ];

  const widthPx = collapsed ? SIDEBAR_COLLAPSED_W : SIDEBAR_UNCOLLAPSED_W;

  return (
    <aside
      className="flex w-[192px] shrink-0 flex-col bg-white min-h-screen border-r border-border transition-[width] ease-out"
      style={{ width: widthPx }}
    >
      <div
        className={
          collapsed
            ? "flex flex-col items-center gap-3 pt-[22px] pb-[22px] px-2"
            : "flex justify-between items-center pt-[22px] pr-[8px] pb-[22px] pl-[16px]"
        }
      >
        <a href="/dashboard" className="flex shrink-0">
          {collapsed ? (
            <CronoLogoMark className="h-7 w-7 text-main" aria-hidden />
          ) : (
            <CronoLogo className="h-[28px] w-auto max-w-[120px]" aria-hidden />
          )}
        </a>
        <button
          type="button"
          onClick={() => setCollapsed((c) => !c)}
          className="flex shrink-0 rounded-full text-gray hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-main/40"
          aria-expanded={!collapsed}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ArrowForwardIcon
            className={`cursor-pointer transition-transform duration-200 ${collapsed ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
      </div>

      <nav
        className={`flex flex-col gap-[8px] ${collapsed ? "items-center px-0" : ""}`}
      >
        {sidebarItems.map((item) => (
          <SidebarItem key={item.href} {...item} collapsed={collapsed} />
        ))}
      </nav>

      {!collapsed && (
        <div className="mt-4 w-[176px] h-[64px] bg-[#FEF3D2] mx-auto rounded-md p-[8px]">
          <div className="text-sm font-medium">Trial ends in 2 days</div>
          <button className="flex items-center bg-yellow-500 py-[4px] px-[8px] gap-[4px] text-[12px] text-white rounded-[8px] cursor-pointer">
            Upgrade plan
            <GiftIcon />  
          </button>
        </div>
      )}
      

      <div className="min-h-0 flex-1" aria-hidden="true" />

      <div className={`flex h-[72px] w-full shrink-0 items-center justify-center border-t border-border px-3 gap-2 ${collapsed ? "py-2" : "py-[14px]"}`}>
        <img
          width={32}
          src="/company-logo.png"
          alt="Company Logo"
          className="rounded-full object-cover"
        />
        {!collapsed && (
          <div className="min-w-0 flex-1">
            <div className="text-sm">William Robertson</div>
            <div className="text-sm text-gray">Sales</div>
          </div>
        )}
        {collapsed && (
          <span className="sr-only">William Robertson, Sales</span>
        )}
      </div>
    </aside>
  );
}
