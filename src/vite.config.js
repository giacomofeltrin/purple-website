import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        chobe: 'chobe/index.html',
        autoversion: 'autoversion/index.html',
        helmunused: 'helmunused/index.html',
      },
    },
  },
});
