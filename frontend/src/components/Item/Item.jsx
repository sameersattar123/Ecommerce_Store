import React from "react";
import "./Item.css";

const Item = ({ id , img , name , newPrice , oldPrice }) => {
  return (
    <div className="item">
      <img src={img} alt="" />
      <p>{name}</p>
      <div className="item_prices">
        <div className="item_prices_new">${newPrice}</div>
        <div className="item_prices_old">${oldPrice}</div>
      </div>
    </div>
  );
};

export default Item;
