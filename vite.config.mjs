// vite.config.mjs
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path, { resolve } from 'path';

export default defineConfig({
  base: './',  
  root: __dirname,  // ルートをプロジェクトのルートディレクトリに変更
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 各依存ライブラリを個別のチャンクに分ける
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  
      'components': path.resolve(__dirname, 'src/components'),  
    },
  },
  plugins: [
    react(),
    nodePolyfills({
      protocolImports: true,
    }),
  ],
  esbuild: {
    loader: 'jsx',  
  },
  server: {
    https: {
      key: path.resolve(__dirname, 'server.key.pem'),  // PEM形式に変更したkey
      cert: path.resolve(__dirname, 'server.cert.pem'),  // PEM形式に変更したcert
      // key: '/Users/Tsp33786/Desktop/trial_html/MY_WEB_SIGHT/reminder/server.key',
      // cert: '/Users/Tsp33786/Desktop/trial_html/MY_WEB_SIGHT/reminder/server.cert',
    },
    hmr: true,
    overlay: false,
    port: 3000,
    cors: true,
  },
});
