# Dashboard UI (React + TypeScript + Tailwind)

**Live demo:** [crono-dashboard.vercel.app](https://crono-dashboard.vercel.app/)

This is a pixel-focused dashboard UI built in React/TypeScript. It’s designed to showcase UI implementation accuracy (spacing/typography/colors), reusable components, and a small interactive flow.

## Stack

- React 19, TypeScript, Tailwind CSS v4
- React Router v7 for client-side navigation
- Vite 8 with vite-plugin-svgr for SVG-as-component imports
- Prettier + ESLint
- Vercel for deploy (SPA rewrites via `vercel.json`)

## Run locally

```bash
npm install
npm run dev
```

`npm run build` for production, `npm run preview` to serve it.

## Features

- **Dashboard layout**: welcome, replies, KPI tiles, tasks summary, signals list, onboarding checklist, sidebar navigation
- **Signals interaction**: clicking **Action** opens a popover with **Complete** and **Delete**; selecting either removes the signal and updates the unread counter

## Structure

```
src/
├── assets/          # branding/, icons/, logos/, kpi-icons/, onboarding/, sidebar-icons/
├── components/
│   ├── layout/      # AppLayout, Sidebar, SidebarItem
│   └── ui/          # Card, KpiCard, TaskCard, SignalItem, OnboardingItem
├── data/            # static data arrays (KPIs, tasks, signals, onboarding)
├── hooks/           # useSignals
├── pages/           # DashboardPage, NotFoundPage, WorkInProgressPage
├── router/          # route definitions
└── types/           # Signal, SidebarItemType
```

## Approach

No UI library, just Tailwind utility classes and custom components. Each card section pulls from a typed data array in `src/data/` and renders through a reusable component, keeping the page component clean.

Colors are set up as CSS custom properties in `index.css` and extended into the Tailwind config, so the Figma palette is available as tokens everywhere (`text-main`, `bg-light`, etc.).

SVGs are imported as React components via svgr with `currentColor` strokes, so they pick up color from Tailwind classes directly.

For signals I went with a simple `useState` hook, no localStorage or persistence. The data resets on refresh, which is more practical for a demo that gets tested repeatedly.

Non-dashboard routes show a placeholder page. The sidebar navigation is wired up with React Router.

## Note

This repository is shared as a **portfolio project**. It contains only original implementation code and generic UI assets used for demonstration. If you’re reviewing this as part of an interview process and need the original design reference, I can share it privately.

## Scalability

The project is structured so it can grow without becoming a mess. UI components (`Card`, `KpiCard`, `TaskCard`, `SignalItem`, `OnboardingItem`) are generic and reusable, they don't know where their data comes from. All the actual content lives in typed arrays under `src/data/`, so adding a new KPI card or a new onboarding step is just pushing an object to an array, no component code to touch.

Types in `src/types/` define the shape of each data model (`Signal`, `SidebarItemType`), and the data files are typed against them, so TypeScript catches mismatches at build time. In a real product these arrays would be replaced by API responses with the same shape, and the components wouldn't change at all.

The hook pattern (`useSignals`) keeps state logic isolated from rendering. If signals needed to come from a backend tomorrow, you'd swap the `useState` for a fetch call inside that hook and the rest of the app stays the same.

Routing is centralized in `src/router/`, layout wrapping is handled by `AppLayout`, and pages are self-contained in their own folders. Adding a new page means a new folder, a new route entry, and a sidebar item in the data array.

---

Gabriele Bello
