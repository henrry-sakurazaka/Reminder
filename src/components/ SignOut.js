import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';


function SignOut() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleSignOut = async () => {
      try {
        await signOut(auth);
        navigate('/UserAuth'); // ログアウト後にリダイレクトする場所を指定します
      } catch (error) {
        console.error('ログアウトエラー:', error);
      }
    };

    handleSignOut();
    localStorage.clear();

  }, [navigate]);

  return null; // ログアウトの間は何も表示しないためnullを返します
}

export default SignOut;
