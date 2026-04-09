import { useState } from "react";
import type { SidebarItemType } from "../../../types/SidebarItemType";
import SidebarItem from "./SidebarItem";
import CronoLogo from "../../../assets/crono-logo-transparent.svg?react";
import CronoLogoMark from "../../../assets/crono-logo-mark.svg?react";
import ArrowForward from "../../../assets/arrow-forward.svg?react";

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
      className="shrink-0 bg-white min-h-screen border-r border-border transition-[width] duration-200 ease-out"
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
          {collapsed && (<CronoLogoMark className="h-7 w-7 text-main" />)} 
          {!collapsed && (<CronoLogo className="h-[28px] w-auto max-w-[120px]" />)}
        </a>
        <button
          type="button"
          onClick={() => setCollapsed((c) => !c)}
          className="flex shrink-0 rounded-full text-gray hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-main/40"
          aria-expanded={!collapsed}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ArrowForward className={`transition-transform duration-200 cursor-pointer ${collapsed ? "rotate-180" : ""}`} />
        </button>
      </div>
      <nav className={`flex flex-col gap-[8px] ${collapsed ? "items-center px-0" : ""}`}>
        {sidebarItems.map((item) => (
          <SidebarItem key={item.href} {...item} collapsed={collapsed} />
        ))}
      </nav>
    </aside>
  );
}
