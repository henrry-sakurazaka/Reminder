const fs = require('fs');
const path = require('path');

// 環境変数を取得
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// 生成するファイルの内容
const content = `
const firebaseConfig = ${JSON.stringify(firebaseConfig, null, 2)};
export default firebaseConfig;
`;

// ファイルを書き出す
const filePath = path.join(__dirname, '../public/firebase-config.js');
fs.writeFileSync(filePath, content, 'utf8');

console.log('firebase-config.js が生成されました:', filePath);
