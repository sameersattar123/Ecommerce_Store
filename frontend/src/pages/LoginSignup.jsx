import React from "react";
import "./CSS/LoginSignup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate()
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Signup = async () => {
    console.log("sameer1", formData);
    let responseData;
    await fetch('http://localhost:5000/signup' , {
      method: 'POST',
      headers: {
        Accept : "application/form-data",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json()).then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-item' , responseData.token)
      navigate('/')
    } else {
      alert(responseData.errors)
    }
  };
  const Login = async () => {
    console.log("sameer2", formData);
    let responseData;
    await fetch('http://localhost:5000/login' , {
      method: 'POST',
      headers: {
        Accept : "application/form-data",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json()).then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-item' , responseData.token)
      navigate('/')
    }else {
      alert(responseData.errors)
    }
  };
  return (
    <div className="LoginSignup">
      <div className="LoginSignup_container">
        <h1>{state}</h1>
        <div className="LoginSignup_feilds">
          {state === "Sign Up" ? (
            <input
              type="text"
              name="name"
              onChange={changeHandler}
              value={formData.name}
              placeholder="Your Name"
            />
          ) : (
            ""
          )}
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            onChange={changeHandler}
            value={formData.email}
          />
          <input
            name="password"
            onChange={changeHandler}
            value={formData.password}
            type="password"
            placeholder="Your Password"
          />
        </div>
        <button onClick={() => (state === "Login" ? Login() : Signup())}>
          Continue
        </button>
        {state === "Login" ? (
          <p className="LoginSignup_login">
            Create an Account?
            <span onClick={() => setState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p className="LoginSignup_login">
            Already have an account?
            <span onClick={() => setState("Login")}>Login here</span>
          </p>
        )}
        <div className="LoginSignup_agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I Agree to the terms of use & Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
