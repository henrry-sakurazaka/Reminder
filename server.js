const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const path = require('path');
const cors = require('cors');
const serviceAccount = require('./src/reminder-b4527-firebase-adminsdk-bta94-003b40338d.json');
const app = express();
// const NotificationHandler = require('./NotificationHandler');
// import NotificationHandler from './NotificationHandler';

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

const corsHandler = cors({ origin: true });


// Firebase Admin SDK の初期化
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://reminder-b4527-default-rtdb.asia-southeast1.firebasedatabase.app"
});

// ルートハンドラー
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// トークンを返すエンドポイントを追加
app.get('/get-token', async (req, res) => {

  const { uid } = req.query;
  if (!uid) {
    return res.status(400).send('UID is required');
  }
  try {
    // 仮の例として、データベースから特定のユーザーのデバイストークンを取得する
    // const uid = 'some-uid'; // ここを実際のユーザーIDに変更
    const tokenSnapshot = await admin.database().ref('tokens').child(uid).get();

    if (!tokenSnapshot.exists()) {
      return res.status(404).send('Token not found');
    }

    const deviceToken = tokenSnapshot.val().deviceToken;
    res.status(200).json({ token: deviceToken });
  } catch (error) {
    console.error('Error fetching token:', error);
    res.status(500).send(`Error fetching token: ${error.message}`);
  }
});

// /api/saveTokens エンドポイントを追加
app.post('/api/saveTokens', async (req, res) => {
  const { idToken, deviceToken } = req.body;
  // idToken と deviceToken を使用して何らかの処理を行う
  console.log('Received idToken:', idToken);
  console.log('Received deviceToken:', deviceToken);
  // ここでトークンを保存する処理を実装する
  try {
    // idToken を検証し、ユーザーを認証
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    console.log('Decoded UID:', uid);

    // トークンをデータベースに保存
    await admin.database().ref('tokens').child(uid).set({
      deviceToken: deviceToken,
    });
    console.log('Token saved for UID:', uid);

    res.status(200).send('Tokens saved successfully');
  } catch (error) {
    console.error('Error saving tokens:', error);
    res.status(500).send(`Error saving tokens: ${error.message}`);
  }
});


exports.sendNotification = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
      // Preflightリクエストの処理
      if (req.method === 'OPTIONS') {
          res.set('Access-Control-Allow-Methods', 'GET, POST');
          res.set('Access-Control-Allow-Headers', 'Content-Type');
          res.set('Access-Control-Allow-Origin', '*');
          res.status(204).send('');
          return;
      }

      // メインリクエストの処理
      const { token, message } = req.body;
      const payload = {
          notification: {
              title: message.title,
              body: message.body,
          },
      };

      try {
          await admin.messaging().sendToDevice(token, payload);
          res.status(200).send({ success: true });
      } catch (error) {
          console.error('Error sending notification:', error);
          res.status(500).send({ error: 'Error sending notification' });
      }
  });
});

 
  // // sendNotification関数を定義
  // const sendNotification = async (token, message) => {
  //   try {
  //     const response = await admin.messaging().send({
  //       token: token,
  //       notification: {
  //         title: message.title,
  //         body: message.body,
  //       },
  //     });
  //     console.log('Successfully sent message:', response);
  //     return 'Notification sent successfully';
  //   } catch (error) {
  //     console.error('Error sending message:', error);
  //     throw new Error(`Error sending notification: ${error.message}`);
  //   }
  // }; 

  // /send-notification エンドポイントを追加
app.post('/send-notification', async (req, res) => {
  const { token, message } = req.body;
  console.log('Received notification request:', token, message);

  try {
    const response = await sendNotification(token, message);
    res.status(200).json({message: response});
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).send(`Error sending notification: ${error.message}`);
  }
});


// app.post('/send-notification', async (req, res) => {
//   const { token, message } = req.body;
//   console.log('Received notification request:', token, message);

//   try {
//     // NotificationHandler.js の関数を呼び出して通知を送信する
//     const response = await NotificationHandler.sendNotification(token, message);
//     res.status(200).send(response);
//   } catch (error) {
//     console.error('Error sending notification:', error);
//     res.status(500).send(`Error sending notification: ${error.message}`);
//   }
  
  // try {
  //   const response = await admin.messaging().send({
  //     token: token,
  //     notification: {
  //       title: message.title,
  //       body: message.body,
  //     },
  //   });
  //   console.log('Successfully sent message:', response);
  //   res.status(200).send('Notification sent successfully');
  // } catch (error) {
  //   console.error('Error sending message:', error);
  //   res.status(500).send(`Error sending notification: ${error.message}`);
  // }
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




