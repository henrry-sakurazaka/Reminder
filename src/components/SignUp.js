
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./SignUp.css";

function SignUp() {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = formData;
    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            // パスワードの長さが 6 文字未満の場合にエラーを表示する
            if (password.length < 6) {
                throw new Error("Password must be at least 6 characters long.");
            }

            // const userCredential = await createUserWithEmailAndPassword(
            //     auth,
            //     email,
            //     password
            // );

            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log("User signed up successfully:");

            // ユーザーの表示名を設定する
            await updateProfile(auth.currentUser, {
                displayName: name,
            });

            navigate("/SignIn");
        } catch (error) {
            // エラーをコンソールにログ出力するだけではなく、ユーザーにエラーを表示することも考慮する
            console.error('error signing up');
            // エラーメッセージを表示するなど、適切なユーザー通知を行う
        }
    };

    return (
        <div className="auth-container">
            <div className="outline-container">
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        id="name"
                        value={name}
                        required
                        onChange={onChange}
                        className="form-input"
                        autoComplete="name"
                    />
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

export default SignUp;
