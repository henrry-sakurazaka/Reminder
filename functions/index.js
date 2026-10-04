import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import admin from 'firebase-admin';
import functions from 'firebase-functions';

admin.initializeApp();
// admin.initializeApp({
//   credential: admin.credential.applicationDefault()
// });

// Firestoreにアクセス
const db = admin.firestore();
const CUSTOM_PORT = process.env.CUSTOM_PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const CUSTOM_PORT2 = 4200;
const CUSTOM_PORT3 = 6060;
const CUSTOM_PORT5 = 9090;
const CUSTOM_PORT7 = 3001;
const app = express();
const app2 = express();
const app3 = express();
const app5 = express();
const app9 = express();
const isLocal = !process.env.FUNCTIONS_NAME;

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

const corsHandler = cors(corsOptions);
dotenv.config();

// ミドルウェア
app.use(express.json());
app2.use(express.json());
app3.use(express.json());
app5.use(express.json());
app9.use(express.json());
// CORSミドルウェアを使用

app.use(cors(corsOptions));
app2.use(cors(corsOptions));
app3.use(cors(corsOptions));
app5.use(cors(corsOptions));
app9.use(cors(corsOptions));

// app5.options('*', cors(corsOptions));

function convertTodoForFirestore(todo) {
  if (!todo) return false;

  return {
    title: todo.title ?? '',
    description: todo.description ?? '',
    type: todo.type ?? '',
    id: todo.id ?? '',
    content: todo.content ?? '',
    editing: todo.editing ?? false,
    completed: todo.completed ?? false,
    reserve: todo.reserve ?? '',
    editingLock: todo.editingLock ?? false,
    editingColor: todo.editingColor ?? '',
    editingDateTime: todo.editingDateTime ?? '',
    notification: todo.notification ?? false,
    shouldHandleNotifications: todo.shouldHandleNotifications ?? false,
  };
}

app5.get('/', (req, res) => {
  res.send('Hello, World!');
});
// app9.get('/', (req, res) => {
//   res.send('Reminder');
// })

// Firestoreアクセス処理
app.get('/api/todoList', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized');
    }
    console.log('🔍 Authorization header:', req.headers.authorization);

    const idToken = authHeader.split('Bearer ')[1];

    if (!idToken) {
      res.status(401).send('No token provided');
    }
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;

    // const uid = req.query.uid;
    if (!uid) return res.status(400).json({ error: 'No UID' });

    const snapshot = await db
      .collection('todoList3')
      .where('todoId', '==', uid)
      .get();

    if (snapshot.empty || snapshot.docs.length === 0) {
      return res.status(200).json([]); //空の配列を返して正常終了
    }

    // 1つのドキュメントを取得（この前提で設計されている）
    const docData = snapshot.docs[0].data();
    // todos は Map 型なので Object.values() で配列に変換
    const todos = Object.values(docData.todos || {});

    return res.json(todos);
  } catch (error) {
    console.error('🔥 Error in /todoList:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/todoList', async (req, res) => {
  try {
    const { todos } = req.body;
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized');
    }
    console.log('🔍 Authorization header:', req.headers.authorization);

    const idToken = authHeader.split('Bearer ')[1];
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;

    // const uid = req.query.uid;
    if (!uid) return res.status(400).json({ error: 'No UID' });

    if (!uid || !Array.isArray(todos)) {
      return res.status(400).json({ error: 'Missing uid or invalid todos' });
    }

    const filteredTodos = todos
      .filter((todo) => todo !== null && typeof todo === 'object')
      .map(convertTodoForFirestore);

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

if (isLocal) {
  // app.listen(CUSTOM_PORT7, HOST, () => {
  //   console.log(`Server is running on port ${CUSTOM_PORT7}`);
  // });
  app.listen(CUSTOM_PORT7, () => {
    console.log(`Server is running on port ${CUSTOM_PORT7}`);
  });
  app2.listen(CUSTOM_PORT2, () => {
    console.log(`Server is running on port ${CUSTOM_PORT2}`);
  });
  app3.listen(CUSTOM_PORT3, () => {
    console.log(`Server is running on port ${CUSTOM_PORT3}`);
  });
  app5.listen(CUSTOM_PORT5, () => {
    console.log(`Server is running on port ${CUSTOM_PORT5}`);
  });
  // app9.listen(CUSTOM_PORT, HOST, () => {
  //   console.log(`Server is running on port ${CUSTOM_PORT}`);
  // })
}

export const apiTodoList = functions.https.onRequest((req, res) => {
  corsHandler(req, res, () => app(req, res));
});
export const apiX = functions.https.onRequest((req, res) => {
  corsHandler(req, res, () => app2(req, res));
});
export const api17 = functions.https.onRequest((req, res) => {
  corsHandler(req, res, () => app3(req, res));
});
export const api5 = functions.https.onRequest((req, res) => {
  corsHandler(req, res, () => app5(req, res));
});
