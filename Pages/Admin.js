import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Login.css";
import { Link } from "react-router-dom";
import Not from '../Not.js';

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.username === "admin" && values.password == 'admin') {
      navigate("/Data");
    } else {
      alert("Access denied!");
    }
  };

  return (
    <div>
    <Not/>
    <div className="login-container">
    
      <form onSubmit={handleSubmit}>
        <h1 className="login-title">Admin</h1>

        <div className="form-group">
          <label htmlFor="username" className="input-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Username"
            className="input-field"
            value={values.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            className="input-field"
            value={values.password}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="submit"
          value="Login"
          className="login-button"
          onClick={handleSubmit}
        />
      </form>
    </div>
    </div>
  );
}

export default Login;