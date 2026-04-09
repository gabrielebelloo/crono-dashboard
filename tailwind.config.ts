import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      colors: {
        main: 'var(--main-color)',
        bg: 'var(--bg-color)',
        border: 'var(--border-color)',
      },
    },
  },
} satisfies Config