import React from 'react';
import Example from './Example';
import { TodoProvider } from '../context/TodoContext';
import { onAuthStateChanged } from 'firebase/auth';
import { useTodos } from '../context/TodoContext';
import { useEffect } from 'react';
import { auth } from '@/firebase';
import UserAuth from './UserAuth';

const AuthCheck = () => {
  const { isReady, setIsReady } = useTodos() || {};

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // ユーザーがログイン済み → FirestoreなどにアクセスOK
        setIsReady(true);
      } else {
        // 未ログイン → リダイレクトやスキップ
        setIsReady(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return <>{isReady ? <Example /> : <UserAuth />}</>;
};

export default AuthCheck;
