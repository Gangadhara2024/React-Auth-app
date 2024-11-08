import React from "react";
import Sidebar from "./Sidebar";
import ContentPage from "./ContentPage";
import "./contentpage.scss";
import { Dropdown, Space } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updateAuth } from "../../REDUX-AUTH/Authslice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dropdownBTN = () => {
    dispatch(updateAuth(false));
    localStorage.removeItem("token");
    navigate("/login");
  };

  const items = [
    {
      key: "1",
      label: (
        <span
          onClick={dropdownBTN}
          style={{ fontSize: "15px", fontWeight: 700 }}
        >
          Log-out
        </span>
      ),
    },
  ];

  return (
    <>
      <div className="dashmain">
        <div className="dropdown">
          <Dropdown
            menu={{
              items,
            }}
          >
            <button>
              <Space>Device Logout</Space>
            </button>
          </Dropdown>
        </div>

        <div className="comp">
          <Sidebar />
          <ContentPage />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
