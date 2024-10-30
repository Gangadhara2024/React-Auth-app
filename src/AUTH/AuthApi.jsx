import axios from "axios";

const AuthApi = () => {
  const Signup = async (signupinfo) => {
    try {
      const response = await axios({
        url: "https://node-auth-jwt-w78c.onrender.com/auth/signup",
        method: "POST",
        data: signupinfo,
      });
      return { success: true };
    } catch (error) {
      alert("signup failed");
      return { success: false };
    }
  };

  const login = async (credentials) => {
    try {
      const response = await axios({
        url: "https://node-auth-jwt-w78c.onrender.com/auth/login",
        method: "POST",
        data: credentials,
      });
      return { success: true };
    } catch (error) {
      alert("login failed");
      return { success: false };
    }
  };

  return { Signup, login };
};

export default AuthApi;
