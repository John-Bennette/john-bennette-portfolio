import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/john-bennette-portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const imgRE = /\.(png|jpe?g|gif|svg|ico)$/i;
          if (imgRE.test(assetInfo.name)) {
            return `images/${assetInfo.name}`;
          }
          return `assets/${assetInfo.name}-[hash][extname]`;
        }
      }
    }
  }
});
