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

# entrypoint.shを実行するように設定
ENTRYPOINT ["/bin/bash", "/firebase/entrypoint.sh"]

# Firebaseエミュレーターを起動するコマンドをデフォルトで設定
CMD ["firebase", "emulators:start", "--only", "firestore,functions"]


# # 基本のイメージとして Node.js を使用
# FROM node:18-slim

# #Firebase CLIのインストール
# RUN apt-get update && apt-get install -y npm && \
#     npm install -g firebase-tools

# # 作業ディレクトリを設定
# WORKDIR /firebase

# # プロジェクトのルートディレクトリからfirebase.jsonをコピー
# COPY ../firebase.json ./  

# # Firebaseの設定ファイルをコピー
# COPY . .

# # エミュレーターを起動するコマンドを設定
# CMD ["firebase", "emulators:start", "--only", "${GOOGLE_APPLICATION_CREDENTIALS}", "firestore,functions"]
