import React, { useState } from "react";
import cart from "../../assets/cart_icon.png";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to={"/"} style={{ textDecoration: "none" , color : "#000" }}>
            SHOP {menu === "shop" ? <hr /> : ""}
          </Link>
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to={"/mens"} style={{ textDecoration: "none" , color : "#000" }}>
            MEN {menu === "mens" ? <hr /> : ""}
          </Link>
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to={"/womens"} style={{ textDecoration: "none" , color : "#000" }}>
            WOMEN {menu === "womens" ? <hr /> : ""}
          </Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to={"/kids"} style={{ textDecoration: "none" , color : "#000" }}>
            KIDS {menu === "kids" ? <hr /> : ""}
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>
        <Link to={"/login"} style={{ textDecoration: "none" , color : "#000" }}>
            Login
        </Link>
            </button>
            <Link to={"/cart"}>
        <img src={cart} alt="" />
            </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
