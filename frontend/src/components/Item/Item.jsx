import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, img, name, newPrice, oldPrice }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img src={img} alt="" />
      </Link>
      <p>{name}</p>
      <div className="item_prices">
        <div className="item_prices_new">${newPrice}</div>
        <div className="item_prices_old">${oldPrice}</div>
      </div>
    </div>
  );
};

export default Item;
