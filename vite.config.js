import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        leaf: "oklch(0.26 0.21 136)",
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})