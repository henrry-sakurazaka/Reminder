import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
import "./UserAu.css";


const auth = getAuth();

const UserAuth = () => {   
    const navigate = useNavigate();

    const spans = [1, 2, 3, 4, 5]; // spanの数だけ適当な配列を作成fi

    // const getColor = () => "rgb(8, 232, 158)";
    const getColor = () => "rgba(40, 147, 247, 0.772)";
    const getColor2 = () => "yellowGreen";

  

    const handleClickSignUp = () => {
        navigate('/SignUp');
    }
    const handleClickSignIn = () => {
        navigate('/SignIn');
    }
    const handleClickSignOut = () => {
        // ログアウト処理を行う
        signOut(auth).then(() => {
            // ログアウト成功時の処理
            console.log('ログアウトしました');
            // ログアウト後にリダイレクトする
            navigate('/UserAuth');
        }).catch((error) => {
            // エラー発生時の処理
            console.error('ログアウトエラー:', error);
        });
    }
    
    const handleClickEasyLogin = () => {
        navigate('/EasyLogin');
    }

    const handleDeleteAccount = () => {
        navigate('/DeleteAccount');
    }

    return (
        <> 
            <div className="container">
            <div className="decoration-container">
                <div className="decoration2">
                    {spans.map((_, index) => (
                    <span 
                        key={index} 
                        className="slash2" 
                        style={{ backgroundColor: getColor2() }}
                    ></span>
                    ))}
                </div>
            </div>
                <div className="circle2">
                    <div className="inner9-container">
                        <span className="select-auth" onClick={() => handleClickSignUp()}>Sign Up</span>
                        <span className="select-auth" onClick={() => handleClickSignIn()}>Sign In</span>
                        <span className="select-auth" onClick={() => handleClickSignOut()}>Sign Out</span>
                        <span className="select-auth" onClick={() => handleClickEasyLogin()}>お試しログイン</span>
                        <span className="select-auth" onClick={() => handleDeleteAccount()}>Delete Account</span>
                    </div>
                </div> 
            </div>
        </>
        
    )
}

export default UserAuth;