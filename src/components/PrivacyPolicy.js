import React from "react";
import { useNavigate } from "react-router-dom";
import './privacy.css';

const PrivercyPolycy = () => {

    const navigate = useNavigate();
    const backToPage = () => {
        navigate('/SignUp');
    }


    return (
    
        <div className="container">
            <a href="https://www.privacypolicies.com/live/d955508c-375b-408d-8206-18852254e629">PrivacyPolicy</a>
            <nav onClick={() => backToPage()}>Back to Sign Up</nav>
        </div>
    )
}

export default PrivercyPolycy;