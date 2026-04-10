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
      },
    },
  },
} satisfies Config;
