import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <button className="btns" onClick={() => navigate("/signup")}>
          Signup
        </button>
        <button className="btns" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
