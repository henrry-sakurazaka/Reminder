#!/bin/bash

# 5. Config ファイルを使用してトンネルを起動
if [ -f "/home/nonroot/.cloudflared/config.yml" ]; then
  echo "Running tunnel with config file..."
  cloudflared tunnel --config /home/nonroot/.cloudflared/config.yml run

# 1. Named Tunnel を実行（TUNNEL_IDが必要）
elif [ -n "${TUNNEL_ID}" ]; then
  echo "Running tunnel with ID: ${TUNNEL_ID}..."
  cloudflared tunnel run "${TUNNEL_ID}"

# 2. Named Tunnel を認証情報ファイルで起動
elif [ -f "/home/nonroot/.cloudflared/offsetcodecraft.site.json" ]; then
  echo "Running tunnel with credentials file..."
  cloudflared tunnel --credentials-file /home/nonroot/.cloudflared/offsetcodecraft.site.json run offsetcodecraft.site
fi
# 3. URLとホスト名を指定してトンネルを起動
cloudflared tunnel --url http://localhost:3000 --hostname offsetcodecraft.site



