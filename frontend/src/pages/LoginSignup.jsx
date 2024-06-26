import React from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="LoginSignup">
      <div className="LoginSignup_container">
        <h1>Sign Up</h1>
        <div className="LoginSignup_feilds">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Your Password" />
        </div>
        <button>Continue</button>
        <p className="LoginSignup_login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="LoginSignup_agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I Agree to the terms of use & Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
