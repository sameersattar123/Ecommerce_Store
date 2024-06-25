import React from "react";
import exclusive_image from "../../assets/exclusive_image.png";
import "./Offers.css";

const Offers = () => {
  return (
    <div className="Offers">
      <div className="Offers_left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="Offers_right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
