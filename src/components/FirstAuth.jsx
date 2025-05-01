import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrivateRoute, checkAuthentication } from './checkAuthentication';
import Example from './Example';
// import UserAuth from './UserAuth';
import AuthRedirect from './AuthRedirect';

function FirstAuth() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false); // authenticatedを状態として宣言

  useEffect(() => {
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
          {authenticated ? <Example /> : <AuthRedirect />}
        </PrivateRoute>
      </div>
    </>
  );
}

export default FirstAuth;
