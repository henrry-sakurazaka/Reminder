# Dockerfile
FROM node:14

# 作業ディレクトリを設定
WORKDIR /app

# パッケージをインストール
COPY package.json /app
RUN npm install

# エントリーポイントスクリプトをコンテナにコピー
COPY entrypoint.sh /usr/local/bin/

# 実行権限を追加
RUN chmod +x /usr/local/bin/entrypoint.sh

# デフォルトのコマンドをエントリーポイントスクリプトに設定
ENTRYPOINT ["entrypoint.sh"]
