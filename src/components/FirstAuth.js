

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrivateRoute, checkAuthentication } from './checkAuthentication';
import Example from './Example';
import UserAuth from './UserAuth';
import { TodoProvider } from '../context/TodoContext';




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
            <TodoProvider>
              <Example />
            </TodoProvider>
          </PrivateRoute>
        </div>
      ) : (
        <div>
          <PrivateRoute>
            <TodoProvider>
              <UserAuth/>
            </TodoProvider>
          </PrivateRoute>
        </div>
      )}
    </>
  );
}

export default FirstAuth;
