#!/bin/bash

# Firebaseエミュレーター用の環境変数を設定
export GOOGLE_APPLICATION_CREDENTIALS="./serviceAccountKey.json"

# 環境に応じて実行するコマンドを分ける
if [ "$VITE_NODE_ENV" == "production" ]; then
  npm run dev
fi

# # プロセスを維持
# tail -f /dev/null



