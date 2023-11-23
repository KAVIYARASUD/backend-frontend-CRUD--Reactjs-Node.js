import React from "react";
import './css/Logout.css';
import { useNavigate } from "react-router-dom";

function Logout() {
const navigator = useNavigate();
  const handleSubmit=(e)=>{
e.preventDefault();
alert("Confrim to logout")
navigator('/Login')
  }
  return (
    <nav>
      <h1>Bye !</h1>
    <button onClick={handleSubmit} className="lbutton"> logout</button>
    </nav>
  );
}
 
export default Logout;
