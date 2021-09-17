import React, { useState } from "react";
import leftImg from "./drw.png";

import "./signup.css";
function Signup() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(firstName);
    console.log(lastName);
    console.log(password);
    console.log(confirmPassword);
  };
  return (
    <div className="wrapper-X2">
      <div className="signup">
        <div className="image">
          <img src={leftImg} alt="" />
        </div>
        <form onSubmit={submitHandler} className="form">
          <h3>Sign Up</h3>
          <button type="button" className="login-with-google-btn">
            Sign up with Google
          </button>
          <div className="divider">
            <hr />
            <p>OR</p>
            <hr />
          </div>
          <div className="input-group">
            <label htmlFor="">Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="hor-group">
            <div className="input-group">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
          </div>
          <div className="hor-group">
            <div className="input-group">
              <label htmlFor="">Password</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="">profile picture</label>
            <input type="file" />
          </div>
          <div className="btn-conatiner">
            <button onClick={submitHandler} type="submit">
              SIGNUP
            </button>
            <div className="orLogin">
              OR
              <a href="/login">LOGIN</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
