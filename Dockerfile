# OpenJDKを含むDebianベースの軽量イメージを使用
FROM openjdk:11-jdk-slim

# # Firebase CLIとJavaのインストール
# RUN apt-get update && apt-get install -y openjdk-11-jre-headless && \
#     npm install -g firebase-tools

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

# 証明書と秘密鍵をコンテナ内にコピー
# COPY server.cert.pem /etc/ssl/certs/
# COPY server.key.pem /etc/ssl/private/
COPY nginx.conf /etc/nginx/nginx.conf

# Javaが正しくインストールされているか確認
RUN java -version

FROM node:20.14.0

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app2

# 必要な環境変数を設定
ENV CI=true


# 権限を適切に設定
RUN mkdir -p /app2/test-results /app2/playwright-report \
    && chmod -R 777 /app2/test-results /app2/playwright-report

RUN mkdir -p /home/runner/work/Reminder/Reminder/test-results && chmod -R 777 /home/runner/work/Reminder/Reminder/test-results

# ホスト側のディレクトリをコンテナ内で参照する設定
RUN mkdir -p /mnt/test-results && \
    chmod -R 777 /mnt/test-results && \
    chown -R node:node /mnt/test-results

# test-results ディレクトリの権限を変更する
RUN mkdir -p /app2/test-results && \
    chmod -R 777 /app2/test-results && \
    chown -R node:node /app2/test-results

# package.json と package-lock.json をコピーして依存関係をインストール
COPY package*.json ./

# npm キャッシュをクリアして依存関係をインストール
RUN npm cache clean --force && npm ci

RUN npm install

# 依存関係のインストール
RUN npm install @rollup/rollup-linux-x64-gnu \
    && npm install

COPY . .

# Viteをインストール（プロジェクトの依存関係に追加）
RUN npm install --global vite

# ngrokをダウンロード、インストール
# unzipをインストール
RUN apt-get update && apt-get install -y unzip

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    unzip \
    jq && \
    apt-get clean && rm -rf /var/lib/apt/lists/*


RUN apt-get update && apt-get install -y bash

# Playwright のブラウザをインストール
RUN npx playwright install --with-deps

RUN npx playwright install chromium

WORKDIR /app2
COPY package.json package-lock.json ./
RUN npm install


# デフォルトコマンド
CMD ["npx", "playwright", "test", "npm", "run", "dev", "ngrok", "http", "3000", "app", "--", "--host", "0.0.0.0"]

# エントリーポイントスクリプトをコンテナにコピーして実行権限を付与
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3000

# RUN npm install -g firebase-tools

# ENTRYPOINT [ "/bin/bash", "/entrypoint.sh"]


# RUN npm cache clean --force
    



