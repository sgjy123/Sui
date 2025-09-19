import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'Sui',
      fileName: (format) => `Sui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'classnames', '@icon-park/react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // 为不同格式的输出配置
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'style.css';
          }
          return assetInfo.name;
        },
      },
    },
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
    },
  },
});