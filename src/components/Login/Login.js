import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = ({ setUserDetails }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "user@gmail.com" && password === "password") {
      setUserDetails({ type: "user", loggedIn: true });
      navigate("/inventory");
    } else if (username === "admin@gmail.com" && password === "password") {
      setUserDetails({ type: "admin", loggedIn: true });
      navigate("/inventory");
    } else {
      alert("username or password is not correct");
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-main">
          <h3 className="login-text">Let's Login !</h3>
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="email" className="toggle-text">
                Email:
              </label>
              <input
                className="field-input"
                type="email"
                id="email"
                value={username}
                placeholder="Please Enter Email"
                required
                onChange={handleUsername}
              />
            </div>

            <div className="input-container">
              <label htmlFor="password" className="toggle-text">
                password:
              </label>
              <input
                className="field-input"
                type="password"
                id="password"
                value={password}
                placeholder="Enter Password"
                required
                onChange={handlePassword}
              />
            </div>

            <div className="">
              <p>forgot Password </p>
              <button type="submit" className="section-button">
                Login !
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
