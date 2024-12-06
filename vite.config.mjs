// vite.config.mjs
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path, { resolve } from 'path';
import fs from 'fs';
import * as dotenv from 'dotenv';

if (process.env.CI !== 'true') {
  dotenv.config();
}

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  base: './',  
  root: __dirname,  // ルートをプロジェクトのルートディレクトリに変更
  build: {
    outDir: resolve(__dirname, 'dist'),
    define: {
      // 環境変数をコード内で使えるように設定
      // 'process.env.VITE_FIREBASE_TOKEN': JSON.stringify(process.env.VITE_FIREBASE_TOKEN),
      'process.env.VITE_GOOGLE_APPLICATION_CREDENTIALS': JSON.stringify(process.env.VITE_GOOGLE_APPLICATION_CREDENTIALS),
    },
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const moduleName = id.toString().split('node_modules/')[1].split('/')[0].toString();
            
            // Firebase関連を一つのチャンクにまとめる
            if (moduleName === 'firebase') {
              return 'firebase';
            }

            // React関連をVendorチャンクにまとめる
            if (['react', 'react-dom'].includes(moduleName)) {
              return 'vendor';
            }

            // date-fnsなどの大型モジュールを個別チャンク化
            if (moduleName === 'date-fns') {
              return 'date-fns';
            }

            // それ以外のモジュールも個別チャンクに
            return moduleName;
          }
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true, // consoleログを削除
      },
    },
    external: ['@firebase/app'], // 外部ライブラリとして扱うモジュールを指定
    chunkSizeWarningLimit: 700, // サイズ警告の上限を調整
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

  optimizeDeps: {
    include: ['@firebase/app', '@firebase/analytics', '@firebase/database', '@firebase/installations'],
  },
 
  server: {
    host: '0.0.0.0',
    // 本番環境と開発環境で HTTPS の設定を分ける
    https: process.env.VITE_NODE_ENV === 'production' 
      ? {
          key: fs.readFileSync('/etc/ssl/private/server.key.pem'),
          cert: fs.readFileSync('/etc/ssl/certs/server.cert.pem'),
      }
      : undefined, // 開発環境では HTTPS を無効化

    hmr: true,
    overlay: false,
    port: 3000,
    cors: true,
  },
});
