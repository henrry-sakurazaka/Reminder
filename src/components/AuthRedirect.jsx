// AuthRedirect.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRedirectResult } from 'firebase/auth';
import { auth } from '@/firebase';

const AuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getAuthResult = async () => {
      try {
        const result = await getRedirectResult(auth); // リダイレクト結果を取得
        if (result) {
          // 成功した場合、UserAuthコンポーネントに遷移
          navigate('/UserAuth');
        }
      } catch (error) {
        console.error('Error during authentication redirect:', error);
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
