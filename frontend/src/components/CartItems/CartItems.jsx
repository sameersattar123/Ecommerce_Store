import React, { useContext } from "react";
import removeIcon from "../../assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import "./CartItems.css";

const CartItems = () => {
  const { all_product, cartItems, addToCart, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartItems_format_main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartItems_format">
                <img src={e.image} alt="" />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className="cartItems_quantity">
                  {cartItems[e.id]}
                </button>
                <p>{e.new_price * cartItems[e.id]}</p>
                <img
                  src={removeIcon}
                  onClick={() => removeFromCart(e.id)}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        } else {
          <h1>There is no product</h1>;
        }
      })}
    </div>
  );
};

export default CartItems;
