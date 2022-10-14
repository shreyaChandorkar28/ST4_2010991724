import "./StudentDetails.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import hello from '../sd.jpg'

const SignUpDetails = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");

  let history = useNavigate();

  const postData = () => {
    console.log(firstname, lastname, email, username);
    axios
      .post("http://localhost:5000/data", {
        firstname,
        lastname,
        email,
        username,
      })
      .then(() => {
        alert("data saved successfully");
        history("/read");
      });
    // alert("data saved successfully");
  };

  return (
    <>
      <div className="container2" style={{ backgroundImage: `url(${hello})` }}>
        <br/>
      {/* <h1>Registration Form</h1> */}
        <form>
            <br/>
          <div className="row">
            <div className="col-25">
              <label className="signlabel">First Name</label>
            </div>
            <br/>
            <div className="col-75">
              <input
                type="text"
                placeholder="Your first name.."
                onChange={(e) => setFirstName(e.target.value)}
              />
              <br/>
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
            <br/>
            <input
              type="button"
              value="Submit"
              className="btnsubmit"
              onClick={postData}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpDetails;
