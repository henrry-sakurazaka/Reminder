
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import FirstAuth from './FirstAuth';
import { mockAuth } from '../firebase'; // Firebase.js をインポート
import { getAuth } from 'firebase/auth'; // FirebaseのgetAuth関数をインポート
import { checkAuthentication } from './checkAuthentication'; // checkAuthentication関数をインポート
// import { auth, db, mockAuth } from '../firebase'; // Firebase.js をインポート
import { app, auth } from '../firebase'; // パスは適切な場所に変更してください


// Firebaseのモックを作成
const mockUser = { uid: 'test-user-id', email: 'test@example.com' };


// Polyfill for encoding which isn't present globally in jsdom
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}

if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}

setupTests.js

// ユーザーを認証状態にセット
mockAuth.autoFlush();
mockAuth.changeAuthState(mockUser);

// Firebase SDKのモックをセットアップ
// jest.mock('firebase/auth', () => ({
//   getAuth: jest.fn(() => mockAuth),
// }));

// test('redirects to /UserAuth if not authenticated', () => {
//   render(
//     <BrowserRouter>
//       <FirstAuth />
//     </BrowserRouter>
//   );

//   expect(screen.getByText('Redirecting to /UserAuth')).toBeInTheDocument();
// });

// test('renders FirstAuth component if authenticated', () => {
//   render(
//     <BrowserRouter>
//       <FirstAuth />
//     </BrowserRouter>
//   );

//   expect(screen.getByText('Hello, World!')).toBeInTheDocument();
// });

jest.mock('./checkAuthentication'); // checkAuthentication関数をモック化

describe('FirstAuth component', () => {
  test('redirects to /UserAuth if not authenticated', () => {
    checkAuthentication.mockReturnValue(false); // モック関数がfalseを返すように設定

    render(
      <BrowserRouter>
        <FirstAuth />
      </BrowserRouter>
    );

    expect(screen.getByText('Redirecting to /UserAuth')).toBeInTheDocument();
  });

  test('renders FirstAuth component if authenticated', () => {
    checkAuthentication.mockReturnValue(true); // モック関数がtrueを返すように設定

    render(
      <BrowserRouter>
        <FirstAuth />
      </BrowserRouter>
    );

    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});