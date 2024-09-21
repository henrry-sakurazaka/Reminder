import React from "react";
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
    const [ agree, setAgree ] = useState(false);
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

    const spans = [1, 2, 3, 4, 5]; // spanの数だけ適当な配列を作成fi

    const getColor = () => "rgba(40, 147, 247, 0.772)" 
  


    const onChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const agreement = () => {
      setAgree(true);
    }
    const navigateTerms = () => {
      navigate('/Terms')

    }
    const navigateTerms2 = () => {
      navigate('/Terms2')

    }
    const navigatePolicy = () => {
      navigate('/PrivacyPolicy');
    }

    const navigationHandler = () => {
      navigate('/UserAuth')
  }

      const onSubmit = async (e) => {
        e.preventDefault();
        try {
          // パスワードの長さが 6 文字未満の場合にエラーを表示する
          if (password.length < 6) {
            throw new Error("Password must be at least 6 characters long.");
          }
          if (agree) {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User signed up successfully:", user);
            // ユーザーの表示名を設定する
            await updateProfile(auth.currentUser, {
              displayName: name,
            });
            const convertedData = todosConverter2.toFirestore(todoList);
            const dataWithUid = { todoId: user.uid, agreement: agree, todos: convertedData };
               // サインアップ成功時にtodoListを保存する
          
            if(auth.currentUser) {
              await setDoc(doc(firestore, "todoList3", user.uid), dataWithUid);
      
            } else {
              throw new Error( "User is not authenticated.");
            }
         
            navigate('/Example');

          } else {
            return (
              <div>
                <h2>Agreement Required 利用規約に同意が必要です。</h2>
              </div>
            )
          }
         
        } catch (error) {  
          alert(error.message);
          if (error.code === 'auth/email-already-in-use') {
            alert('This email is already in use. Please use a different email.');
          } else {
            console.error('Error signing up:', error.message);
            alert(error.message);
          }
        }
      };

    return (
      <>
       <div className="triangle"></div>
            <div className="decoration">
                {spans.map((_, index) => (
                <span 
                    key={index} 
                    className="slash" 
                    style={{ backgroundColor: getColor() }}
                ></span>
                ))}
            </div>
        <span className="back" onClick={navigationHandler}>Back To Auth</span>
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

                    <ul className="agreement-resource">
                      <li className="terms" onClick={() => navigateTerms()} >Terms of Service Japanese</li>
                      <li className="terms2" onClick={() => navigateTerms2()} >Terms of Service English</li>
                      <li className="policy" onClick={() => navigatePolicy()} >PrivacyPolicy</li>
                      <p className="request">Request Agreement for Terms of Service</p>
                    </ul>
                
                    <div className="inner-container2">
                      
                       <input type="checkbox"  className="agree-check" 
                        onClick={() => agreement()}
                       />
                       <div className="agree-container">
                            <span className="important" style={{color: agree ? "rgb(8, 232, 158)" : "rgba(40, 147, 247, 0.772)"}} >
                             { agree ? 'Agreed' : 'Agree' }
                            </span>
                       </div>   
                    </div>
                      
                    <button type="submit" className="form-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
      </>
      
    );
}

export default SignUp;
