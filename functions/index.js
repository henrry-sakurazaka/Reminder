import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import admin from 'firebase-admin';

admin.initializeApp();

// Firestoreにアクセス
const db = admin.firestore();

// const PORT = process.env.PORT || 3000;
// const HOST = process.env.HOST || 'localhost';
// const PORT2 = 4200;
// const PORT3 = 6060;
// const PORT5 = 9090;
const PORT7 = 3001;
const app = express();
// const app2 = express();
// const app3 = express();
// const app5 = express();

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
// app2.use(express.json());
// app3.use(express.json());
// app5.use(express.json());
// CORSミドルウェアを使用

app.use(cors(corsOptions));
// app2.use(cors(corsOptions));
// app3.use(cors(corsOptions));
// app5.use(cors(corsOptions));

// app5.options('*', cors(corsOptions));

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

// app5.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

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
// app2.listen(PORT2, () => {
//   console.log(`Server is running on port ${PORT2}`);
// });
// app3.listen(PORT3, () => {
//   console.log(`Server is running on port ${PORT3}`);
// });
// app5.listen(PORT5, () => {
//   console.log(`Server is running on port ${PORT5}`);
// });

// // Firebase Functionsとしてエクスポート
// exports.apiX = functions.https.onRequest((req, res) => {
//   corsHandler(req, res, () => app2(req, res));
// });
// exports.api17 = functions.https.onRequest((req, res) => {
//   corsHandler(req, res, () => app3(req, res));
// });
exports.api = functions.https.onRequest((req, res) => {
  corsHandler(req, res, () => app(req, res));
});
// exports.api5 = functions.https.onRequest((req, res) => {
//   corsHandler(req, res, () => app5(req, res));
// });
