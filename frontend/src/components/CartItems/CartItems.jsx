import React, { useContext } from "react";
import removeIcon from "../../assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import "./CartItems.css";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart , getTotalCartAmount } = useContext(ShopContext);
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
              <div className="cartItems_format cartItems_format_main">
                <img src={e.image} alt="" className="cartIcon_product_icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartItems_quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartIcon_remove_icon"
                  src={removeIcon}
                  onClick={() => removeFromCart(e.id)}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItems_down">
        <div className="cartItems_total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartItems_total_Items">
              <p>Subtotals</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems_total_Items">
              <p>Shopping Fees</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems_total_Items">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartItems_promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartItems_promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
