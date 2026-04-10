# Crono Dashboard

**Live demo:** https://crono-dashboard.vercel.app/

**Figma:** [Crono Dashboard – Test Task](https://www.figma.com/design/9stjTEFTCNpLiHePX2GYOk/Crono-dashboard---test-task?node-id=0-1&p=f&t=S2otFApGVSzl9t3G-0)

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

## Structure

```
src/
├── assets/          # organized into branding/, icons/, logos/, kpi-icons/, onboarding/, sidebar-icons/
├── components/
│   ├── layout/      # AppLayout, Sidebar, SidebarItem
│   └── ui/          # Card, KpiCard, TaskCard, SignalItem, OnboardingItem
├── data/            # static data arrays for KPIs, tasks, signals, onboarding steps
├── hooks/           # useSignals
├── pages/           # DashboardPage, NotFoundPage, WorkInProgressPage
├── router/          # route definitions
└── types/           # Signal, SidebarItemType
```

## What's implemented

The full dashboard screen from Figma: welcome card, replies card, 6 KPI cards with progress bars and tooltips, 4 task cards, the onboarding checklist, and a collapsible sidebar with active state indicators and a trial CTA.

The **Signals** section is the interactive part — clicking "Action" opens a popover where you can Complete or Delete a signal. This updates the counter and removes the item from the list. State resets on refresh so you can test it multiple times.

## Some notes on the approach

I kept things simple — no UI library, just Tailwind utility classes and custom components. Each card section (KPIs, tasks, signals, onboarding) pulls from a typed data array in `src/data/` and renders through a reusable component, which is how I like to structure things to keep the page component clean.

For colors I set up CSS custom properties in `index.css` and extended them into the Tailwind config, so the Figma palette is available as Tailwind tokens everywhere (`text-main`, `bg-light`, etc.).

SVGs are imported as React components via svgr with `currentColor` strokes, so they can be tinted with Tailwind color classes directly.

For the signals interaction I went with a simple `useState` hook. No localStorage or persistence — the data resets on refresh, which felt more practical for a demo that someone will test repeatedly.

Non-dashboard routes show a placeholder page. The sidebar navigation is fully wired up with React Router.

---

Gabriele Bello
