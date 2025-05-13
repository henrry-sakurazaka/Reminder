// const express = require('express');
// const bodyParser = require('body-parser');
// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// const path = require('path');
// const cors = require('cors')({origin: true});
// const axios = require('axios');
// const serviceAccount = require('./functions/reminder-b4527-firebase-adminsdk-bta94-ca32803afb.json');
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Firebase Admin SDK の初期化

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://reminder-b4527-default-rtdb.asia-southeast1.firebasedatabase.app"
// });

// // const whitelist = ['https://reminder-b4527.web.app'];

// // var corsOptions = {
// //   origin: function (origin, callback) {
// //     if (!origin || whitelist.indexOf(origin) !== -1) {
// //       callback(null, true);
// //     } else {
// //       callback(new Error('Not allowed by CORS'));
// //     }
// //   },
// //   methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
// //   credentials: true,
// // };
// // CORSのミドルウェアを設定
// const corsOptions = {
//   origin: 'https://reminder-b4527.web.app',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204,
// };
// app.use(cors(corsOptions));

// // app.use(cors(
// //   {
// //     origin: 'https://reminder-b4527.web.app',
// //     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
// //     credentials: true,
// //   }
// // ));
// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'build')));
// app.use(bodyParser.json());
// // app.use(cors(corsOptions));

// const corsHandler = cors({ origin: 'https://reminder-b4527.web.app' });

// // ルートハンドラー
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// // トークンを返すエンドポイントを追加
// app.get('/get-token', async (req, res) => {

//   const { uid } = req.query;
//   if (!uid) {
//     return res.status(400).send('UID is required');
//   }
//   try {

//     const tokenSnapshot = await admin.database().ref('tokens').child(uid).get();

//     if (!tokenSnapshot.exists()) {
//       return res.status(404).send('Token not found');
//     }

//     const deviceToken = tokenSnapshot.val().deviceToken;
//     res.status(200).json({ token: deviceToken });
//   } catch (error) {
//     console.error('Error fetching token:', error);
//     res.status(500).send(`Error fetching token: ${error.message}`);
//   }
// });

// // /api/saveTokens エンドポイントを追加
// app.post('/api/saveTokens', async (req, res) => {
//   console.log('Request received at /api/saveTokens');
//   const { idToken, deviceToken } = req.body;
//   // idToken と deviceToken を使用して何らかの処理を行う
//   console.log('Received idToken:', idToken);
//   console.log('Received deviceToken:', deviceToken);
//   // ここでトークンを保存する処理を実装する
//   try {
//     // idToken を検証し、ユーザーを認証
//     const decodedToken = await admin.auth().verifyIdToken(idToken);
//     const uid = decodedToken.uid;
//     console.log('Decoded UID:', uid);

//     // トークンをデータベースに保存
//     await admin.database().ref('tokens').child(uid).set({
//       deviceToken: deviceToken,
//     });
//     console.log('Token saved for UID:', uid);

//     res.status(200).send('Tokens saved successfully');
//   } catch (error) {
//     console.error('Error saving tokens:', error);
//     res.status(500).send(`Error saving tokens: ${error.message}`);
//   }
// });

// exports.sendNotification = functions.https.onRequest((req, res) => {
//   corsHandler(req, res, async () => {

//       // Preflightリクエストの処理

//       if (req.method === 'OPTIONS') {
//           res.set('Access-Control-Allow-Origin', 'https://reminder-b4527.web.app');
//           res.set('Access-Control-Allow-Methods', 'GET, POST');
//           res.set('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');

//           res.status(204).send('');

//       } else {
//         cors(req, res, () => {
//           res.set('Access-Control-Allow-Origin', 'https://reminder-b4527.web.app');
//           res.set('Access-Control-Allow-Methods', 'GET, POST');
//           res.set('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');
//           res.status(204).send('');
//         });
//       }
//       const uid = req.query.uid;
//         if (!uid) {
//             res.status(400).send('User ID is required');
//             return;
//         }
//       // メインリクエストの処理
//       const { token, message } = req.body;

//       if (!token || !message) {
//         res.status(400).send('Token and message are required');
//         return;
//       }
//       const payload = {
//           notification: {
//               title: message.title,
//               body: message.body,
//           },
//       };

//       try {
//           await admin.messaging().send(token, payload);
//           res.set('Access-Control-Allow-Origin', 'https://reminder-b4527.web.app');
//           res.status(200).send({ success: true, response });

//       } catch (error) {
//           console.error('Error sending notification:', error);
//           res.set('Access-Control-Allow-Origin', 'https://reminder-b4527.web.app');
//           res.status(500).send({ error: 'Error sending notification' });
//       }
//   });
// });

//  // sendNotification関数を定義
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

// app.post('/sendNotification', async (req, res) => {
//   const { token, message } = req.body;
//   console.log('Received notification request:', token, message);

//   const payload = {
//     notification: {
//       title: message.title,
//       body: message.body,
//     },
//   };

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

