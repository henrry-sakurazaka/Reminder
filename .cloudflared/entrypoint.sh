#!/bin/bash

# ローカル環境用設定
#!/bin/bash

# # 1. Named Tunnel を実行（TUNNEL_IDが必要）
# if [ -n "${TUNNEL_ID}" ]; then
#   echo "Running tunnel with ID: ${TUNNEL_ID}..."
#   cloudflared tunnel run "${TUNNEL_ID}"
# else
#   echo "Error: TUNNEL_ID is not set."
#   exit 1
# fi

# cloudflared tunnel --config /home/nonroot/.cloudflared/config.yml run

# # 2. Named Tunnel を認証情報ファイルで起動
# if [ -f "/home/nonroot/.cloudflared/offsetcodecraft.site.json" ]; then
#   echo "Running tunnel with credentials file..."
#   cloudflared tunnel --credentials-file /home/nonroot/.cloudflared/offsetcodecraft.site.json run offsetcodecraft.site
# else
#   echo "Error: Credentials file not found at /home/nonroot/.cloudflared/offsetcodecraft.site.json"
#   exit 1
# fi

# # 3. URLとホスト名を指定してトンネルを起動
# echo "Running tunnel with custom URL and hostname..."
# cloudflared tunnel --url http://localhost:3000 --hostname offsetcodecraft.site

# # 4. Dockerビルドコンフィグを指定してトンネルを起動（修正済み）
# if [ -f ./cloudflared/Dockerfile ]; then
#   echo "Running tunnel with Docker configuration..."
#   cloudflared tunnel --config <<EOF
# build:
#   context: .
#   dockerfile: ./Dockerfile
# EOF
# else
#   echo "Error: Dockerfile not found at ./cloudflared/Dockerfile"
#   exit 1
# fi

# # 5. Config ファイルを使用してトンネルを起動
# if [ -f "/home/nonroot/.cloudflared/config.yml" ]; then
#   echo "Running tunnel with config file..."
#   cloudflared tunnel --config /home/nonroot/.cloudflared/config.yml run
# else
#   echo "Error: Config file not found at /home/nonroot/.cloudflared/config.yml"
#   exit 1
# fi



# CI/CD用設定
# 1. Named Tunnel を実行（TUNNEL_IDが必要）
if [ -n "${TUNNEL_ID}" ]; then
  echo "Running tunnel with ID: ${TUNNEL_ID}..."
  cloudflared tunnel run "${TUNNEL_ID}"
else
  echo "Error: TUNNEL_ID is not set."
  exit 1
fi

cloudflared tunnel --config /home/runner/.cloudflared/config.yml run

# 2. Named Tunnel を認証情報ファイルで起動
if [ -f "/home/runner/.cloudflared/offsetcodecraft.site.json" ]; then
  echo "Running tunnel with credentials file..."
  cloudflared tunnel --credentials-file /home/runner/.cloudflared/offsetcodecraft.site.json run offsetcodecraft.site
else
  echo "Error: Credentials file not found at /home/runner/.cloudflared/offsetcodecraft.site.json"
  exit 1
fi

# 3. URLとホスト名を指定してトンネルを起動
echo "Running tunnel with custom URL and hostname..."
cloudflared tunnel --url http://localhost:3000 --hostname offsetcodecraft.site

# 4. Dockerビルドコンフィグを指定してトンネルを起動（修正済み）
if [ -f ./cloudflared/Dockerfile ]; then
  echo "Running tunnel with Docker configuration..."
  cloudflared tunnel --config <<EOF
build:
  context: .
  dockerfile: ./Dockerfile
EOF
else
  echo "Error: Dockerfile not found at ./cloudflared/Dockerfile"
  exit 1
fi

# 5. Config ファイルを使用してトンネルを起動
if [ -f "/home/runner/.cloudflared/config.yml" ]; then
  echo "Running tunnel with config file..."
  cloudflared tunnel --config /home/runner/.cloudflared/config.yml run
else
  echo "Error: Config file not found at /home/runner/.cloudflared/config.yml"
  exit 1
fi


