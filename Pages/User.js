import React from "react";
import { Link } from "react-router-dom";
import './css/Users.css';
import Not from "../Not";
function User() {
    return (
        <div>
            <Not />
        <div className="econtainer">

            <Link to="/Admin" className="elink">Admin</Link>
        </div>
        </div>
    );
}

export default User;