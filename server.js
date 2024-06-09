const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const path = require('path');
const serviceAccount = require('./reminder-b4527-firebase-adminsdk-bta94-003b40338d.json');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

// Firebase Admin SDK の初期化
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://reminder-b4527-default-rtdb.asia-southeast1.firebasedatabase.app"
});

// ルートハンドラー
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// /api/saveTokens エンドポイントを追加
app.post('/api/saveTokens', async (req, res) => {
  const { idToken, deviceToken } = req.body;
  // idToken と deviceToken を使用して何らかの処理を行う
  console.log('Received idToken:', idToken);
  console.log('Received deviceToken:', deviceToken);
  // ここでトークンを保存する処理を実装する
  
  // レスポンスを返す
  res.status(200).send('Tokens saved successfully');
});

app.post('/send-notification', async (req, res) => {
  const { token, message } = req.body;
  try {
    const response = await admin.messaging().send({
      token: token,
      notification: {
        title: message.title,
        body: message.body,
      },
    });
    console.log('Successfully sent message:', response);
    res.status(200).send('Notification sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).send(`Error sending notification: ${error.message}`);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const express = require('express');
// const bodyParser = require('body-parser');
// const admin = require('firebase-admin');
// const cors = require('cors');
// const path = require('path');
// const app = express();
// const serviceAccount = require('./reminder-b4527-firebase-adminsdk-bta94-003b40338d.json');
// const cors = require('cors');
// app.use(cors({
//   origin: 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
// }));

// // Firebase Admin SDK の初期化
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://reminder-b4527-default-rtdb.asia-southeast1.firebasedatabase.app"
// });


// app.use(express.static(path.join(__dirname, 'build')));

// // ルートハンドラー
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.use(bodyParser.json());
// app.use(cors());


// app.post('/send-notification', async (req, res) => {
//   const { token, message } = req.body;
//   try {
//     const response = await admin.messaging().send({
//       token: token,
//       notification: {
//         title: message.title,
//         body: message.body,
//       },
//     });
//     console.log('Successfully sent message:', response);
//     res.status(200).send('Notification sent successfully');
//   } catch (error) {
//     console.error('Error sending message:', error);
//     res.status(500).send(`Error sending notification: ${error.message}`);
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
