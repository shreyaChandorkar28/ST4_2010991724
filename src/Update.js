import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");

  const [id, setID] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setEmail(localStorage.getItem("Email"));
    setUserName(localStorage.getItem("Username"));
  }, []);

  let history = useNavigate();

  const updateAPIData = () => {
    axios
      .put(`http://localhost:5000/data/${id}`, {
        firstname,
        lastname,
        email,
        username,
      })
      .then(() => {
        alert("data updated successfully");
        history("/read");
      });
  };

  return (
    <>
      <div className="container2">
        <form>
          <div className="row">
            <div className="col-25">
              <label className="signlabel">First Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                placeholder="Your first name.."
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label className="signlabel">Last Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                placeholder="Your last name.."
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label className="signlabel">Email</label>
            </div>
            <div className="col-75">
              <input
                type="email"
                placeholder="Your email.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label className="signlabel">Create new Username</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                placeholder="Your username.."
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label className="signlabel">Enter Password</label>
            </div>
            <div className="col-75">
              <input type="password" placeholder="Enter password.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label className="signlabel">Confirm Password</label>
            </div>
            <div className="col-75">
              <input type="password" placeholder="Confirm password.." />
            </div>
          </div>
          <br />
          <div className="row">
            <input type="reset" value="Clear" className="btnsubmit" />
            <input
              type="button"
              value="Submit"
              className="btnsubmit"
              onClick={updateAPIData}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;