//   // /send-notification エンドポイントを追加
// app.post('/send-notification', async (req, res) => {
//   const { token, message } = req.body;
//   console.log('Received notification request:', token, message);

//   const payload = {
//     notification: {
//       title: message.title,
//       body: message.body,
//     },
//   };

//   try {
//     const response2 = await admin.messaging().send(token, payload);
//     const response = await sendNotification(token, message);
//     console.log('Successfully sent message:', response2);
//     res.set('Access-Control-Allow-Origin', 'https://reminder-b4527.web.app');
//     res.status(200).json({message: response});

//   } catch (error) {
//     console.error('Error sending notification:', error);
//     res.set('Access-Control-Allow-Origin', 'https://reminder-b4527.web.app');
//     res.status(500).send(`Error sending notification: ${error.message}`);
//   }
// });
// exports.api = functions.https.onRequest(app);
// // 新しいエンドポイント /api/vaja を追加
// app.post('/api/vaja', async (req, res) => {
//   const { apiKey, faceID } = req.body;

//   try {
//     const response = await axios.post('https://api.aiforthai.in.th/vaja', {
//       apiKey: apiKey,
//       faceID: faceID
//     });
//     res.set('Access-Control-Allow-Origin', 'https://reminder-b4527.web.app');
//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error('Error calling API:', error);
//     res.set('Access-Control-Allow-Origin', 'https://reminder-b4527.web.app');
//     res.status(500).send(`Error calling API: ${error.message}`);
//   }
// });

// // const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import admin from 'firebase-admin';

admin.initializeApp();

// Firestoreにアクセス
const db = admin.firestore();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const PORT2 = 4200;
const PORT3 = 6060;
const PORT5 = 9090;
const PORT7 = 3001;
const app = express();
const app2 = express();
const app3 = express();
const app5 = express();

const corsOptions = {
  origin: [
    'https://reminder5-27ef0.web.app',
    'http://localhost:3000',
    'http://localhost:9090',
    'https://offsetcodecraft.site',
    '0.0.0.0',
    '172.18.0.4',
    'http://app2:3000',
    'http://192.168.0.3:3000',
    'http://192.168.0.7:3000',
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Access-Control-Allow-Origin',
  ],
  credentials: true,
  optionsSuccessStatus: 204,
};

dotenv.config();

// ミドルウェア
app.use(express.json());
app2.use(express.json());
app3.use(express.json());
app5.use(express.json());
// CORSミドルウェアを使用

app.use(cors(corsOptions));
app2.use(cors(corsOptions));
app3.use(cors(corsOptions));
app5.use(cors(corsOptions));

app5.options('*', cors(corsOptions));

function convertTodoForFirestore(todo) {
  if (!todo) return false;
  return {
    title: todo.title,
    description: todo.description,
    type: todo.type,
    id: todo.id,
    content: todo.content,
    editing: todo.editing,
    completed: todo.completed,
    reserve: todo.reserve,
    editingLock: todo.editingLock,
    editingColor: todo.editingColor,
    editingDateTime: todo.editingDateTime,
    notification: todo.notification,
    shouldHandleNotifications: todo.shouldHandleNotifications ?? false,
  };
}

app5.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/todoList', async (req, res) => {
  try {
    const uid = req.query.uid;
    if (!uid) return res.status(400).json({ error: 'No UID' });

    const snapshot = await db
      .collection('todoList3')
      .where('todoId', '==', uid)
      .get();
    const todos = snapshot.docs.map((doc) => doc.data());

    res.json(todos);
  } catch (error) {
    console.error('🔥 Error in /todoList:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/todoList', async (req, res) => {
  try {
    const { uid, todos } = req.body;

    if (!uid || !Array.isArray(todos)) {
      return res.status(400).json({ error: 'Missing uid or invalid todos' });
    }
    const filteredTodos = todos
      .filter((todo) => todo !== null)
      .map(convertTodoForFirestore);
    // Firestore に保存（上書き or 新規）
    await db.collection('todoList3').doc(uid).set({
      todoId: uid,
      todos: filteredTodos,
    });
    res.status(200).json({ message: 'Todo list saved successfully' });
  } catch (error) {
    console.error('🔥 Error in POST /todoList:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT7, HOST, () => {
  console.log(`Server is running on port ${PORT7}`);
});
app2.listen(PORT2, () => {
  console.log(`Server is running on port ${PORT2}`);
});
app3.listen(PORT3, () => {
  console.log(`Server is running on port ${PORT3}`);
});
app5.listen(PORT5, () => {
  console.log(`Server is running on port ${PORT5}`);
});

// // Firebase Functionsとしてエクスポート
// exports.apiX = functions.https.onRequest((req, res) => {
//   corsHandler(req, res, () => app2(req, res));
// });
// exports.api17 = functions.https.onRequest((req, res) => {
//   corsHandler(req, res, () => app3(req, res));
// });
// exports.api = functions.https.onRequest((req, res) => {
//   corsHandler(req, res, () => app(req, res));
// });
// exports.api5 = functions.https.onRequest((req, res) => {
//   corsHandler(req, res, () => app5(req, res));
// });
