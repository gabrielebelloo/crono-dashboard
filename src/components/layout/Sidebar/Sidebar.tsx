import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import type { SidebarItemType } from "../../../types/sidebarItem";
import SidebarItem from "./SidebarItem";
import CronoLogo from "../../../assets/branding/crono-logo-transparent.svg?react";
import CronoLogoMark from "../../../assets/branding/crono-logo-mark.svg?react";
import ArrowForwardIcon from "../../../assets/icons/arrow-forward.svg?react";
import GiftIcon from "../../../assets/icons/gift-icon.svg?react";
import cloudPng from "../../../assets/branding/cloud.png";

const SIDEBAR_COLLAPSED_W = 64;
const SIDEBAR_UNCOLLAPSED_W = 192;
/** Figma Frame 1437255393 — nav + trial column */
const SIDEBAR_NAV_SCROLL_MAX_H_PX = 496;

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

  const trialCard = (isCollapsed: boolean) => (
    <div className={`${isCollapsed ? "px-2" : ""}`}>
      <div
        className={
          isCollapsed
            ? "relative w-full h-[48px] bg-[#FEF3D2] mx-auto rounded-[8px] flex items-center justify-center overflow-hidden"
            : "relative w-[176px] h-[64px] bg-[#FEF3D2] mx-auto rounded-[8px] overflow-hidden"
        }
        title="Trial ends in 2 days"
      >
        <img
          src={cloudPng}
          aria-hidden="true"
          className={`pointer-events-none absolute object-contain ${
            isCollapsed ? "w-[60px] h-[56px] right-0 top-0" : "w-[60px] h-[67px] left-[128px] top-0"
          }`}
          style={{ mixBlendMode: "color-burn" }}
          alt=""
        />

        {isCollapsed ? (
          <>
            <button
              className="relative z-10 flex h-9 w-9 items-center justify-center rounded-md bg-yellow text-white cursor-pointer"
              type="button"
              aria-label="Upgrade plan. Trial ends in 2 days"
            >
              <GiftIcon aria-hidden="true" />
            </button>
            <span className="sr-only">Trial ends in 2 days</span>
          </>
        ) : (
          <>
            <div className="absolute w-[135px] left-[8px] top-[8px] z-10 text-s3 text-dark">
              Trial ends in 2 days
            </div>
            <button
              type="button"
              className="absolute left-[8px] top-[32px] z-10 box-border flex h-[24px] w-[116px] flex-row items-center justify-center gap-[4px] rounded-[4px] bg-yellow px-[8px] py-[4px] text-b3 text-white cursor-pointer"
            >
              <span className="h-4 w-[84px] shrink-0 text-center leading-[16px]">Upgrade plan</span>
              <GiftIcon className="h-3 w-3 shrink-0" aria-hidden="true" />
            </button>
          </>
        )}
      </div>
    </div>
  );

  const location = useLocation();
  const isProfileActive = location.pathname === "/profile";

  const accountSection = (isCollapsed: boolean) => (
    <div className="mx-auto flex w-full max-w-[192px] shrink-0 flex-col items-start">
      {!isCollapsed && <div className="h-[16px] w-full shrink-0" aria-hidden />}
      <div
        className={`flex w-full shrink-0 flex-col items-start gap-[8px] box-border pb-[12px] ${
          isCollapsed ? "" : "h-[72px]"
        }`}
      >
        <div className="min-h-0 h-0 w-full shrink-0 border-t border-border" aria-hidden />
        <Link
          to="/profile"
          className={`relative isolate flex h-[52px] w-full shrink-0 flex-row items-center rounded-[29px] transition-colors duration-150 ${
            isCollapsed ? "justify-center px-2" : "justify-start gap-[8px] py-[4px] px-[12px]"
          }`}
        >
          <div
            className={`absolute left-0 top-[calc(50%-1.5px-14.5px)] z-0 h-[32px] w-[3px] rounded-br-[3px] rounded-tr-[3px] bg-secondary transition-opacity duration-150 ${
              isProfileActive ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="relative z-[1] flex h-[44px] w-8 shrink-0 items-center justify-center">
            <img
              width={32}
              height={32}
              src="/company-logo.png"
              alt="Company Logo"
              className="h-8 w-8 rounded-[16px] object-cover"
            />
          </div>
          {!isCollapsed && (
            <div className="relative z-[2] box-border flex h-[44px] w-[128px] shrink-0 flex-col items-start justify-start p-0">
              <div className="flex h-6 w-[128px] shrink-0 items-center self-stretch text-b2 text-dark -mb-1">
                William Robertson
              </div>
              <div className="flex h-6 w-[128px] shrink-0 flex-row items-center gap-[6px] self-stretch">
                <span className="h-6 w-[38px] shrink-0 text-b2 text-gray">Sales</span>
              </div>
            </div>
          )}
          {isCollapsed && <span className="sr-only">William Robertson, Sales</span>}
        </Link>
      </div>
    </div>
  );

  const sidebarContent = (
    <aside
      className="box-border flex h-dvh min-h-0 max-h-dvh shrink-0 flex-col bg-white shadow-[inset_-1px_0_0_0_var(--border-color)]"
      style={{ width: SIDEBAR_UNCOLLAPSED_W }}
    >
      <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-[8px] overflow-hidden">
        <div className="flex shrink-0 justify-between items-center pt-[22px] pr-[8px] pb-[22px] pl-[16px]">
          <Link
            to="/dashboard"
            className="flex shrink-0"
            onClick={onClose}
            aria-label="Crono - go to dashboard"
          >
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

        <div
          className="flex min-h-0 flex-1 basis-0 flex-col gap-4 overflow-y-auto overflow-x-hidden overscroll-y-contain [-webkit-overflow-scrolling:touch]"
          style={{ maxHeight: `${SIDEBAR_NAV_SCROLL_MAX_H_PX}px` }}
        >
          <nav className="flex flex-col gap-4" aria-label="Main navigation">
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
          <div className="shrink-0">{trialCard(false)}</div>
        </div>
      </div>

      {accountSection(false)}
    </aside>
  );

  return (
    <>
      <aside
        className="box-border hidden h-dvh min-h-0 max-h-dvh shrink-0 flex-col bg-white shadow-[inset_-1px_0_0_0_var(--border-color)] transition-[width] ease-out lg:sticky lg:top-0 lg:flex"
        style={{ width: widthPx }}
      >
        <div
          className={`flex min-h-0 min-w-0 flex-1 flex-col gap-[8px] overflow-hidden ${collapsed ? "items-center" : ""}`}
        >
          <div
            className={
              collapsed
                ? "flex shrink-0 flex-col items-center gap-3 px-2 pt-[22px] pb-[22px]"
                : "flex shrink-0 justify-between items-center pt-[22px] pr-[8px] pb-[22px] pl-[16px]"
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

          <div
            className={`flex min-h-0 flex-1 basis-0 flex-col gap-4 overflow-y-auto overflow-x-hidden overscroll-y-contain [-webkit-overflow-scrolling:touch] ${collapsed ? "w-full items-center px-0" : "w-full"}`}
            style={{ maxHeight: `${SIDEBAR_NAV_SCROLL_MAX_H_PX}px` }}
          >
            <nav
              className={`flex flex-col gap-4 ${collapsed ? "w-full items-center px-0" : "w-full"}`}
              aria-label="Main navigation"
            >
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
            <div className={`w-full shrink-0 ${collapsed ? "flex justify-center" : ""}`}>
              {trialCard(collapsed)}
            </div>
          </div>
        </div>

        {accountSection(collapsed)}
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
