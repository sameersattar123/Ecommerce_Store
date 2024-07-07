import { createContext, useState , useEffect } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300+1; index++) {
    cart[index] = 0;
  } 
  return cart
}

const ShopContextProvider = ({ children }) => {
  const [all_product, setAll_Product] = useState([])
  console.log(all_product)
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch('http://localhost:5000/allproducts')
    .then((response) => response.json())
    .then((data) => setAll_Product(data.allProducts))
  }, [])


  const addToCart = (productId) => {
    setCartItems({...cartItems, [productId]: cartItems[productId] + 1 });
    if (localStorage.getItem('auth-item')) {
      fetch('http://localhost:5000/addtocart' , {
        method: 'POST',
        headers: {
          Accept : "application/form-data",
          'Content-Type': 'application/json',
          'auth-token': `${localStorage.getItem('auth-item')}`
        },
        body: JSON.stringify({"productId" : productId})
      })
      .then((response) => response.json())
      .then((data) => console.log(data) )
    }
  }
  
  const removeFromCart = (productId) => {
    if(cartItems[productId] > 0) {
      setCartItems({...cartItems, [productId]: cartItems[productId] - 1 });
      if (localStorage.getItem('auth-item')) {
        fetch('http://localhost:5000/removefromcart' , {
          method: 'POST',
          headers: {
            Accept : "application/form-data",
            'Content-Type': 'application/json',
            'auth-token': `${localStorage.getItem('auth-item')}`
          },
          body: JSON.stringify({"productId" : productId})
        })
        .then((response) => response.json())
        .then((data) => console.log(data) )
      }
    }

  }

  const getTotalCartAmount = () => {
    let totalAmount =  0
    for (const item in cartItems) {
      if (cartItems[item] > 0 ) { 
        let itemInfo = all_product.find((product) => product.id === Number(item))
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount
  }

  const getTotalCartItem = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0 ) { 
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }
  
  const contextValue = {getTotalCartAmount ,   all_product , cartItems , addToCart , getTotalCartItem , removeFromCart}

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};


export default ShopContextProvider;