#!/bin/bash

# echo "Checking credentials file..."
# ls -la /home/nonroot/.cloudflared/
# cat /home/nonroot/.cloudflared/offsetcodecraft.site.json || echo "CREDENTIALS FILE MISSING"


# 2. Named Tunnel を認証情報ファイルで起動
if [ -f "/home/nonroot/.cloudflared/offsetcodecraft.site.json" ]; then
  echo "Running tunnel with credentials file..."
  exec cloudflared tunnel --credentials-file /home/nonroot/.cloudflared/offsetcodecraft.site.json run offsetcodecraft.site 
fi

# 1. Named Tunnel を実行（TUNNEL_IDが必要）
if [ -n "${TUNNEL_ID}" ]; then
  echo "Running tunnel with ID: ${TUNNEL_ID}..."
  exec cloudflared tunnel --no-autoupdate run "${TUNNEL_ID}" 
  echo "Running Tunnel Successfully!"
fi

# 5. Config ファイルを使用してトンネルを起動
if [ -f "/home/nonroot/.cloudflared/config.yml" ]; then
  echo "Running tunnel with config file..."
  exec cloudflared tunnel --config /home/nonroot/.cloudflared/config.yml run 
fi



# 3. URLとホスト名を指定してトンネルを起動
  exec cloudflared tunnel --url http://localhost:3000 --hostname offsetcodecraft.site  
  
