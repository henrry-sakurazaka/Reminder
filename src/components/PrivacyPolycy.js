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
            <img/>
            <nav onClick={() => backToPage()}>Back to Sign Up</nav>
        </div>
    )
}

export default PrivercyPolycy;