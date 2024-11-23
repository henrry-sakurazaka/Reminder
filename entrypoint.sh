#!/bin/bash

# Firebaseエミュレーター用の環境変数を設定
export VITE_GOOGLE_APPLICATION_CREDENTIALS="./serviceAccountKey.json"

if [ "$ENV" != "production" ]; then
  unset VITE_GOOGLE_APPLICATION_CREDENTIALS
fi


# Viteアプリケーションのビルド
npm run build

# Viteアプリケーションの起動
npm run dev 

# &

# firebase use --token "$VITE_FIREBASE_TOKEN"
# # Firebaseエミュレーターを起動する
# exec firebase emulators:start --only firestore,functions,firestore,auth,storage
