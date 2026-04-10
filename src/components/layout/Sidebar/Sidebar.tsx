import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { SidebarItemType } from "../../../types/sidebarItem";
import SidebarItem from "./SidebarItem";
import CronoLogo from "../../../assets/branding/crono-logo-transparent.svg?react";
import CronoLogoMark from "../../../assets/branding/crono-logo-mark.svg?react";
import ArrowForwardIcon from "../../../assets/icons/arrow-forward.svg?react";
import GiftIcon from "../../../assets/icons/gift-icon.svg?react";
import cloudPng from "../../../assets/branding/cloud.png";

const SIDEBAR_COLLAPSED_W = 64;
const SIDEBAR_UNCOLLAPSED_W = 192;

type Props = {
  mobileOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ mobileOpen, onClose }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen, onClose]);

  const toggleItem = (id: string) => {
    setExpandedItem((prev) => (prev === id ? null : id));
  };

  const handleNavigate = () => {
    setExpandedItem(null);
    onClose();
  };

  const sidebarItems: SidebarItemType[] = [
    { id: "dashboard", label: "Dashboard", href: "/dashboard" },
    { id: "findNew", label: "Find New", href: "/find-new" },
    { id: "lists", label: "Lists", href: "/lists" },
    { id: "templates", label: "Templates", href: "/templates" },
    { id: "sequences", label: "Sequences", href: "/sequences" },
    { id: "tasks", label: "Tasks", href: "/tasks" },
    { id: "inbox", label: "Inbox", href: "/inbox", counter: 24 },
    { id: "deals", label: "Deals", href: "/deals" },
    { id: "analytics", label: "Analytics", href: "/analytics", isExpandable: true },
  ];

  const widthPx = collapsed ? SIDEBAR_COLLAPSED_W : SIDEBAR_UNCOLLAPSED_W;

  const sidebarContent = (
    <aside
      className="flex shrink-0 flex-col bg-white h-dvh border-r border-border transition-[width] ease-out"
      style={{ width: SIDEBAR_UNCOLLAPSED_W }}
    >
      <div className="flex justify-between items-center pt-[22px] pr-[8px] pb-[22px] pl-[16px]">
        <Link to="/dashboard" className="flex shrink-0" onClick={onClose} aria-label="Crono - go to dashboard">
          <CronoLogo className="h-[28px] w-auto max-w-[120px]" aria-hidden />
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="flex shrink-0 rounded-full text-gray hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-main/40 lg:hidden cursor-pointer"
          aria-label="Close menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <nav className="flex flex-col gap-[8px]">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.href}
            {...item}
            collapsed={false}
            isExpanded={expandedItem === item.id}
            onToggle={() => toggleItem(item.id)}
            onNavigate={handleNavigate}
          />
        ))}
      </nav>

      <div className="mt-4">
        <div
          className="relative w-[176px] h-[64px] bg-[#FEF3D2] mx-auto rounded-md p-[8px] overflow-hidden"
          title="Trial ends in 2 days"
        >
          <div
            aria-hidden="true"
            className="mask-contain-top-right pointer-events-none absolute right-0 top-0 bg-trialCta opacity-60 h-[67px] w-[49px] translate-x-3 -translate-y-2"
            style={{ ["--mask-image" as any]: `url(${cloudPng})` }}
          />
          <div className="relative z-10 text-sm font-medium">Trial ends in 2 days</div>
          <button
            type="button"
            className="relative z-10 flex items-center bg-trialCta py-[4px] px-[8px] gap-[4px] text-[12px] text-white rounded-[8px] cursor-pointer"
          >
            Upgrade plan
            <GiftIcon aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="min-h-0 flex-1" aria-hidden="true" />

      <div className="flex h-[72px] w-full shrink-0 items-center justify-center border-t border-border px-3 gap-2 py-[14px]">
        <img
          width={32}
          src="/company-logo.png"
          alt="Company Logo"
          className="rounded-full object-cover"
        />
        <div className="min-w-0 flex-1">
          <div className="text-sm">William Robertson</div>
          <div className="text-sm text-gray">Sales</div>
        </div>
      </div>
    </aside>
  );

  return (
    <>
      <aside
        className="hidden lg:flex shrink-0 flex-col bg-white min-h-screen border-r border-border transition-[width] ease-out"
        style={{ width: widthPx }}
      >
        <div
          className={
            collapsed
              ? "flex flex-col items-center gap-3 pt-[22px] pb-[22px] px-2"
              : "flex justify-between items-center pt-[22px] pr-[8px] pb-[22px] pl-[16px]"
          }
        >
          <Link to="/dashboard" className="flex shrink-0" aria-label="Crono - go to dashboard">
            {collapsed ? (
              <CronoLogoMark className="h-7 w-7 text-main" aria-hidden />
            ) : (
              <CronoLogo className="h-[28px] w-auto max-w-[120px]" aria-hidden />
            )}
          </Link>
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

        <nav className={`flex flex-col gap-[8px] ${collapsed ? "items-center px-0" : ""}`}>
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.href}
              {...item}
              collapsed={collapsed}
              isExpanded={expandedItem === item.id}
              onToggle={() => toggleItem(item.id)}
              onNavigate={() => setExpandedItem(null)}
            />
          ))}
        </nav>

        <div className={`${collapsed ? "mt-4 px-2" : "mt-4"}`}>
          <div
            className={
              collapsed
                ? "relative w-full h-[48px] bg-[#FEF3D2] mx-auto rounded-md flex items-center justify-center overflow-hidden"
                : "relative w-[176px] h-[64px] bg-[#FEF3D2] mx-auto rounded-md p-[8px] overflow-hidden"
            }
            title="Trial ends in 2 days"
          >
            <div
              aria-hidden="true"
              className={`mask-contain-top-right pointer-events-none absolute right-0 top-0 bg-trialCta opacity-60 ${
                collapsed
                  ? "h-[56px] w-[49px] translate-x-2 -translate-y-1"
                  : "h-[67px] w-[49px] translate-x-3 -translate-y-2"
              }`}
              style={{ ["--mask-image" as any]: `url(${cloudPng})` }}
            />

            {collapsed ? (
              <>
                <button
                  className="relative z-10 flex h-9 w-9 items-center justify-center rounded-md bg-trialCta text-white cursor-pointer"
                  type="button"
                  aria-label="Upgrade plan. Trial ends in 2 days"
                >
                  <GiftIcon aria-hidden="true" />
                </button>
                <span className="sr-only">Trial ends in 2 days</span>
              </>
            ) : (
              <>
                <div className="relative z-10 text-sm font-medium">Trial ends in 2 days</div>
                <button
                  type="button"
                  className="relative z-10 flex items-center bg-trialCta py-[4px] px-[8px] gap-[4px] text-[12px] text-white rounded-[8px] cursor-pointer"
                >
                  Upgrade plan
                  <GiftIcon aria-hidden="true" />
                </button>
              </>
            )}
          </div>
        </div>

        <div className="min-h-0 flex-1" aria-hidden="true" />

        <div
          className={`flex h-[72px] w-full shrink-0 items-center justify-center border-t border-border px-3 gap-2 ${collapsed ? "py-2" : "py-[14px]"}`}
        >
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
          {collapsed && <span className="sr-only">William Robertson, Sales</span>}
        </div>
      </aside>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />
        <div
          className={`absolute left-0 top-0 h-full transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {sidebarContent}
        </div>
      </div>
    </>
  );
}
