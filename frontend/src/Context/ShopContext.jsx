import { createContext, useState } from "react";
import all_product from "../utils/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length+1; index++) {
    cart[index] = 0;
  } 
  return cart
}

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (productId) => {
    setCartItems({...cartItems, [productId]: cartItems[productId] + 1 });
    console.log(cartItems);
  }
  
  const removeFromCart = (productId) => {
    if(cartItems[productId] > 0) {
      setCartItems({...cartItems, [productId]: cartItems[productId] - 1 });
    }
  }
  
  const contextValue = {  all_product , cartItems , addToCart , removeFromCart}

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};


export default ShopContextProvider;