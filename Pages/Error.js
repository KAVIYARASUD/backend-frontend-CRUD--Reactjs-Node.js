import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Error.css";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <h1 className="error-heading">404 Error Page</h1>
      <p className="error-message">Oops! The page you are looking for does not exist.</p>
      <button className="bt" onClick={() => navigate("/")}>Go to Home Page</button>
    </div>
  );
}

export default Error;