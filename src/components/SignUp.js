
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore} from "../firebase";
import { doc, setDoc } from 'firebase/firestore';
import "./SignUp.css";


const todoList = [
    {
      title: "Make a restaurant reservation",
      description: "user tasks",
      type: "string",
      id: 1,
      content: "Make a restaurant reservation",
      editing: false,
      completed: false,
      reserve: false,
      editingLock: false,
      editingColor: false,
      editingDateTime: false,
      notification: false
    },
    { 
      title: "send a letter",
      description: "user tasks",
      type: "string",
      id: 2,
      content: "send a letter",
      editing: false,
      completed: false,
      reserve: false,
      editingLock: false,
      editingColor: false,
      editingDateTime: false,
      notification: false
    },
    {
      title: "buy flowers",
      description: "user tasks",
      type: "string",
      id: 3,
      content: "buy flowers",
      editing: false,
      completed: false,
      reserve: false,
      editingLock: false,
      editingColor: false,
      editingDateTime: false,
      notification: false
    }
  ];

 
function SignUp() {

    const todosConverter2 = useMemo(() => {
        return {
          toFirestore: (todos) => {
            const todosArray = Object.values(todos);
            const firestoreData = {};
            todosArray.forEach((todo, index) => {
              firestoreData[index.toString()] = {
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
                notification: todo.notification
              };
            });
            return firestoreData;
          }
        };
      }, []);
        
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = formData;
    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

      const onSubmit = async (e) => {
        e.preventDefault();
        try {
          // パスワードの長さが 6 文字未満の場合にエラーを表示する
          if (password.length < 6) {
            throw new Error("Password must be at least 6 characters long.");
          }
    
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          console.log("User signed up successfully:", user);
    
          // ユーザーの表示名を設定する
          await updateProfile(auth.currentUser, {
            displayName: name,
          });
          const convertedData = todosConverter2.toFirestore(todoList);
          const dataWithUid = { todoId: user.uid, todos: convertedData };

          // サインアップ成功時にtodoListを保存する
          await setDoc(doc(firestore, "todoList3", user.uid), dataWithUid);
    
          navigate('/Example');
        } catch (error) {
          // エラーをコンソールにログ出力するだけではなく、ユーザーにエラーを表示することも考慮する
          console.error('Error signing up:', error.message);
          // エラーメッセージを表示するなど、適切なユーザー通知を行う
          alert(error.message);
        }
      };

    return (
        <div className="auth-container">
            <div className="outline-container">
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        id="name"
                        value={name}
                        required
                        onChange={onChange}
                        className="form-input"
                        autoComplete="name"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        value={email}
                        required
                        onChange={onChange}
                        className="form-input"
                        autoComplete="email"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        value={password}
                        required
                        onChange={onChange}
                        className="form-input"
                        autoComplete="current-password"
                    />
                    <button type="submit" className="form-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
