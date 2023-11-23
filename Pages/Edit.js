import React, { useState } from "react";
import "./css/Edit.css";
import axios from "axios";


function Edit(props) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [gmail, setGmail] = useState("");
  const [ID, setID] = useState(props.ID);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/update", {
        name,
        mobile,
        gmail,
        ID: props.ID,
      })
      .then((res) => {
        console.log(res.data);
        console.log(name);
        console.log(props.ID);

        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Edit Data</h1>
      <form onSubmit={handleSubmit}>
        <div className="econtainer">
          <p>
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              defaultValue={props.Name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </p>
          <p>
            <input
              className="input"
              type="text"
              name="Mobile"
              placeholder="Mobile Number"
              defaultValue={props.Mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </p>
          <p>
            <input
              className="input"
              type="text"
              name="Gmail"
              placeholder="Enter Your Email"
              defaultValue={props.Gmail}
              onChange={(e) => setGmail(e.target.value)}
              required
            />
          </p>

          <button className="button" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;