
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

#ローカル、Docker環境用、Cloudflareが推奨するディレクトリ構成
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


#CI/CD環境用
# 実行ユーザーを設定（GitHub Actions の runner 環境では "runner" などになる）

ARG USERNAME=runner
ARG HOME_DIR=/home/$USERNAME

# 実行ユーザーを作成
RUN useradd -m -s /bin/bash $USERNAME

# 環境変数をセット
ENV CLOUDFLARED_DIR=$HOME_DIR/.cloudflared

# ディレクトリ作成
RUN mkdir -p $CLOUDFLARED_DIR/

RUN chmod +x .cloudflared/entrypoint.sh

# 必要なファイルをコピー
COPY .cloudflared/entrypoint.sh $CLOUDFLARED_DIR/entrypoint.sh
COPY .cloudflared/config.yml $CLOUDFLARED_DIR/config.yml
COPY .cloudflared/cert.pem $CLOUDFLARED_DIR/cert.pem
COPY .cloudflared/offsetcodecraft.site.json $CLOUDFLARED_DIR/offsetcodecraft.site.json

# 実行権限を付与
RUN chmod +x $CLOUDFLARED_DIR/entrypoint.sh
RUN chmod 644 $CLOUDFLARED_DIR/offsetcodecraft.site.json

# 権限の設定（GitHub Actions runner ユーザーに合わせる）
RUN chown -R $USERNAME:$USERNAME $CLOUDFLARED_DIR

# ユーザー切り替え（非 root 実行）
USER $USERNAME

# エントリーポイントを設定
ENTRYPOINT ["sh", "-c", "$CLOUDFLARED_DIR/entrypoint.sh"]
# ENTRYPOINT ["sh", "-c", "/.cloudflared/entrypoint.sh"]

