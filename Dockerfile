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

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# 必要な環境変数を設定
ENV CI=true

# 権限を適切に設定
RUN mkdir -p /app/test-results /app/playwright-report \
    && chmod -R 777 /app/test-results /app/playwright-report

RUN mkdir -p /home/runner/work/Reminder/Reminder/test-results && chmod -R 777 /home/runner/work/Reminder/Reminder/test-results

# package.json と package-lock.json をコピーして依存関係をインストール
COPY package*.json ./

RUN npm ci
RUN npm install
# アプリケーションのソースコードをコピー
COPY . .

# Viteをインストール（プロジェクトの依存関係に追加）
RUN npm install --global vite

# ngrokをダウンロード、インストール
# unzipをインストール
RUN apt-get update && apt-get install -y unzip

# ngrok authtoken ${VITE_NGROK_AUTH_TOKEN}

COPY ngrok-stable-linux-amd64.zip /tmp/ngrok.zip
RUN unzip /tmp/ngrok.zip && mv ngrok /usr/local/bin && rm /tmp/ngrok.zip

# Playwright のブラウザをインストール
RUN npx playwright install --with-deps

RUN npx playwright install chromium

# デフォルトコマンド
CMD ["npx", "playwright", "test", "npm", "run", "dev"]

# RUN npm install -g firebase-tools

# エントリーポイントスクリプトをコンテナにコピーして実行権限を付与
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# エントリーポイントを指定
ENTRYPOINT ["/bin/bash", "/entrypoint.sh"]

# RUN npm cache clean --force




