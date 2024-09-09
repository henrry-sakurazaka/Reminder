import React from "react";
import { useNavigate } from "react-router-dom";
// import './privacy.css'

const Terms = () => {

    const navigate = useNavigate();
    const backToPage = () => {
        navigate('/SignUp');
    }

    return (
    
        <div className="container">
            <embed src="/VN3Licence-Ja.pdf" type="application/pdf" width="100%" height="1000px" />
            <nav onClick={() => backToPage()} >Back to Sign Up</nav>
        </div>
    )
}

export default Terms;