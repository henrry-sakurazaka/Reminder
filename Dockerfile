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
    && rm -rf /var/lib/apt/lists/*

# Javaが正しくインストールされているか確認
RUN java -version

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# 権限を適切に設定
RUN mkdir -p /app/test-results /app/playwright-report \
    && chmod -R 777 /app/test-results /app/playwright-report

# 必要な環境変数を設定
ENV CI=true

# package.json と package-lock.json をコピーして依存関係をインストール
COPY package*.json ./
RUN npm ci
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# Viteをインストール（プロジェクトの依存関係に追加）
RUN npm install --global vite

# Playwright のブラウザをインストール
RUN npx playwright install --with-deps

# デフォルトコマンド
CMD ["npx", "playwright", "test"]

# RUN npm install -g firebase-tools

# エントリーポイントスクリプトをコンテナにコピーして実行権限を付与
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# エントリーポイントを指定
ENTRYPOINT ["/bin/bash", "/entrypoint.sh"]

# # Firebaseエミュレーターを使用するためのポートを指定
# EXPOSE 8080 5001 5000 8090 9199 8091 8085

# # Firebaseエミュレーター用の設定
# CMD ["firebase", "emulators:start", "--only","firestore,functions,firestore,auth,storege"]


