import React from "react";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import "./ProductDisplay.css";

const ProductDisplay = ({ product }) => {
  return (
    <div className="ProductDisplay">
      <div className="ProductDisplay_left">
        <div className="ProductDisplay_img_list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="ProductDisplay_img">
          <img src={product.image} alt="" className="ProductDisplay_main_img" />
        </div>
      </div>
      <div className="ProductDisplay_right">
        <h1>{product.name}</h1>
        <div className="ProductDisplay_right_star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="ProductDisplay_right_prices">
          <div className="ProductDisplay_right_prices_old">
            ${product.old_price}
          </div>
          <div className="ProductDisplay_right_prices_new">
            ${product.new_price}
          </div>
        </div>
        <div className="ProductDisplay_right_desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, sed ab
          quibusdam, excepturi exercitationem fuga sapiente esse fugit
          laudantium maxime quaerat a. Cupiditate labore voluptatibus ducimus
          dolor ut, repellendus impedit.
        </div>
        <div className="ProductDisplay_right_size">
          <h1>Select Size</h1>
          <div className="">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <p>
          <span>Category:</span>Women , T-Shirt , Crop Top
        </p>
        <p>
          <span>Tags:</span>Modern , Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
