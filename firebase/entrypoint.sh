#!/bin/bash

# Firebaseエミュレーター用の環境変数を設定
export VITE_GOOGLE_APPLICATION_CREDENTIALS="./serviceAccountKey.json"

if [ "$ENV" != "production" ]; then
  unset VITE_GOOGLE_APPLICATION_CREDENTIALS
else
  export VITE_GOOGLE_APPLICATION_CREDENTIALS="./serviceAccountKey.json"
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
