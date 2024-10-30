import { Alert, Button, Form, Input } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ auth }) => {
  const [apistatus, setApistatus] = useState("init");
  const navigate = useNavigate();

  const submitlogin = async (logininfo) => {
    setApistatus("pending");
    const { success } = await auth.login(logininfo);
    if (success) {
      setApistatus("loginSuccess");
      navigate("/dashboard");
    } else {
      setApistatus("error");
    }
  };
  return (
    <div className="form">
      <Form layout="vertical" onFinish={submitlogin}>
        <h1>Login Form</h1>
        {apistatus === "loginSuccess" && (
          <Alert
            type="success"
            message="login succesfull... redirected to dashboard. "
            showIcon
            closable
          />
        )}
        {apistatus === "error" && (
          <Alert type="error" message="login un-succesfull" showIcon closable />
        )}
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "enter valid email" }]}
        >
          <Input placeholder="enter email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "enter correct password" }]}
        >
          <Input.Password placeholder="enter password" />
        </Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          block
          loading={apistatus === "pending"}
        >
          Login
        </Button>
        <p>
          Don't have account!
          <Link to="/signup" className="link">
            Signup
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
