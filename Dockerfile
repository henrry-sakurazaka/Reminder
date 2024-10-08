
FROM node:16 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


FROM node:16

# Firebaseエミュレーター用にFirebaseツールをインストール
RUN npm install -g firebase-tools

# Firebaseエミュレーター用の作業ディレクトリを設定
WORKDIR /firebase

# Firebaseエミュレーター用の設定ファイルをコピー
COPY --from=builder /app/build ./public

# エミュレーターを起動
CMD ["firebase", "emulators:start", "--only", "firestore,functions"]
