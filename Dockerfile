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

# Javaが正しくインストールされているか確認
RUN java -version

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# package.json と package-lock.json をコピーして依存関係をインストール
COPY package*.json ./
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# エントリーポイントスクリプトをコンテナにコピーして実行権限を付与
COPY ./entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

# Firebaseエミュレーター用の環境変数を設定し、コンテナ起動時にスクリプトを実行
ENTRYPOINT ["/bin/bash", "/firebase/entrypoint.sh"]

# Firebaseエミュレーターを使用するためのポートを指定
EXPOSE 8080

# Firebaseエミュレーター用の設定
CMD ["firebase", "emulators:start", "--only", "firestore, functions"]


# # OpenJDKを含むDebianベースの軽量イメージを使用
# FROM openjdk:11-jdk-slim

# # Node.jsのインストール用にNodeSourceを追加
# RUN apt-get update && apt-get install -y curl \
#     && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
#     && apt-get install -y nodejs \
#     && apt-get clean && rm -rf /var/lib/apt/lists/*

# # アプリケーションディレクトリを作成
# WORKDIR /usr/src/app

# # package.json と package-lock.json をコピーして依存関係をインストール
# COPY package*.json ./
# RUN npm install

# # アプリケーションのソースコードをコピー
# COPY . .

# # エントリーポイントスクリプトをコンテナにコピーして実行権限を付与
# COPY ./entrypoint.sh /usr/src/app/entrypoint.sh
# RUN chmod +x /usr/src/app/entrypoint.sh

# # Firebaseエミュレーター用の環境変数を設定し、コンテナ起動時にスクリプトを実行
# ENTRYPOINT ["/usr/src/app/entrypoint.sh"]

# # Firebaseエミュレーターを使用するためのポートを指定
# EXPOSE 8080

# # Firebaseエミュレーター用の設定 (環境変数が渡されないときの処理を修正)
# CMD ["firebase", "emulators:start", "--only", "${GOOGLE_APPLICATION_CREDENTIALS}", "firestore, functions"]
