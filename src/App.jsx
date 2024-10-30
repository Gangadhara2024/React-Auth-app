import { useRef, useState } from "react";
import "./App.css";
import Signup from "./AUTH/Signup";
import "./signup.scss";
import AuthApi from "./AUTH/AuthApi";
import Login from "./AUTH/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./AUTH/Dashboard";

const App = () => {
  const authRef = useRef(AuthApi());
  console.log(authRef.current);

  return (
    <div className="main-div">
      <BrowserRouter>
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
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
