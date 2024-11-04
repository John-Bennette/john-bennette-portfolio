import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: './',
  // Change base to your repository name for GitHub Pages
  base: '/john-bennette-portfolio/',
  server: {
    port: 5173,
    host: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    // Add sourcemap for better debugging
    sourcemap: true
  }
})