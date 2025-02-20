// vite.config.mjs
import { defineConfig } from "file:///app2/node_modules/vite/dist/node/index.js";
import react from "file:///app2/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { nodePolyfills } from "file:///app2/node_modules/vite-plugin-node-polyfills/dist/index.js";
import path, { resolve } from "path";
import * as dotenv from "file:///app2/node_modules/dotenv/lib/main.js";
var __vite_injected_original_dirname = "/app2";

if (process.env.CI !== "true") {
  dotenv.config();
}
var vite_config_default = defineConfig({
  define: {
    "process.env": process.env
  },
  // base: '/app2/',
  base: "./",
  root: __vite_injected_original_dirname,
  // root: resolve(__dirname, 'app2'),
  // root: '/app2/',
  build: {
    outDir: resolve(__vite_injected_original_dirname, "dist"),
    define: {
      "process.env.VITE_GOOGLE_APPLICATION_CREDENTIALS": JSON.stringify(process.env.VITE_GOOGLE_APPLICATION_CREDENTIALS)
    },
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            const moduleName = id.toString().split("node_modules/")[1].split("/")[0].toString();
            if (moduleName === "firebase") return "firebase";
            if (["react", "react-dom"].includes(moduleName)) return "vendor";
            if (moduleName === "date-fns") return "date-fns";
            return moduleName;
          }
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true
      }
    },
    external: ["@firebase/app"],
    chunkSizeWarningLimit: 700
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src"),
      "components": path.resolve(__vite_injected_original_dirname, "src/components")
    }
  },
  plugins: [
    react(),
    nodePolyfills({
      protocolImports: true
    })
  ],
  esbuild: {
    loader: "jsx"
  },
  optimizeDeps: {
    include: ["@firebase/app", "@firebase/analytics", "@firebase/database", "@firebase/installations"]
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: [
      'app2', 
      'localhost', 
      '127.0.0.1', 
      '0.0.0.0', 
      'offsetcodecraft.site',
      '192.168.100.3'
    ],
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
    strictPort: true
  },

  reporter: [
    ["list"],
    ["html", { outputFolder: "./custom-test-results" }]["html", { outputDir: "/app2/test-results" }]
  ]
});
export {
  vite_config_default as default
};
