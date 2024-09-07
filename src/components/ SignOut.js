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
        setTimeout(() => navigate('/UserAuth'), 10000);

       } catch (error) {
        console.error('ログアウトエラー:', error);
      }
    };

    handleSignOut();
    localStorage.clear();

  }, [navigate]);
  return (
     <div>Signed Out successfully</div>
  )
}

export default SignOut;
