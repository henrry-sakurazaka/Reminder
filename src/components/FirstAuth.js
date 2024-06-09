

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { initializeApp } from 'firebase/app';
import { PrivateRoute, checkAuthentication } from './checkAuthentication';
import Example from './Example';
import UserAuth from './UserAuth';

// const firebaseConfig = {
//   apiKey: "AIzaSyDq5hfrZ2bVxGxOsWX2bJhK3hynMttRHXc",
//   authDomain: "reminder-b4527.firebaseapp.com",
//   databaseURL: "https://reminder-b4527-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "reminder-b4527",
//   storageBucket: "reminder-b4527.appspot.com",
//   messagingSenderId: "968555995295",
//   appId: "1:968555995295:web:42d909b7393394b85502aa"
// };

function FirstAuth() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false); // authenticatedを状態として宣言

  useEffect(() => {
    // Firebaseの初期化
    // const firebaseApp = initializeApp(firebaseConfig);
    // Firebase Authenticationのインスタンスを取得
    // const auth = getAuth(firebaseApp);

     // Firebaseの初期化が完了したら認証状態を確認
    //  const checkAuth = async () => {
    //   const isAuthenticated = await checkAuthentication(auth); // checkAuthenticationはFirebase Authenticationの認証状態を確認する関数
    //   setAuthenticated(isAuthenticated);
    // };

    // Firebaseの初期化が完了したら認証状態を確認する
    // firebaseApp.firestore()
    //   .enablePersistence()
    //   .then(() => {
    //     console.log('Firebase initialization completed');
    //     checkAuth(); // Firebaseの初期化が完了したら認証状態を確認
    //   })
    //   .catch((error) => {
    //     console.error('Error initializing Firebase:', error);
    //   });
  
    //    // 認証状態が変更されたときのリスナーを追加
    // const unsubscribe = onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     setAuthenticated(true); // ユーザーが認証されている場合
    //   } else {
    //     setAuthenticated(false); // ユーザーが認証されていない場合
    //     navigate('/UserAuth'); // 認証ページにリダイレクト
    //   }
    // });

    // return () => unsubscribe(); // コンポーネントがアンマウントされるときにリスナーをクリーンアップ


    checkAuthentication().then((authenticated) => {
      if (!authenticated) {
        navigate('/UserAuth'); // ログインしていない場合は認証ページにリダイレクト
        
      } else {
        setAuthenticated(true);
      }
    });
  }, [navigate]);

   // 認証された場合はメインコンテンツを表示し、それ以外の場合はログインページにリダイレクト
   return (
    <>
      <div>
        <PrivateRoute>
          {authenticated ? <Example /> : <UserAuth />}
        </PrivateRoute>
      </div>
    </>
  );

  // // アプリのメインコンテンツを返す
  // return (
  //   <>
  //     {authenticated ? (
  //       <div> 
          
  //         <PrivateRoute>
  //             <Example /> 
  //         </PrivateRoute>
  //       </div>
  //     ) : (
  //       <div>
  //         <PrivateRoute>
  //             <UserAuth/>
  //         </PrivateRoute>
  //       </div>
  //     )}
  //   </>
  // );
}

export default FirstAuth;
