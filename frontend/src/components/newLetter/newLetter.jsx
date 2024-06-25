import React from "react";
import "./newLetter.css";

const newLetter = () => {
  return (
    <div className="newLetter">
      <h1>Get Executive Offers On Your Email</h1>
      <p>Subscribe to our newLetter nd stay updated</p>
      <div>
        <input type="email" placeholder="Your Email Id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default newLetter;
