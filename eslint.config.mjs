import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import pluginReact from 'eslint-plugin-react'; // Reactプラグイン
import pluginPrettier from "eslint-plugin-prettier";




export default {
  ignores: [
    '**/build/**/*',  
    'node_modules/**',
    '**/firebase*.js',
    '**/public/firebase*.js',
    '**/build/firebase*.js',
    '**/build.*js',
    '**/src/firebase*.js',
    '**/src/firebaseMessaging.js',
    '**/__mocks__/**/*',  
  ],

  languageOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.jest,
      process: "readonly",
      console: "readonly",
      jest: "readonly",
      localStorage: "readonly",
      Notification: "readonly",
      setInterval: "readonly",
      window: "readonly",
      setTimeout: "readonly",
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },

  files: ['**/*.js', '**/*.jsx'],
  settings: {
    react: {
      version: "detect",
    },
  },

  plugins: {
    react: pluginReact,
    prettier: pluginPrettier,
  },

  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-console': 'off',
    "no-undef": "off",
    "indent": "off", // インデントのルールを無効にする
    "space-in-parens": "off", // 括弧内の空白を無視する
    "no-multi-spaces": "off", // 複数の空白を許可する
    'prettier/prettier': 'error', // Prettierのルールをエラーとして表示
  },

  // ESLintの推奨設定をここに直接追加
  ...pluginJs.configs.recommended,
  ...pluginReactConfig,
};
