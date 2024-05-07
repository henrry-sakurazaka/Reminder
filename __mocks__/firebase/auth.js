// __mocks__/firebase/auth.js

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
  