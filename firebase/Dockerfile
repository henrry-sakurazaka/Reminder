# 基本のイメージとして Node.js を使用
FROM node:18-slim

# Firebase CLIとJavaのインストール
RUN apt-get update && apt-get install -y default-jre && \
    npm install -g firebase-tools

# Javaの環境変数を設定
ENV JAVA_HOME="/usr/lib/jvm/default-java"
ENV PATH="$JAVA_HOME/bin:$PATH"

# 作業ディレクトリを設定
WORKDIR /firebase

# プロジェクトのルートディレクトリからfirebase.jsonをコピー
COPY ../firebase.json ./  

# Firebaseの設定ファイルとスクリプトをコピー
COPY . .

# Viteをインストール（プロジェクトの依存関係に追加）
RUN npm install --global vite

# package.json と package-lock.json をコピーして依存関係をインストール
COPY package*.json ./
RUN npm ci
RUN npm install

RUN npm install -g firebase-tools

# スクリプトを実行可能にする
RUN chmod +x firebase/entrypoint.sh

COPY ./firebase/entrypoint.sh /firebase/entrypoint.sh


# entrypoint.shを実行するように設定
ENTRYPOINT ["/firebase/entrypoint.sh"]

# Firebaseエミュレーターを使用するためのポートを指定
EXPOSE 7000 5001 5000 5020 9199 9090 9000

# Firebaseエミュレーターを起動するコマンドをデフォルトで設定
CMD ["firebase", "emulators:start --port=9000", "--only","firestore,functions,auth,database,storege"]

