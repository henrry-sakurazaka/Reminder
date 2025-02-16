
// import { auth } from "../firebase.config";
// import { useNavigate } from "react-router-dom"; // 追加1

// function Main() {
//     const [formData, setFormData] = useState({
//         name: auth.currentUser.displayName,
//         email: auth.currentUser.email,
//     });
// const { name, email } = formData;
// const navigate = useNavigate(); // 追加2

// // 追加3
// const onLogout = () => {
//     auth.signOut();
//     navigate("/");
//     };

// return (
//     <div>
//         <p>{name}</p>
//         <p>{email}</p>

//         // 追加4
//         <button type="button" onClick={onLogout}>
//         Logout
//         </button>

//      </div>
//     );
//  }

// export default Main;

