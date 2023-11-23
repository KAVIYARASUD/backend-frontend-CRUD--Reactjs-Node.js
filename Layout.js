import React from "react";
import { Link, Outlet } from "react-router-dom";
import './App.css';

function Layout() {
  return (
    <nav>
      <ul className="menu">  
       
      </ul>
      <Outlet />
    </nav>
  );
}

export default Layout;