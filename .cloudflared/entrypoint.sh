#!/bin/bash

# 1. Named Tunnel を実行（TUNNEL_IDが必要）
if [ -n "${TUNNEL_ID}" ]; then
  cloudflared tunnel run "${TUNNEL_ID}"
elif [ -f "/home/runner/.cloudflared/offsetcodecraft.site.json" ]; then
  cloudflared tunnel --credentials-file /home/runner/.cloudflared/offsetcodecraft.site.json run offsetcodecraft.site
elif [ -f "/home/runner/.cloudflared/config.yml" ]; then
  cloudflared tunnel --config /home/runner/.cloudflared/config.yml run
else
  echo "Error: No valid tunnel configuration found."
  exit 1
fi

# トンネル起動が完了したら正常終了
echo "Cloudflare Tunnel started successfully."
exit 0
