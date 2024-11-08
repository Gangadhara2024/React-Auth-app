import { useRef, useState } from "react";
import "./App.css";
import Signup from "./AUTH/Signup";
import "./signup.scss";
import AuthApi from "./AUTH/AuthApi";
import Login from "./AUTH/Login";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./AUTH/Dashboard";
import Header from "./AUTH/Header";
import { useSelector } from "react-redux";

const App = () => {
  const authRef = useRef(AuthApi());
  const loginStatus = useSelector((item) => item.auth.isLoggedIn);
  console.log(loginStatus);

  if (!loginStatus) {
    return (
      <BrowserRouter>
        <div className="main-div">
          <Header />
          <Routes>
            <Route
              path="signup"
              element={
                <div className="container">
                  <Signup auth={authRef.current} />
                </div>
              }
            />
            <Route
              path="login"
              element={
                <div className="container">
                  <Login auth={authRef.current} />
                </div>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    );
  }
};

export default App;
