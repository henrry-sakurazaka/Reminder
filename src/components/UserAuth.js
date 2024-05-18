import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
import { useTodos } from "../context/TodoContext";
import { useEffect } from "react";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
// import SignOut from "./ SignOut";
import "./UserAu.css";

const auth = getAuth();

const UserAuth = () => {
    
    const navigate = useNavigate();

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
    
    // const handleClickTrial = () => {
    //     history.push('/Trial');
    // }

    return (
            
                <div className="container">
                    <div className="inner9-container">
                        <span className="select-auth" onClick={() => handleClickSignUp()}>Sign Up</span>
                        <span className="select-auth" onClick={() => handleClickSignIn()}>Sign In</span>
                        <span className="select-auth" onClick={() => handleClickSignOut()}>Sign Out</span>
                        {/* <span onClick={() => handleClickTrial()}>お試しログイン</span> */}
                    </div>
                </div>

    )
}

export default UserAuth;