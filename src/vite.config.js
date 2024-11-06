import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/john-bennette-portfolio/',
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})