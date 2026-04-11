import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import CronoLogo from "../../assets/branding/crono-logo-transparent.svg?react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen min-w-0 overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-30 flex h-14 items-center justify-between border-b border-border bg-white px-4 lg:hidden">
        <Link to="/dashboard" className="flex shrink-0" aria-label="Crono - go to dashboard">
          <CronoLogo className="h-6 w-auto" aria-hidden />
        </Link>
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-gray hover:bg-light transition-colors cursor-pointer"
          aria-label="Open menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </header>

      <Sidebar mobileOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="min-w-0 flex-1 max-w-full overflow-x-hidden bg-bg p-4 pt-18 sm:p-5 lg:px-4 lg:pb-6 lg:pt-4 artboard:px-4 artboard:py-3">
        {children}
      </main>
    </div>
  );
}
