// __mocks__/firebase/auth.js
<<<<<<< HEAD

// モックのinitializeAuth関数を定義
export function initializeAuth() {
    // モックのAuthオブジェクトを返す
    return {
      // signInWithEmailAndPasswordメソッドのモック
      signInWithEmailAndPassword: (email, password) => {
        // ここでは単純に成功したことを返す
        return Promise.resolve({ user: { email } });
      },
      
      // createUserWithEmailAndPasswordメソッドのモック
      createUserWithEmailAndPassword: (email, password) => {
        // ここでは単純に成功したことを返す
        return Promise.resolve({ user: { email } });
      },
      
      // 他の必要なメソッドやプロパティをここに追加する
    };
  }
  
=======
/* eslint-disable no-console */


// Firebase Authentication モックを作成
export const initializeAuth = jest.fn(() => {
  return {
    signInWithEmailAndPassword: jest.fn((email, password) => {
      console.log(`Email: ${email}, Password: ${password}`);
      return Promise.resolve({ user: { email } }); // メールアドレスを返す
     
    }),
    createUserWithEmailAndPassword: jest.fn((email, password) => {
      console.log(`Email: ${email}, Password: ${password}`);
      return Promise.resolve({ user: { email } }); // メールアドレスを返す
    }),
  };
});

// Firebase AuthのonAuthStateChangedメソッドをモック
export const onAuthStateChanged = jest.fn((auth, callback) => {
  const user = { uid: 'mocked-user-id', email: 'mocked-email@example.com' }; // モックのユーザーデータ
  callback(user); // コールバック関数にモックデータを渡す
});

// Firebase AuthのsignInWithEmailAndPasswordをモック
export const signInWithEmailAndPassword = jest.fn((auth, email, password) => {
  console.log(`Email: ${email}, Password: ${password}`);
  return Promise.resolve({ user: { uid: 'mocked-user-id', email } });
});
>>>>>>> development9
