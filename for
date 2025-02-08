# #CI/CD用
# #!/bin/bash

# set -e  # エラーが発生したら即座に終了

# # config.yml を最優先にする
# if [ -f "/home/runner/.cloudflared/config.yml" ]; then
#   exec cloudflared tunnel --config /home/runner/.cloudflared/config.yml run
# elif [ -f "/home/runner/.cloudflared/offsetcodecraft.site.json" ]; then
#   exec cloudflared tunnel --credentials-file /home/runner/.cloudflared/offsetcodecraft.site.json run offsetcodecraft.site
# elif [ -n "${TUNNEL_ID}" ]; then
#   exec cloudflared tunnel --no-autoupdate run "${TUNNEL_ID}"
# else
#   echo "Error: No valid tunnel configuration found."
#   exit 1
# fi
