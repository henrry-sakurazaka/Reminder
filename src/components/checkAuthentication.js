// import { getAuth, onAuthStateChanged } from 'firebase/auth';

// const auth = getAuth();

// const checkAuthentication = () => {
//   return new Promise((resolve, reject) => {
//     // ユーザーのログイン状態を監視する
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // ユーザーがログインしている場合は認証された状態として扱う
//         resolve(true);
//       } else {
//         // ユーザーがログインしていない場合は未認証状態として扱う
//         resolve(false);
//       }
//     });
//   });
// };

// export default checkAuthentication;

// import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const auth = getAuth();

// // ログアウト処理を実行
// export function signOutUser() {
//   return signOut(auth)
//     .then(() => {
//       // ログアウト成功時の処理
//       console.log('ログアウトしました');
//     })
//     .catch((error) => {
//       // エラー発生時の処理
//       console.error('ログアウトエラー:', error);
//     });
// }

// export function checkAuthentication() {
//   return new Promise((resolve, reject) => {
//     // ユーザーのログイン状態を監視する
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // ユーザーがログインしている場合は認証された状態として扱う
//         resolve(true);
//       } else {
//         // ユーザーがログインしていない場合は未認証状態として扱う
//         resolve(false);
//       }

//       // 監視を停止する
//       unsubscribe();
//     });
//   });
// }

// export function PrivateRoute({ children }) {
//   const navigate = useNavigate();

//   useEffect(() => {
//     checkAuthentication().then((authenticated) => {
//       if (!authenticated) {
//         navigate('/UserAuth'); // ログインしていない場合は認証ページにリダイレクト
//       }
//     });
//   }, [navigate]);

//   return children;
// }

// import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const auth = getAuth();

// export function signOutUser() {
//   return signOut(auth)
//     .then(() => {
//       console.log('ログアウトしました');
//     })
//     .catch((error) => {
//       console.error('ログアウトエラー:', error);
//     });
// }
// export function checkAuthentication() {
//   return new Promise((resolve, reject) => {
//     const currentUser = getAuth().currentUser;
//     if (currentUser) {
//       resolve(true); // ユーザーが認証済み
//     } else {
//       resolve(false); // ユーザーが認証されていない
//     }

//     // onAuthStateChanged の監視はここで開始しても問題ありません
//     const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
//       if (user) {
//         resolve(true);
//       } else {
//         resolve(false);
//       }
//       unsubscribe(); // 監視を停止
//     });
//   });
// }

// export function checkAuthentication() {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       console.log("onAuthStateChanged callback executed");
//       if (user) {
//         resolve(true);
//       } else {
//         console.log("No authenticated user");
//         resolve(false);
//       }

//       unsubscribe();
//       if (user) {
//         resolve(true);
//       } else {
//         resolve(false);
//       }

//       unsubscribe();
//     });
//   });
// }

// export function PrivateRoute({ children }) {
//   const navigate = useNavigate();

//   useEffect(() => {
//     checkAuthentication().then((authenticated) => {
//       if (!authenticated) {
//         navigate('/UserAuth');
//       }
//     });
//   }, [navigate]);

//   return children;
// }

// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const auth = getAuth();

// export function checkAuthentication() {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       console.log("onAuthStateChanged callback executed");
//       if (user) {
//         resolve(true);
//       } else {
//         console.log("No authenticated user");
//         resolve(false);
//       }

//       unsubscribe(); // 監視を停止
//     });
//   });
// }

// export function PrivateRoute({ children }) {
//   const navigate = useNavigate();

//   useEffect(() => {
//     checkAuthentication().then((authenticated) => {
//       if (!authenticated) {
//         navigate('/UserAuth');
//       }
//     });
//   }, [navigate]);

//   return children;
// }

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const auth = getAuth();

export function checkAuthentication() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(true); // ユーザーが認証済み
  
      } else {
        resolve(false); // ユーザーが認証されていない
        console.log('no')
      }
      unsubscribe(); // 監視を停止
    });
  });
}

export function PrivateRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthentication().then((authenticated) => {
      if (!authenticated) {
        navigate('/UserAuth');
        console.log('認証されてません。')
      } 
    });
  }, [navigate]);

  return children;
}
