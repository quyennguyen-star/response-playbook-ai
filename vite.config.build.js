import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    lib: {
      entry: './src/index.jsx',
      name: 'PlaybookComponents',
      formats: ['iife'],
      fileName: 'components'
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    }
  }
});
