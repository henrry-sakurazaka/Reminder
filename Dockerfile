
# ベースイメージとしてNode.jsを使用
FROM node:18-alpine

# Firebase CLIと必要な依存関係をインストール
RUN npm install -g firebase-tools

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# package.json と package-lock.json をコピーして依存関係をインストール
COPY package*.json ./
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# テストやデプロイ用の環境変数を設定するためのシェルスクリプトを追加
COPY ./scripts/entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

# アプリケーションのポートを指定
EXPOSE 3000

# エントリーポイントを設定
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]


# FROM node:16 AS builder

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build


# FROM node:16

# # Firebaseエミュレーター用にFirebaseツールをインストール
# RUN npm install -g firebase-tools

# # Firebaseエミュレーター用の作業ディレクトリを設定
# WORKDIR /firebase

# # Firebaseエミュレーター用の設定ファイルをコピー
# COPY --from=builder /app/build ./public

# # エミュレーターを起動
# CMD ["firebase", "emulators:start", "--only", "firestore,functions"]
