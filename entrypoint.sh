#!/bin/bash

# Firebaseエミュレーター用の環境変数を設定
export VITE_GOOGLE_APPLICATION_CREDENTIALS="./serviceAccountKey.json"

# if [ "$VITE_NODE_ENV" != "production" ]; then
#   unset VITE_GOOGLE_APPLICATION_CREDENTIALS
# fi

# 環境に応じて実行するコマンドを分ける
if [ "$VITE_NODE_ENV" == "production" ]; then
  npm run dev
fi


