# 基本のイメージとして Node.js を使用
FROM node:18-slim

#Firebase CLIのインストール
RUN apt-get update && apt-get install -y npm && \
    npm install -g firebase-tools

# 作業ディレクトリを設定
WORKDIR /firebase

# プロジェクトのルートディレクトリからfirebase.jsonをコピー
COPY ../firebase.json ./  

# Firebaseの設定ファイルをコピー
COPY . .

# エミュレーターを起動するコマンドを設定
CMD ["firebase", "emulators:start", "--only", "${GOOGLE_APPLICATION_CREDENTIALS}", "firestore,functions"]
