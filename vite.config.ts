import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const BASE_PATH = process.env.BASE_PATH || process.env.VITE_BASE_PATH || '/'

const normalizeViteBase = (value: string) => {
  if (!value || value === '/') return '/'

  const withLeadingSlash = value.startsWith('/') ? value : `/${value}`
  return `${withLeadingSlash.replace(/\/+$/, '')}/`
}

export default defineConfig({
  base: normalizeViteBase(BASE_PATH),
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
