import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import LoginSignup from "./pages/LoginSignup";
import Product from "./pages/Product";
import ShopCategory from "./pages/ShopCategory";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category={"mens"} />} />
          <Route path="/womens" element={<ShopCategory category={"womens"} />} />
          <Route path="/kids" element={<ShopCategory category={"kids"} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
