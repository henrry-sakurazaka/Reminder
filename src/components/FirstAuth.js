

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrivateRoute, checkAuthentication } from './checkAuthentication';
import Example from './Example';
import UserAuth from './UserAuth';




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

  // アプリのメインコンテンツを返す
  return (
    <>
      {authenticated ? (
        <div>
          <PrivateRoute>
            <Example />
          </PrivateRoute>
        </div>
      ) : (
        <div>
          <PrivateRoute>
            <UserAuth/>
          </PrivateRoute>
        </div>
      )}
    </>
  );
}

export default FirstAuth;
