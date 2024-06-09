/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// admin.initializeApp();

// // データベースの特定の場所を監視するトリガー関数を定義する
// exports.monitorDatabaseChanges = functions.database.ref("/todos/{todoId}")
//     .onWrite((change, context) => {
//         // 変更を取得する
//         const beforeData = change.before.val();
//         const afterData = change.after.val();

//         // 変更を処理する
//         // ここにプッシュ通知の送信などの処理を追加します

//         // 変更をログに記録する
//         console.log("Database change detected:", context.params.todoId, beforeData, "->", afterData);
        
//         // 処理が完了したことを示すPromiseを返す
//         return Promise.resolve();
//     });


// exports.sendNotification = functions.https.onRequest((req, res) => {
//     const topic = req.body.topic;
//     const payload = {
//         notification: {
//         title: req.body.title,
//         body: req.body.body,
//         }
//     };
    
//     admin.messaging().sendToTopic(topic, payload)
//         .then(response => {
//         res.status(200).send("Successfully sent message: " + response);
//         })
//         .catch(error => {
//         res.status(500).send("Error sending message: " + error);
//         });
//     });
    
// exports.myFunction = functions.https.onRequest((req, res) => {
// const db = admin.firestore();
// db.collection('todoList3').get()
//     .then(snapshot => {
//     let data = [];
//     snapshot.forEach(doc => {
//         data.push(doc.data());
//     });
//     res.status(200).send(data);
//     })
//     .catch(error => {
//     console.error("Error accessing Firestore: ", error);
//     res.status(500).send("Error accessing Firestore");
//     });
// });

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require('express');
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require('cors');
const bodyParser = require("body-parser"); 
const path = require("path"); 

admin.initializeApp();
const app = express();

app.use(cors({
  origin: 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
// 他のミドルウェアやルートの設定
app.use(express.json());
// 例: app.post('/register-token', (req, res) => { ... });
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  app.post('/api/saveTokens', async (req, res) => {
    const { idToken, deviceToken } = req.body;
    console.log('Received idToken:', idToken);
    console.log('Received deviceToken:', deviceToken);
    // トークンを保存する処理を実装する
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
  
  
exports.app = functions.https.onRequest(app);

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

// 通知を送信する関数
exports.sendNotification = functions.https.onRequest((req, res) => {
    const topic = req.body.topic;
    const payload = {
        notification: {
            title: req.body.title,
            body: req.body.body,
        }
    };
    
    admin.messaging().sendToTopic(topic, payload)
        .then(response => {
            res.status(200).send("Successfully sent message: " + response);
        })
        .catch(error => {
            res.status(500).send("Error sending message: " + error);
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

