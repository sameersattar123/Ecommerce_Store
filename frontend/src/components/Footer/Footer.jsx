import React from "react";
import footer_logo from "../../assets/logo_big.png";
import instagram_icon from "../../assets/instagram_icon.png";
import pintester_icon from "../../assets/pintester_icon.png";
import whatsApp_icon from "../../assets/whatsapp_icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer_links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer_social_icon">
        <div className="footer_icons_container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer_icons_container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer_icons_container">
          <img src={whatsApp_icon} alt="" />
        </div>
      </div>
      <div className="footer_copyright">
        <hr />
        <p>Copyright 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
