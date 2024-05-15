import { fileURLToPath } from 'node:url'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  server: {
    strictPort: true,
    port: 5000,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src/', import.meta.url)),
    },
  },
})
