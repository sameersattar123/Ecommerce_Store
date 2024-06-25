import React from "react";
import "./PopularItem.css";
import data_product from "../../utils/data";
import Item from "../Item/Item";

const PopularItem = () => {
  return (
    <div className="PopularItem">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular_item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              img={item.image}
              newPrice={item.new_price}
              oldPrice={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PopularItem;
