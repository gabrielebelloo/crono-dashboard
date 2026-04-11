import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        main: "var(--main-color)",
        secondary: "var(--secondary-color)",
        light: "var(--light-color)",
        hover: "var(--hover-color)",
        gray: "var(--gray-color)",
        gray2: "var(--gray-2-color)",
        dark: "var(--dark-color)",
        bg: "var(--bg-color)",
        border: "var(--border-color)",
        yellow: "var(--yellow-color)",
        grayHover1: "var(--gray-hover-1-color)",
        kpiTileLabel: "var(--kpi-tile-label-color)",
        avatarRing: "var(--avatar-ring-color)",
        stackBlue: "var(--stack-blue-color)",
        signalPurple: "var(--signal-tag-role)",
        signalPink: "var(--signal-tag-website)",
        kpiCompanies: "var(--kpi-companies-color)",
        kpiMeetings: "var(--kpi-meetings-color)",
        taskPendingAutoText: "var(--task-pending-auto-text)",
        taskOverdueBg: "var(--task-overdue-bg)",
        taskOverdueText: "var(--task-overdue-text)",
        taskPendingManualBg: "var(--task-pending-manual-bg)",
        taskPendingManualText: "var(--task-pending-manual-text)",
        taskPendingAutoBg: "var(--task-pending-auto-bg)",
        taskCompletedBg: "var(--task-completed-bg)",
        taskCompletedText: "var(--task-completed-text)",
      },
    },
  },
} satisfies Config;
