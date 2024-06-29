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




