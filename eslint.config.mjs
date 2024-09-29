import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default {
  ignores: [
    '**/build/**/*', // build フォルダ内の全てのファイルを無視
    'node_modules/**',
    '**/firebase*.js',
    '**/public/firebase*.js',
    '**/build/firebase*.js',
    '**/build.*js',
    "**/src/firebase*.js",
    "**/src/firebaseMessaging.js",
    '**/__mocks__/**/*', // __mocks__ フォルダを無視
  ],

  languageOptions: {
    ecmaVersion: 2021, // ECMAScriptのバージョン
    sourceType: 'module', // ES モジュールとして扱う
    globals: {
      ...globals.browser, // ブラウザのグローバル変数
      ...globals.node,    // Node.js のグローバル変数
      ...globals.jest,    // Jest のグローバル変数
      process: "readonly",  // 'process' などを定義
      console: "readonly",
      jest: "readonly",     // jestを使っている場合
      localStorage: "readonly",
      Notification: "readonly",
      setInterval: "readonly",
      window: "readonly",
      setTimeout: "readonly",
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true, // JSX 構文をサポート
      },
    },
  },

  files: ['**/*.js', '**/*.jsx'], // 適用するファイルのパターン
  settings: {
    react: {
      version: "detect", // インストールされているバージョンを自動検出
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'react/react-in-jsx-scope': 'off', // React 17+ では不要
    'no-console': 'off', // 'no-console'ルールを無効にする
    "no-undef": "off",
  },

  // ESLintの推奨設定をここに直接追加
  ...pluginJs.configs.recommended,
  ...pluginReactConfig,
};
