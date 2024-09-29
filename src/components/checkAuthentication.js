import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const auth = getAuth();

export function checkAuthentication() {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(true); // ユーザーが認証済み
  
      } else {
        resolve(false); // ユーザーが認証されていない
      }
      unsubscribe(); // 監視を停止
    });
  });
}

export function PrivateRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthentication().then((authenticated) => {
      if (!authenticated) {
        navigate('/UserAuth');
      } 
    });
  }, [navigate]);

  return children;
}
