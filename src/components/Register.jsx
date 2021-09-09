import logo from './icon.png';
import './App.css';
import React from "react";


function Register() {
  return (
    <div className="wrapper">
       <selector className="content signup">
      <header>
        <img src={logo} className="logo" alt="icon" />
        <div className="title">
Code Nam - Register
      </div>
      </header>
      <form action="#" autocomplete="off">
      <div className="user-details">
         <div className="input-field">
            <label for="fname">First Name</label>
            <input type="text" name="fname" required />
         </div>
         <div className="input-field">
            <label for="fname">Last Name</label>
            <input type="text" name="fname" required />
         </div>
      </div>
         <div className="input-field">
            <label for="email">Email Address</label>
            <input type="text" name="email" required />
         </div>
         <div className="input-field">
            <label for="pwd">Password</label>
            <input type="password" name="pwd" required />
         </div>
         <div className="input-field">
            <label for="cpwd">Confirm Password</label>
            <input type="password" name="cpwd" required />
         </div>
         <div className="btn-submit">
         <input type="button" value="Register Now!"/>
         </div>
         <p>Already have an account? <a href="./login.js">Login Now!</a></p>
      </form>
       </selector>
    </div>
  );
}

export default Register;