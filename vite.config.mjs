import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path, { resolve } from 'path';
import * as dotenv from 'dotenv';

export default defineConfig(({ mode }) => {
  const isLocal = mode === 'development';

  if (process.env.CI !== 'true') {
    dotenv.config();
  }

  return {
    define: {
      'process.env.GOOGLE_APPLICATION_CREDENTIALS': JSON.stringify(
        process.env.GOOGLE_APPLICATION_CREDENTIALS
      ),
      'process.env.VITE_REACT_APP_FIREBASE_API_KEY': JSON.stringify(
        process.env.VITE_REACT_APP_FIREBASE_API_KEY
      ),
      'process.env.VITE_REACT_APP_FIREBASE_API_PROJECTT_ID': JSON.stringify(
        process.env.VITE_REACT_APP_FIREBASE_PROJECT_ID
      ),
    },
    base: './',
    root: __dirname,
    build: {
      outDir: resolve(__dirname, 'build'),
      emptyOutDir: true,
      define: {
        'process.env.GOOGLE_APPLICATION_CREDENTIALS': JSON.stringify(
          process.env.GOOGLE_APPLICATION_CREDENTIALS
        ),
        'process.env.VITE_REACT_APP_FIREBASE_API_KEY': JSON.stringify(
          process.env.VITE_REACT_APP_FIREBASE_API_KEY
        ),
        'process.env.VITE_REACT_APP_FIREBASE_API_PROJECTT_ID': JSON.stringify(
          process.env.VITE_REACT_APP_FIREBASE_PROJECT_ID
        ),
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              const moduleName = id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0];
              if (moduleName === 'firebase') return 'firebase';
              if (['react', 'react-dom'].includes(moduleName)) return 'vendor';
              if (moduleName === 'date-fns') return 'date-fns';
              return moduleName;
            }
          },
        },
      },
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      external: ['@firebase/app'],
      chunkSizeWarningLimit: 700,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        components: path.resolve(__dirname, 'src/components'),
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
      include: [
        '@firebase/app',
        '@firebase/analytics',
        '@firebase/database',
        '@firebase/installations',
        '@firebase/auth',
      ],
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: [
        'app2',
        'localhost',
        '0.0.0.0',
        'reminder5-27ef0',
        'offsetcodecraft.site',
        '172.18.0.4',
        '192.168.0.3',
        '192.168.0.7',
      ],
      hmr: true,
      overlay: false,
      cors: true,
      // proxy: isLocal
      //   ? {
      //       '/api/apiTodoList': {
      //         target: 'http://localhost:3001',
      //         changeOrigin: true,
      //         rewrite: (path) => path,
      //       },
      //     }
      //   : undefined,
    },
    // reporter は Vite の設定ではなく、Vitest 用。通常 vite.config には不要。
  };
});
