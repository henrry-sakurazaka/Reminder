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
  define: {
    'process.env': process.env,
  },
  base: './',
  root: __dirname,
  // root: '/app2/',
  build: {
    outDir: resolve(__dirname, 'dist'),
    define: {
      'process.env.VITE_GOOGLE_APPLICATION_CREDENTIALS': JSON.stringify(process.env.VITE_GOOGLE_APPLICATION_CREDENTIALS),
    },
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const moduleName = id.toString().split('node_modules/')[1].split('/')[0].toString();

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
    port: 3000,
    // https:
    //   process.env.VITE_NODE_ENV === 'production' || process.env.VITE_HTTPS === 'true'
    //     ? {
    //         key: fs.readFileSync('./server.key.pem' || '/etc/ssl/private/server.key.pem'),
    //         cert: fs.readFileSync('./server.cert.pem' || '/etc/ssl/certs/server.cert.pem'),
    //       }
    //     : false,
    hmr: true,
    overlay: false, 
    cors: true,
  },
  // webServer: {
  //   command: 'npm run dev', 
  //   port: 3000,             
  //   timeout: 120000,    
  // },
  reporter: [
    ['list'], 
    ['html', { outputFolder: './custom-test-results' }]
    ['html', { outputDir: '/app2/test-results' }],
  ],
  
});
