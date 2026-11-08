import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '/mnt/sdcard/1Dzakk/Coding/Portfolio/portfolio-2',
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^react$/, replacement: '/root/portfolio-v2/node_modules/react' },
      { find: /^react-dom\/client$/, replacement: '/root/portfolio-v2/node_modules/react-dom/client.js' },
      { find: /^react-dom$/, replacement: '/root/portfolio-v2/node_modules/react-dom' },
      { find: /^react\/jsx-runtime$/, replacement: '/root/portfolio-v2/node_modules/react/jsx-runtime.js' },
      { find: /^react\/jsx-dev-runtime$/, replacement: '/root/portfolio-v2/node_modules/react/jsx-dev-runtime.js' },
    ],
  },
  build: {
    outDir: '/mnt/sdcard/1Dzakk/Coding/Portfolio/portfolio-2/dist',
    emptyOutDir: true,
  }
});
