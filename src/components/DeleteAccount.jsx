import React, { useState, useEffect } from 'react';
import { getAuth, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import "./delete.css";


const DeleteAccount = () => {
  const [showReauthenticateForm, setShowReauthenticateForm] = useState(false);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleReauthentication = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        const credential = EmailAuthProvider.credential(user.email, password);
        await reauthenticateWithCredential(user, credential);
        await deleteUserAccount();
      } catch (error) {
        setMessage(`再認証中にエラーが発生しました: ${error.message}`);
      }
    }
  };

  const deleteUserAccount = async () => {
    if (user) {
      try {
        await user.delete();
        setMessage('ユーザーアカウントが削除されました');
        setTimeout(() => navigate('/UserAuth'), 3000);

      } catch (error) {
        if (error.code === 'auth/requires-recent-login') {
          setShowReauthenticateForm(true);
        } else {
          setMessage(`アカウント削除中にエラーが発生しました: ${error.message}`);
          setTimeout(() => navigate('/UserAuth', 10000));
        }
      }
    } else {
      setMessage('サインインしているユーザーがいません');
      setTimeout(() => navigate('/UserAuth'), 10000);
    }
  };

  useEffect(() => {
    if (!showReauthenticateForm) {
      deleteUserAccount();
    }
  }, [showReauthenticateForm]);

  return (
    <div>
      {showReauthenticateForm ? (
        <div className='auth-container'>
        <div className='outline-container'>
          <h2>再認証</h2>
          <form onSubmit={handleReauthentication}>
            <div>
              <label>
                Password:
                <input className='form-input'
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
            </div>
            <button className='form-button'type="submit">Reauth</button>
          </form>
          <p>{message}</p>
        </div>
        </div>
      ) : (
        <div className='auth-container'>
            <div className='outline-container'>
                <h2>アカウント削除中...</h2>
                <p className='message'>{message}</p>
            </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAccount;
