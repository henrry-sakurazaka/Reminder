#!/bin/bash
# Firebaseエミュレーター用の環境変数を設定
export GOOGLE_APPLICATION_CREDENTIALS="./serviceAccountKey.json"
# Firebaseエミュレーターを起動
exec "$@"
