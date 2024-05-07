
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase";
import "./SignIn.css";

    function SignIn() {
            const [formData, setFormData] = useState({
                    email: "",
                    password: "",
            });
            const { email, password } = formData;
            const navigate = useNavigate();

            const onChange = (e) => {
                setFormData({
                ...formData,
                [e.target.id]: e.target.value,
                });
            };

            const onSubmit = async (e) => {
            e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
            );
        if (userCredential.user) {
            navigate("/Example");
            }
            
        } catch (error) {
            console.log(error);
            }
        };

        return (
            <div className="auth-container">
                <div className="outline-container">
                <form onSubmit={onSubmit}>

                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={email}
                    required
                    onChange={onChange}
                    className="form-input"
                    autoComplete="email"
                />
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    required
                    onChange={onChange}
                    className="form-input"
                    autoComplete="current-password"
                />
                <button type="submit" className="form-button">
                    Submit
                    </button>
                </form>
            </div>
            </div>
            
            );
        }

export default SignIn;

