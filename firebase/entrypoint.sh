#!/bin/bash

# .env を読み込む
source .env

# Firebaseエミュレーター用の環境変数を設定
export GOOGLE_APPLICATION_CREDENTIALS="./serviceAccountKey.json"

if [ "$ENV" != "production" ]; then
  unset GOOGLE_APPLICATION_CREDENTIALS
else
  export GOOGLE_APPLICATION_CREDENTIALS="./serviceAccountKey.json"
fi

# Viteアプリケーションのビルド
npm run build

# Viteアプリケーションの起動
npm run dev &

# アプリケーションの起動を待機
echo "Waiting for Vite app to start..."
sleep 10

# firebase use --token "$VITE_FIREBASE_TOKEN"
# Firebaseエミュレーターを起動する
firebase emulators:start --only firestore,functions,firestore,auth,storage
