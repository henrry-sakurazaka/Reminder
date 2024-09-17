import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
import "./UserAu.css";


const auth = getAuth();


const UserAuth = () => {   
    const navigate = useNavigate();
    let num = 5;
    let spans = [];

    for(let i = 0; i < num; i++) {
        spans.push(i);
    }
    // const spans = [1, 2, 3, 4, 5]; // spanの数だけ適当な配列を作成
    const [ isSignOut , setIsSignOut ] = useState(false);
    const getColor = () => "rgba(40, 147, 247, 0.772)";
    const getColor2 = () => "rgba(40, 147, 247, 0.772)";

  

    const handleClickSignUp = () => {
        navigate('/SignUp');
    }
    const handleClickSignIn = () => {
        navigate('/SignIn');
    }

    const handleClickSignOut = () => {
        signOut(auth).then(() => {
            console.log('ログアウトしました');
            setIsSignOut(true);
            localStorage.clear();

        }).catch((error) => {
            // エラー発生時の処理
            console.error('ログアウトエラー:', error);
        });
    }

    const message = () => {
        if(isSignOut) {
            return (
                <div className='sign-out'>
                  <h3>Signed Out successfully</h3>
                </div>
             )
        }   
    }
    
    const handleClickEasyLogin = () => {
        navigate('/EasyLogin');
    }

    const handleDeleteAccount = () => {
        navigate('/DeleteAccount');
    }

    return (
        <> 
         <div className="decoration">
                    {spans.map((_, index) => (
                    <span 
                        key={index} 
                        className="slash" 
                        style={{ backgroundColor: getColor() }}
                    ></span>
                    ))}
                </div>
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
                { message() }
            </div> 
        </> 
    )
}

export default UserAuth;