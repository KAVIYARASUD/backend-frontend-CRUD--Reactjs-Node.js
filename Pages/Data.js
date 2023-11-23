import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Data.css";
import axios from 'axios';
import Not from "../Not.js";
import Edit from './Edit.js';


function Admin() {
  const [data, setData] = useState([]);
  const [Values, setValues] = useState({
    edit: '',
    delete: '',
  });
const[Name,setName]=useState([])
const[Mobile,setMobile]=useState([])
const[Gmail,setGmail]=useState([])
const [ID,setId]=useState([])
 
  const handleChange = (e) => {
    e.preventDefault();
    setValues({
      ...Values,
      [e.target.id]: e.target.value,
    });

    axios
      .post('http://localhost:3001/delete', { delete: Values.delete })
      .then((res) => {
        console.log(Values.delete);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .post('http://localhost:3001/get', { edit: Values.edit })
      .then((res) => {
        e.preventDefault();
      
        setId(res.data[0].ID);
        setName(res.data[0].NAME);
        setGmail(res.data[0].GMAIL);
        setMobile(res.data[0].MOBILE);
       
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [data]);

  const renderData = () => {
    if (data.length === 0) {
      return (
        <tr>
          <td colSpan="5">Loading...</td>
        </tr>
      );
    } else {
      const rows = [];
      let j = 0;
      for (let i = 0; i < data.length; i++) {
        const rowData = data[i];
        rows.push(
          <tr key={i}>
            <td>{++j}</td>
            <td>{rowData.NAME}</td>
            <td>{rowData.MOBILE}</td>
            <td>{rowData.GMAIL}</td>
            <td>{rowData.PASS}</td>
            <td>
              <Link to="#">
                <button className="edit-button" id="edit" value={rowData.ID}  onClick={handleChange} onChange={handleChange}>
                  Edit
                </button>
              </Link>
              <span>

                <button className="edit-button" id="delete" value={rowData.ID}  onClick={handleChange} onChange={handleChange} >
                  Delete
                </button>

              </span>
            </td>
          </tr>
        );
      }

      return <tbody>{rows}</tbody>;
    }
  };

  return (
    <div id="body">
      <Not />
      <table className="classic-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Password</th>
            <th>ACTION</th>
          </tr>
        </thead>
        {renderData()}
      </table>
      {<Edit ID={ID} Name={Name} Mobile={Mobile} Gmail={Gmail} />}
    </div>
  );
}

export default Admin;

