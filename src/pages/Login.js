import React, { useState } from "react";
import InputField from "../components/Forms/InputField";
import FormBtn from "../components/Forms/FormBtn";

import "../styles/form.css";

import loginAxios from "../login-instance";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    username: "",
    password: "",
  });

  const onSubmit = async () => {
    if (!username) {
      setFieldErrors((prev) => {
        return { ...prev, username: "Username is required" };
      });
      return false;
    } else {
      setFieldErrors({});
    }

    try {
      const result = await loginAxios.post("/posts", {
        data: { title: username },
      });
      if (result.status === 201) {
        alert("Login successfully");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <h3>Login</h3>
      <form id="login-form" onSubmit={(e) => e.preventDefault()}>
        <InputField
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div>{fieldErrors.username && fieldErrors.username}</div>
        <InputField
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormBtn onClick={onSubmit} text="Login" />
      </form>
    </div>
  );
};

export default Login;
