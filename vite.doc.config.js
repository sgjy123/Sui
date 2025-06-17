import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8888,
    open: '/doc'
  },
  base: '/',
  build: {
    outDir: 'doc-dist'
  },
  resolve: {
    alias: {
      'components': path.resolve(__dirname, './src/components'),
    }
  }
});
