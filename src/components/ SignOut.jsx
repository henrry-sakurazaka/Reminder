import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';


function SignOut() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleSignOut = async () => {
  
        await signOut(auth);
        setTimeout(() => navigate('/UserAuth'), 10000); 
    };

    handleSignOut();
    localStorage.clear();

  }, [navigate]);
}

export default SignOut;
