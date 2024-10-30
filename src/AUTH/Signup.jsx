import { Alert, Button, Form, Input, Radio } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";

const Signup = ({ auth }) => {
  const [apistatus, setApistatus] = useState("init");
  const navigate = useNavigate();

  const sumbitsignup = async (data) => {
    setApistatus("pending");
    const { success } = await auth.Signup(data);
    if (success) {
      setApistatus("signupSuccess");
      navigate("/login");
    } else {
      setApistatus("error");
    }
  };
  return (
    <div className="form">
      <Form layout="vertical" onFinish={sumbitsignup}>
        <h1>Sign up Form</h1>
        {apistatus === "signupSuccess" && (
          <Alert
            type="success"
            message="signup succesfull please login! "
            showIcon
            closable
          />
        )}
        {apistatus === "error" && (
          <Alert
            type="error"
            message="signup un-succesfull"
            showIcon
            closable
          />
        )}
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "enter full name" }]}
        >
          <Input placeholder="enter name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "enter valid email" }]}
        >
          <Input placeholder="enter email" />
        </Form.Item>
        <Form.Item
          name="city"
          label="City"
          rules={[{ required: true, message: "enter city" }]}
        >
          <Input placeholder="enter city" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "enter correct password" }]}
        >
          <Input.Password placeholder="enter password" />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "enter gender" }]}
        >
          <Radio.Group>
            <Radio value="MALE">Male</Radio>
            <Radio value="FEMALE">Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          block
          loading={apistatus === "pending"}
        >
          Sign up
        </Button>
        <p>
          Already have a account! please
          <Link to="/login" className="link">
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Signup;
