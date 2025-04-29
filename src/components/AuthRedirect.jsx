// AuthRedirect.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, getRedirectResult } from 'firebase/auth';
import { auth } from '../firebase'; // firebase.jsからインポート

const AuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getAuthResult = async () => {
      try {
        const result = await getRedirectResult(auth); // リダイレクト結果を取得
        if (result) {
          // 成功した場合、UserAuthコンポーネントに遷移
          navigate('/userAuth'); // 例：/userAuth
        }
      } catch (error) {
        console.error('Error during authentication redirect:', error);
        // 必要に応じてエラーハンドリング
      }
    };

    getAuthResult();
  }, [navigate]);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
};

export default AuthRedirect;
