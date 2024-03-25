

import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase.config";

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
    navigate("/");
    }
} catch (error) {
    console.log(error);
    }
};

return (
<div>
    <form onSubmit={onSubmit}>

    <input
        type="email"
        placeholder="Email"
        id="email"
        value={email}
        required
        onChange={onChange}
    />
    <input
        type="password"
        placeholder="Password"
        id="password"
        value={password}
        required
        onChange={onChange}
    />
    <button type="submit">
        Submit
        </button>
    </form>
</div>
);
}

export default SignIn;

