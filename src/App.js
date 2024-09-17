import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./components/Example";
import FirstAuth from "./components/FirstAuth";
import UserAuth from "./components/UserAuth";
import SignOut from "./components/ SignOut";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import EasyLogin from "./components/EasyLogin";
import DeleteAccount from "./components/DeleteAccount";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";
import Terms2 from "./components/Terms2";


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
          <Route path="/EasyLogin" element={<EasyLogin/>} />
          <Route path="/DeleteAccount" element={<DeleteAccount/>} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
          <Route path="/Terms" element={<Terms/>} />
          <Route path="/Terms2" element={<Terms2/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

