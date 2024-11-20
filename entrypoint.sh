#!/bin/bash

# Firebaseエミュレーター用の環境変数を設定
export GOOGLE_APPLICATION_CREDENTIALS="./serviceAccountKey.json"

# Viteアプリケーションのビルド
npm run build

# Viteアプリケーションの起動
npm run dev &

# Firebaseエミュレーターを起動する
exec firebase emulators:start --only firestore,functions
