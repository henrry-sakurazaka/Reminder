#!/bin/bash


# ngrokのプロセスを起動
ngrok http 80


# 環境変数が設定されているか確認
if [ -z "$VITE_NGROK_AUTH_TOKEN" ]; then
    echo "Error: VITE_NGROK_AUTH_TOKEN is not set."
    exit 1
fi

# ngrokの設定ファイルを作成
echo "authtoken: $VITE_NGROK_AUTH_TOKEN" > /root/.ngrok.yml
echo "tunnels:" >> /root/.ngrok.yml
echo "  app2:" >> /root/.ngrok.yml
echo "    proto: http" >> /root/.ngrok.yml
echo "    addr: 3000" >> /root/.ngrok.yml

# ngrok の設定
ngrok config add-authtoken $VITE_NGROK_AUTH_TOKEN

ngrok authtoken $VITE_NGROK_AUTH_TOKEN

# ngrokをバックグラウンドで起動
ngrok http 3000 > /tmp/ngrok.log 2>&1 &
NGROK_PID=$!

# ngrok の URL を取得するまで待機
sleep 5

# ngrok の URL を取得
export NGROK_URL=$(curl --silent http://127.0.0.1:4040/api/tunnels | jq -r '.tunnels[0].public_url')

if [ -z "$NGROK_URL" ]; then
  echo "Failed to fetch NGROK_URL"
  exit 1
fi

echo "NGROK_URL=$NGROK_URL"
exec "$@"

# プロセスを維持
# tail -f /dev/null

# Firebaseエミュレーター用の環境変数を設定
export VITE_GOOGLE_APPLICATION_CREDENTIALS="./serviceAccountKey.json"

# 環境に応じて実行するコマンドを分ける
if [ "$VITE_NODE_ENV" == "production" ]; then
  npm run dev
fi

# ngrok のプロセスが終了しないように待機
wait $NGROK_PID

