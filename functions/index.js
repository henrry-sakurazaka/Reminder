
const express = require('express');
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const bodyParser = require("body-parser"); 
const path = require("path");
const cors = require('cors');
// const cors = require('cors')({ origin: true });
   
var serviceAccount = require("./reminder/functions/reminder3-65e84-e172658673bc.json"); 
                            
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://reminder3-65e84-default-rtdb.firebaseio.com" 
});

const app = express();


// CORSのミドルウェアを設定
const corsOptions = {
    origin: ['https://reminder3-65e84.web.app'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'],
    credentials: true,
    optionsSuccessStatus: 204,
  };
const corsHandler = cors(corsOptions);


// Express app に CORS ミドルウェアを適用

app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(cors(corsOptions));

// サービスワーカーを登録し、トークンを取得
registerServiceWorkerAndRequestToken();


// 静的ファイルを正しいMIMEタイプで配信するための設定
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));


app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// トークンを返すエンドポイントを追加
app.get('/get-token', cors(corsOptions), async (req, res) => {

    const { uid } = req.query;
    if (!uid) {
      return res.status(400).send('UID is required');
    }
    try {
      
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

  
  
app.post('/handleEasyLogin', (req, res) => {
  const { email, password } = req.body;

  admin.auth().signInWithEmailAndPassword(email, password)
      .then(userCredential => {
          const idToken = userCredential.user.getIdToken();
          res.status(200).send({ idToken: idToken });
      })
      .catch(error => {
          res.status(400).send({ message: 'Failed to login', error: error.message });
      });
});



app.post('/api/saveTokens',cors(corsOptions), async (req, res) => {
const { idToken, deviceToken } = req.body;
console.log('Received idToken:', idToken);
console.log('Received deviceToken:', deviceToken);
// トークンを保存する処理を実装する
res.status(200).send('Tokens saved successfully');

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

 // トークンを受け取るエンドポイント
app.post('/registerToken', cors(corsOptions), async (req, res) => {
  const token = req.body.token;
  if (!token) {
    return res.status(400).send('Invalid request: Token is missing');
  }

  try {
    // トークンをデータベースに保存する処理をここに追加します
    // 例:
    await admin.firestore().collection('tokens').add({ token });

    return res.status(200).send('Token registered successfully');
  } catch (error) {
    console.error('Error registering token:', error);
    return res.status(500).send('Internal Server Error');
  }
});


app.post('/send-notification', cors(corsOptions), async (req, res) => {
const idToken = req.headers.authorization?.split('Bearer ')[1]; // Authorizationヘッダーからトークンを取得
if (!idToken) {
    return res.status(403).json({ error: 'Authorization header missing' });
    }

try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    const { token, message, deviceToken } = req.body;

    if (!deviceToken) {
        return res.status(400).json({ error: 'Device token missing' });
        }
    // デバイストークンをデータベースに保存
    await admin.database().ref('tokens').child(uid).set({
        deviceToken: deviceToken,
    });
    // プッシュ通知の送信
    const payload = {
        notification: {
            title: message.title,
            body: message.body,
        },
    };
    const response = await admin.messaging().sendToDevice(deviceToken, payload);
    // const response = await admin.messaging().send({
    //     token: token,
    //     notification: {
    //     title: message.title,
    //     body: message.body,
    //     },
    // });
    console.log('Successfully sent message:', response);
    res.status(200).send('Notification sent successfully');
} catch (error) {
    console.error('Error sending message:', error);
    res.status(500).send(`Error sending notification: ${error.message}`);
}
});

// exports.app = functions.https.onRequest(app);
exports.api = functions.https.onRequest(app);




exports.registerToken = functions.https.onRequest((req, res) => {
  const allowedOrigins = ['https://reminder3-65e84.web.app'];

  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.set('Access-Control-Allow-Origin', origin);
  } else {
    res.set('Access-Control-Allow-Origin', '*');
  }

  if (req.method === 'OPTIONS') {
    // Preflightリクエストの処理
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const token = req.body.token;
  if (!token) {
    return res.status(400).send('Token is required');
  }

  admin.firestore().collection('tokens').add({ token })
    .then(() => {
      if (allowedOrigins.includes(origin)) {
        res.set('Access-Control-Allow-Origin', origin);
      } else {
        res.set('Access-Control-Allow-Origin', '*');
      }
      res.status(200).send('Token registered successfully');
    })
    .catch((error) => {
      console.error('Error registering token:', error);
      if (allowedOrigins.includes(origin)) {
        res.set('Access-Control-Allow-Origin', origin);
      } else {
        res.set('Access-Control-Allow-Origin', '*');
      }
      res.status(500).send('Internal Server Error');
    });
});


// exports.registerToken = functions.https.onRequest((req, res) => {
//   cors(req, res, async () => {
//     if (req.method === 'OPTIONS') {
//       // Preflightリクエストの処理
//       res.set('Access-Control-Allow-Origin', 'https://reminder3-65e84.web.app');
//       res.set('Access-Control-Allow-Methods', 'GET, POST');
//       res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//       res.status(204).send('');
//       return;
//     }

//     if (req.method !== 'POST') {
//       return res.status(405).send('Method Not Allowed');
//     }

//     const token = req.body.token;
//     if (!token) {
//       return res.status(400).send('Token is required');
//     }

//     try {
//       await admin.firestore().collection('tokens').add({ token });
//       res.set('Access-Control-Allow-Origin', 'https://reminder3-65e84.web.app');
//       return res.status(200).send('Token registered successfully');
//     } catch (error) {
//       console.error('Error registering token:', error);
//       res.set('Access-Control-Allow-Origin', 'https://reminder3-65e84.web.app');
//       return res.status(500).send('Internal Server Error');
//     }
//   });
// });

// データベースの特定の場所を監視するトリガー関数を定義する
exports.monitorDatabaseChanges = functions.database.ref("/todos/{todoId}")
    .onWrite((change, context) => {
        // 変更を取得する
        const beforeData = change.before.val();
        const afterData = change.after.val();

        // 変更を処理する
        // ここにプッシュ通知の送信などの処理を追加します

        // 変更をログに記録する
        console.log("Database change detected:", context.params.todoId, beforeData, "->", afterData);
        
        // 処理が完了したことを示すPromiseを返す
        return Promise.resolve();
    });

    const firestore = admin.firestore();

exports.sendNotificationOnTodoUpdate = functions.firestore.document('todoList3/{todoId}')
    .onUpdate(async (change, context) => {
        const beforeData = change.before.data(); // 変更前のデータ
        const afterData = change.after.data(); // 変更後のデータ

        // データの変更をチェック
        if (beforeData.notificationTime !== afterData.notificationTime) {
            const payload = {
                notification: {
                    title: 'Todo Updated',
                    body: `Todo with ID: ${context.params.todoId} has been updated.`,
                }
            };

            // ユーザーのトークンを取得して通知を送信
            try {
                const tokensSnapshot = await firestore.collection('tokens').get();
                const deviceTokens = tokensSnapshot.docs.map(doc => doc.data().deviceToken);

                if (deviceTokens.length > 0) {
                    const response = await admin.messaging().send(deviceTokens, payload);
                    console.log('Notifications sent successfully:', response);
                }
            } catch (error) {
                console.error('Error sending notifications:', error);
            }
        }

        return null;
    });


// 通知を送信する関数
exports.sendNotification = functions.https.onRequest((req, res) => {
        cors(corsOptions)(req, res, async  () => {
            try {  
               
                const idToken = req.headers.authorization?.split('Bearer ')[1];

                if (!idToken) {
                  return res.status(403).json({ error: 'Authorization header missing' });
                }
          
                // Firebase Auth トークンを検証
                const decodedToken = await admin.auth().verifyIdToken(idToken);
                const uid = decodedToken.uid; // デコードされたトークンから UID を取得

               
                const topic = 'valid-topic_123';
                const title = String(req.body.title); // title を文字列型に変換
                const body = String(req.body.body);
                const payload = {
                notification: {
                    title: title,
                    body: body
                }
                };
               // Preflightリクエストの処理
      
                if (req.method === 'OPTIONS') {
                    res.set('Access-Control-Allow-Origin', ['https://reminder3-65e84.web.app', 'http://localhost3000']);
                    res.set('Access-Control-Allow-Methods', 'GET, POST');
                    res.set('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');

                    res.status(204).send('');
                    
                } else {
                cors(req, res, () => {
                    res.set('Access-Control-Allow-Origin', ['https://reminder3-65e84.web.app', 'http://localhost3000']);
                    res.set('Access-Control-Allow-Methods', 'GET, POST');
                    res.set('Access-Control-Allow-Headers', 'Content-Type', 'Authorization'); 
                    res.status(204).send('');
                });
                }
       
                const response = await admin.messaging().sendToTopic(topic, payload);

                
                return res.status(200).json({ message: "Successfully sent message", response: response });
            } catch (error) {
            res.status(500).json({error:`Error sending notification2: ${error.message}`});
        }
    });
});

exports.saveTokens = functions.https.onRequest((req, res) => {
    corsHandler(req, res, () => {
        if (req.method !== 'POST') {
            return res.status(405).send({ message: 'Only POST requests are allowed' });
            }
      // ここにトークンを保存するロジックを記述
      const idToken = req.body.idToken;
      const deviceToken = req.body.deviceToken;

      // トークンを保存する処理（例）
      admin.firestore().collection('tokens').add({
        idToken: idToken,
        deviceToken: deviceToken,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        return res.status(200).send({ success: true });
      })
      .catch(error => {
        console.error('Error saving tokens: ', error);
        return res.status(500).send({ success: false, error: error.message });
      });
    });
  });

// データを取得する関数
exports.getTodoList = functions.https.onRequest((req, res) => {
    const db = admin.firestore();
    db.collection('todoList3').get()
        .then(snapshot => {
            let data = [];
            snapshot.forEach(doc => {
                data.push(doc.data());
            });
            res.status(200).send(data);
        })
        .catch(error => {
            console.error("Error accessing Firestore: ", error);
            res.status(500).send("Error accessing Firestore");
        });
});

// データを取得する関数
exports.myFunction = functions.https.onRequest((req, res) => {
    const db = admin.firestore();
    db.collection('todoList3').get()
        .then(snapshot => {
            let data = [];
            snapshot.forEach(doc => {
                data.push(doc.data());
            });
            res.status(200).send(data);
        })
        .catch(error => {
            console.error("Error accessing Firestore: ", error);
            res.status(500).send("Error accessing Firestore");
        });
});


// Hello World 関数
exports.helloWorld = onRequest((request, response) => {
    logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
});

// Firebase Functionsとしてエクスポート
exports.api = functions.https.onRequest(app);