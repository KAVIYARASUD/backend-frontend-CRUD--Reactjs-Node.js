import React from "react";
import { Link, Outlet } from "react-router-dom";
import './App.css';

function Not() {
  return (
    <nav>
      <ul className="menu">
        <li className="menuItem">
          <Link to="/Home" className="link">Home</Link>
        </li>
        
        <li className="menuItem">
          <Link to="/user" className="link">User</Link>
        </li>
        <li className="menuItem">
          <Link to="/logout" className="link">Logout</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
}

export default Not;