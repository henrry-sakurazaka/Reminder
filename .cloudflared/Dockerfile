
FROM debian:bullseye-slim

# Node.jsのインストール用にNodeSourceを追加
RUN apt-get update && apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN apt-get update && apt-get install -y \
    curl \
    git \
    sudo \
    && rm -rf /var/lib/apt/lists/

# cloudflaredのインストール
RUN curl -fsSL https://github.com/cloudflare/cloudflared/releases/download/2025.1.0/cloudflared-linux-amd64 -o /usr/local/bin/cloudflared && \
    chmod +x /usr/local/bin/cloudflared

# 必要なパッケージをインストール
RUN apt-get update && apt-get install -y \
    curl \
    gnupg \
    lsb-release \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Cloudflaredバイナリを公式サイトからダウンロードしてインストール
RUN curl -fsSL https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 \
    -o /usr/local/bin/cloudflared \
    && chmod +x /usr/local/bin/cloudflared

# RUN mkdir -p /home/nonroot/.cloudflared

# # nonroot ユーザーを作成
# RUN useradd -m -u 1000 -s /bin/sh nonroot

# COPY ./.cloudflared /home/nonroot/.cloudflared/

# # 実行権限を付与
# RUN chmod +x /home/nonroot/.cloudflared/entrypoint.sh\
#     && chmod +x /home/nonroot/.cloudflared/config.yml

# RUN chown -R nonroot:nonroot /home/nonroot/.cloudflared \
#     && chmod 640 /home/nonroot/.cloudflared/offsetcodecraft.site.json

# USER nonroot
   
# ENTRYPOINT ["/bin/sh","/home/nonroot/.cloudflared/entrypoint.sh"]

# 実行ユーザーを取得（GitHub Actions の runner 環境では "runner" などになる）
ARG USERNAME=$(whoami)
ARG HOME_DIR=/home/$USERNAME

# 環境変数をセット
ENV CLOUDFLARED_DIR=$HOME_DIR/.cloudflared

# ディレクトリ作成
RUN mkdir -p $CLOUDFLARED_DIR

# 必要なファイルをコピー
COPY .cloudflared/entrypoint.sh $CLOUDFLARED_DIR/entrypoint.sh
COPY .cloudflared/config.yml $CLOUDFLARED_DIR/config.yml

# 実行権限を付与
RUN chmod +x $CLOUDFLARED_DIR/entrypoint.sh

# 権限の設定
RUN chown -R $USERNAME:$USERNAME $CLOUDFLARED_DIR

# ユーザー切り替え（非 root 実行）
USER $USERNAME

# エントリーポイントを設定
ENTRYPOINT ["sh", "-c", "$CLOUDFLARED_DIR/entrypoint.sh"]
