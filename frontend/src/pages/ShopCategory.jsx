import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropDown_icon from "../assets/dropdown_icon.png";
import Item from "../components/Item/Item";
import "./CSS/ShopCategory.css"

const ShopCategory = ({ category, banner }) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop_category">
      <img className="shopCategory_banner" src={banner} alt="" />
      <div className="shopCategory_indexSort">
        <p>
          <span>Showing 1-12 </span>out of 36 products
        </p>
        <div className="shopCategory_sort">
          Sort by <img src={dropDown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory_products">
        {all_product.map((item, i) => {
          if (category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory_loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
