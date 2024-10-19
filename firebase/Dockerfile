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

# entrypoint.shをプロジェクトのルートディレクトリからコピー
COPY ../entrypoint.sh /firebase/entrypoint.sh

# スクリプトを実行可能にする
RUN chmod +x /firebase/entrypoint.sh

# entrypoint.shを実行するように設定
ENTRYPOINT ["/firebase/entrypoint.sh"]

# Firebaseエミュレーターを起動するコマンドをデフォルトで設定
CMD ["firebase", "emulators:start", "--only", "firestore,functions"]
