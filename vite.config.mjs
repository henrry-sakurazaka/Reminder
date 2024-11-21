// vite.config.mjs
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path, { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  base: './',  
  root: __dirname,  // ルートをプロジェクトのルートディレクトリに変更
  build: {
    outDir: resolve(__dirname, 'dist'),
    define: {
      // 環境変数をコード内で使えるように設定
      'process.env.VITE_FIREBASE_TOKEN': JSON.stringify(process.env.VITE_FIREBASE_TOKEN),
      'process.env.VITE_GOOGLE_APPLICATION_CREDENTIALS': JSON.stringify(process.env.VITE_GOOGLE_APPLICATION_CREDENTIALS),
    },
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const moduleName = id.toString().split('node_modules/')[1].split('/')[0].toString();
            if (moduleName === 'firebase') {
              // Firebase関連は1つのチャンクにまとめる
              return 'firebase';
            }
            if (['react', 'react-dom'].includes(moduleName)) {
              // React関連はVendorチャンクにまとめる
              return 'vendor';
            }
            return moduleName; // 他のモジュールは個別チャンクに分割
          }
        },
      },
      external: ['@firebase/app'], // 外部ライブラリの指定
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

  optimizeDeps: {
    include: ['@firebase/app', '@firebase/analytics', '@firebase/database', '@firebase/installations'],
  },
 
  server: {
    // 本番環境と開発環境で HTTPS の設定を分ける
    https: process.env.NODE_ENV === 'production'
      ? {
          key: fs.readFileSync(path.resolve(__dirname, './server.key.pem')), // 本番用証明書
          cert: fs.readFileSync(path.resolve(__dirname, './server.cert.pem')), // 本番用証明書
        }
      : false, // 開発環境では HTTPS を無効化
  
    // https: {
    //   // key: process.env.NODE_ENV === 'production' 
    //   //   ? fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')) 
    //   //   : undefined,
    //   // cert: process.env.NODE_ENV === 'production' 
    //   //   ? fs.readFileSync(path.resolve(__dirname, 'localhost-cert.pem')) 
    //   //   : undefined,
    //   // key: fs.readFileSync('./localhost-key.pem'),
    //   // cert: fs.readFileSync('./localhost-cert.pem')
    //   // key: path.resolve(__dirname, 'server.key.pem'),  // PEM形式に変更したkey
    //   // cert: path.resolve(__dirname, 'server.cert.pem'),  // PEM形式に変更したcert
    //   // key: '/Users/Tsp33786/Desktop/trial_html/MY_WEB_SIGHT/reminder/server.key',
    //   // cert: '/Users/Tsp33786/Desktop/trial_html/MY_WEB_SIGHT/reminder/server.cert',
    // },
    hmr: true,
    overlay: false,
    port: 3000,
    cors: true,
  },
});
