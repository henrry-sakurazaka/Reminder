import React from 'react';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthCheck from './components/AuthCheck';
import Example from './components/Example';
import Example1 from './components/Example1';
import FirstAuth from './components/FirstAuth';
import UserAuth from './components/UserAuth';
import SignOut from './components/SignOut';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import EasyLogin from './components/EasyLogin';
import DeleteAccount from './components/DeleteAccount';
import AuthRedirect from './components/AuthRedirect';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import Terms2 from './components/Terms2';
// import ErrorBoundary from "./components/ErrorBoundary";

// const router = createBrowserRouter(
//   [
//     { path: "/", element: <FirstAuth /> },
//     { path: "/Example", element: <Example /> },
//     { path: "/UserAuth", element: <UserAuth /> },
//     { path: "/SignOut", element: <SignOut /> },
//     { path: "/SignUp", element: <SignUp /> },
//     { path: "/SignIn", element: <SignIn /> },
//     { path: "/EasyLogin", element: <EasyLogin /> },
//     { path: "/DeleteAccount", element: <DeleteAccount /> },
//     { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
//     { path: "/Terms", element: <Terms /> },
//     { path: "/Terms2", element: <Terms2 /> },
//   ],
//   {
//     future: {
//       v7_startTransition: true,    // React.startTransition を v7 仕様に
//       v7_relativeSplatPath: true,  // Splat ルートの仕様変更を適用
//     },
//   }
// );

export default function App() {
  // return (
  //   <ErrorBoundary>
  //     <RouterProvider router={router} />
  //   </ErrorBoundary>
  // );
  return (
    // <ErrorBoundary></ErrorBoundary>
    <div className="App">
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<FirstAuth />} />
          <Route path="/AuthCheck" element={<AuthCheck />} />
          <Route path="/AuthRedirect" element={<AuthRedirect />} />
          <Route path="/Example" element={<Example />} />
          <Route path="/Example1" element={<Example1 />} />
          <Route path="/Example" element={<Example />} />
          <Route path="/UserAuth" element={<UserAuth />} />
          <Route path="/SignOut" element={<SignOut />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/EasyLogin" element={<EasyLogin />} />
          <Route path="/DeleteAccount" element={<DeleteAccount />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Terms2" element={<Terms2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
