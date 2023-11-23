import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router for navigation
import axios from 'axios';
import './css/Sign.css';

function Sign() {
  const [Values, SetValues] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    passwords: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    SetValues({
      ...Values,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mistakes = {};

    if (!Values.name) {
      mistakes.name = "Name is required!";
    }
    if (!Values.mobile) {
      mistakes.mobile = "Mobile is required!";
    }
    if (!Values.email) {
      mistakes.email = "Email is required!";
    }
    if (!Values.password) {
      mistakes.password = "Password is required!";
    } else if (Values.password.length < 8) {
      mistakes.password = "Password should be at least 8 characters";
    }
    if (Values.passwords !== Values.password) {
      mistakes.passwords = "Passwords do not match";
    }

     else if  (Object.keys(mistakes).length === 0) {
      axios
        .post('http://localhost:3001/Sign', Values)
        .then((res) => {
          navigate('/Data');
        })
        .catch((error) => {
          // Handle error if the POST request fails
          console.error(error);
        });
    }

    setErrors(mistakes);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <p>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              id="name"
              value={Values.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span>{errors.name}</span>}
          </p>
          <p>
            <input
              type="text"
              placeholder="Mobile Number"
              required
              id="mobile"
              value={Values.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <span>{errors.mobile}</span>}
          </p>
          <p>
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              required
              id="email"
              value={Values.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </p>
          <p>
            <input
              type="password"
              placeholder="New Password"
              required
              id="password"
              value={Values.password}
              onChange={handleChange}
            />
            {errors.password && <span>{errors.password}</span>}
          </p>
          <p>
            <input
              type="password"
              placeholder="Re-enter Password"
             
              id="passwords"
              value={Values.passwords}
              onChange={handleChange}
            />
            {errors.passwords && <span>{errors.passwords}</span>}
          </p>
          <button type="submit" onClick={handleSubmit}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Sign;