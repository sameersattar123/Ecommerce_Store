import React from "react";
import handIcon from "../../assets/hand_icon.png";
import arrowIcon from "../../assets/arrow.png"
import heroImg from "../../assets/hero_image.png"
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_left">
        <h2>New Arrivals only</h2>
        <div className="">
          <div className="hero_hand_icon">
            <p>new</p>
            <img src={handIcon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero_latest_btn">
            <div>Latest Collection</div>
            <img src={arrowIcon} alt="" />
        </div>
      </div>
      <div className="hero_right">
            <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
