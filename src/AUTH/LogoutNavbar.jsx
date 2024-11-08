import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const LogoutNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutbtn = () => {
    dispatch(updateAuth(false));
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <button onClick={logoutbtn}>logout</button>
    </div>
  );
};

export default LogoutNavbar;
