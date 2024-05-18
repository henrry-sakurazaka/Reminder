// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./components/Example";
import FirstAuth from "./components/FirstAuth";
import UserAuth from "./components/UserAuth";
import SignOut from "./components/ SignOut";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import FirstAddTodos, { FirstAddTodosProvider } from "./components/FirstAddLogic";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstAuth/>} />
          <Route path="/Example" element={<Example/>} />
          <Route path="/UserAuth" element={<UserAuth/>} />
          <Route path="/SignOut" element={<SignOut/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/FirstAddLogic" element={<FirstAddTodosProvider/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}


