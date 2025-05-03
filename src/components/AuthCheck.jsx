import React from 'react';
import Example from './Example';
import { onAuthStateChanged } from 'firebase/auth';
import { useTodos } from '../context/TodoContext';
import { useEffect } from 'react';
import { auth } from '@/firebase';
import AuthRedirect from './AuthRedirect';

const AuthCheck = () => {
  const { isReady, setIsReady } = useTodos() || {};

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // ユーザーがログイン済み → FirestoreなどにアクセスOK
        setIsReady(true);
        console.log('isReady', isReady);
      } else {
        // 未ログイン → リダイレクトやスキップ
        setIsReady(false);
        console.log('isReady', isReady);
      }
    });
    return () => unsubscribe();
  }, []);

  return <>{isReady ? <Example /> : <AuthRedirect />}</>;
};

export default AuthCheck;
