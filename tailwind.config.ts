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
        dark: "var(--dark-color)",
        bg: "var(--bg-color)",
        border: "var(--border-color)",
        yellow: "var(--yellow-color)",
        grayHover1: "var(--gray-hover-1-color)",
        kpiTileLabel: "var(--kpi-tile-label-color)",
        avatarRing: "var(--avatar-ring-color)",
        stackBlue: "var(--stack-blue-color)",
        signalPurple: "#8846DC",
        signalPink: "#E769CB",
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
