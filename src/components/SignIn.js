import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, app } from "../firebase"; // authのみをインポート
// import { firebase } from "../firebase"; // firebase.messagingをインポート
import axios from "axios";
import "./SignIn.css";

// const { auth, messaging } = firebase;

function SignIn() {
  // デバイストークンを取得する関数
  const getDeviceToken = async () => {
    const messaging = app.messaging();
    try {
      const currentToken = await messaging.getToken();
      console.log("Device Token:", currentToken);
      return currentToken;
    } catch (error) {
      console.log("Error getting device token:", error);
      return null;
    }
  };

  // サーバーにトークンを送信する関数
  const sendTokensToServer = async (idToken, deviceToken) => {
    try {
      const response = await axios.post("/api/saveTokens", {
        idToken: idToken,
        deviceToken: deviceToken,
      });
      console.log("Server response:", response.data);
    } catch (error) {
      console.log("Error sending tokens to server:", error);
    }
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        const idToken = await userCredential.user.getIdToken();
        // const deviceToken = await getDeviceToken(); // デバイストークンを取得
        // await sendTokensToServer(idToken, deviceToken); // トークンをサーバーに送信
        navigate("/Example");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-container">
      <div className="outline-container">
        <form onSubmit={onSubmit}>
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

export default SignIn;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth"
// import { auth } from "../firebase";
// import "./SignIn.css";
// import axios from "axios"; 

//     function SignIn() {
//             const [formData, setFormData] = useState({
//                     email: "",
//                     password: "",
//             });
//             const { email, password } = formData;
//             const navigate = useNavigate();

//             const onChange = (e) => {
//                 setFormData({
//                 ...formData,
//                 [e.target.id]: e.target.value,
//                 });
//             };

//             const onSubmit = async (e) => {
//             e.preventDefault();
//         try {
//             const userCredential = await signInWithEmailAndPassword(
//             auth,
//             email,
//             password
//             );

//             if (userCredential.user) {
//                 const idToken = await userCredential.user.getIdToken();
//                 const deviceToken = await getDeviceToken(); // デバイストークンを取得する関数
//                 await sendTokensToServer(idToken, deviceToken); // サーバーにトークンを送信する関数
//                 console.log("ID Token:", idToken);
//                 navigate("/Example");
//             } 

//                     // サーバーにトークンを送信する関数
//             const sendTokensToServer = async (idToken, deviceToken) => {
//                 try {
//                     const response = await axios.post("/api/saveTokens", {
//                         idToken: idToken,
//                         deviceToken: deviceToken,
//                     });
//                     console.log("Server response:", response.data);
//                 } catch (error) {
//                     console.log("Error sending tokens to server:", error);
//                 }
//          };

//         } catch (error) {
//             console.log(error);
//             }
//         };

//         return (
//             <div className="auth-container">
//                 <div className="outline-container">
//                 <form onSubmit={onSubmit}>

//                 <input
//                     type="email"
//                     placeholder="Email"
//                     id="email"
//                     value={email}
//                     required
//                     onChange={onChange}
//                     className="form-input"
//                     autoComplete="email"
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     id="password"
//                     value={password}
//                     required
//                     onChange={onChange}
//                     className="form-input"
//                     autoComplete="current-password"
//                 />
//                 <button type="submit" className="form-button">
//                     Submit
//                     </button>
//                 </form>
//             </div>
//             </div>
            
//             );
//         }

// export default SignIn;

