import React from "react";
import "./css/Login.css";
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login() {
  const [values, setValues] = useState({
    user: "",
    pass: ""
  });
  const [errors, setErrors] = useState({});
const navigator = useNavigate();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mistake = {};

    if (!values.user) {
      mistake.user = "Username is required!";
    }

    if (values.pass.length < 8) {
      mistake.pass = "Minimum 8 characters required!";
    }

    setErrors(mistake);

    if (Object.keys(mistake).length === 0) {
      axios.post('http://localhost:3001/login', {
        user: values.user,
        pass: values.pass
      })
        .then((res) =>{
        
        var id=(res.data[0].ID)
        console.log(id)
        if(id>0){
          navigator('/Home');
        }else{
          alert("user not found")
          console.log("user not found")
          window.location.reload();
        }
        })
       
        
        .catch((error) => {
          console.error(error);
        });
    }else{
      alert("user not found")
      console.log("user not found")
      window.location.reload();
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="input-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="user"
            placeholder="Enter Username"
            className="input-field"
            value={values.user}
            onChange={handleChange}
          />
          {errors.user && <span>{errors.user}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="pass"
            placeholder="Enter Password"
            className="input-field"
            value={values.pass}
            onChange={handleChange}
          />
          {errors.pass && <span>{errors.pass}</span>}
        </div>

        <input type="submit" value="Login" className="login-button" />
      </form>
      <p>New User? <span><Link to="/Signup" className="elink">Sign Up</Link></span></p>
    </div>
  );
}

export default Login;