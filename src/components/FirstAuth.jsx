import React from 'react';
import AuthCheck from './AuthCheck';
import Example from './Example';
import AuthRedirect from './AuthRedirect';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrivateRoute, checkAuthentication } from './checkAuthentication';
import { TodoProvider } from '../context/TodoContext';

function FirstAuth() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false); // authenticatedを状態として宣言

  useEffect(() => {
    checkAuthentication().then((authenticated) => {
      if (!authenticated) {
        navigate('/AuthRedirect'); // ログインしていない場合は認証ページにリダイレクト
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
          <TodoProvider>
            {authenticated ? <AuthCheck /> : <AuthRedirect />}
          </TodoProvider>
        </PrivateRoute>
      </div>
    </>
  );
}

export default FirstAuth;
