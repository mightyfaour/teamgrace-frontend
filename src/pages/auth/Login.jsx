import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import FrontPageHeader from "../../components/FrontPageHeader";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Login successful");

    navigate("/dashboard");
  };

  return (
    <>
      <FrontPageHeader />
      <form onSubmit={handleSubmit}>
        <h1 className="logo">
          Team<span>Grace</span>
        </h1>
        <h2>Login into Account</h2>
        <div className="field-container">
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="teamgrace@gmail.com" />
          </div>
          <br />
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="***************" />
          </div>
        </div>

        <button type="submit">Log in</button>
        <p>
          Not registered? <Link to="/dashboard">Register</Link>
        </p>
      </form>
    </>
  );
};

export default Login;
