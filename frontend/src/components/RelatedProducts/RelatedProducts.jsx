import React from "react";
import data_products from "../../utils/data";
import "./RelatedProducts.css";
import data_product from "../../utils/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className="RelatedProducts">
      <h1>Related Products</h1>
      <hr />
      <div className="RelatedProducts_item">
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

export default RelatedProducts;
