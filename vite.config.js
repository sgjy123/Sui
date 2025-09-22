import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  },
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'), // 修改入口文件为src/index.js以正确导出组件
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
      },
    },
    cssCodeSplit: false, // 禁用CSS代码分割，将所有CSS打包到一个文件中
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
    },
  },
});