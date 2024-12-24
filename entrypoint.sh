#!/bin/bash

# Firebaseエミュレーター用の環境変数を設定
export VITE_GOOGLE_APPLICATION_CREDENTIALS="./serviceAccountKey.json"

# if [ "$VITE_NODE_ENV" != "production" ]; then
#   unset VITE_GOOGLE_APPLICATION_CREDENTIALS
# fi
# コンテナ起動時にngrokの認証トークンを設定
ngrok authtoken $VITE_NGROK_AUTH_TOKEN

# ngrokのプロセスを起動
ngrok http 80

# 環境に応じて実行するコマンドを分ける
if [ "$VITE_NODE_ENV" == "production" ]; then
  npm run dev
fi


# ngrok をバックグラウンドで起動
ngrok http 3000 > ngrok.log 2>&1 &
sleep 5

# ngrok の URL を取得
NGROK_URL=$(curl --silent http://127.0.0.1:4040/api/tunnels | jq -r '.tunnels[0].public_url')

# URL を環境変数としてエクスポート
if [ -n "$NGROK_URL" ]; then
  echo "Ngrok URL fetched: $NGROK_URL"
  echo "NGROK_URL=${NGROK_URL}" >> $GITHUB_ENV
else
  echo "Error: Failed to fetch ngrok URL"
  cat ngrok.log
  exit 1
fi

