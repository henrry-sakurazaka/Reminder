// AuthRedirect.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRedirectResult } from 'firebase/auth';
import { auth } from '@/firebase';
import { useTodos } from '../context/TodoContext';

const AuthRedirect = () => {
  const navigate = useNavigate();
  const { isReady, setIsReady } = useTodos() || {};

  useEffect(() => {
    const getAuthResult = async () => {
      try {
        const result = await getRedirectResult(auth); // リダイレクト結果を取得
        if (!result) {
          setIsReady(false);
          navigate('/UserAuth');
        } else {
          setIsReady(true);
          navigate('/Example');
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
