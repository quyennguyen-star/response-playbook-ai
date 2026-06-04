import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    rollupOptions: {
      input: 'playground.html',
    },
    outDir: '_site/playground',
    emptyOutDir: false,
  },
});
