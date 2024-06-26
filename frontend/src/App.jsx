import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import LoginSignup from "./pages/LoginSignup";
import Product from "./pages/Product";
import ShopCategory from "./pages/ShopCategory";
import Footer from "./components/Footer/Footer";
import men_Banner from "./assets/banner_mens.png"
import kids_Banner from "./assets/banner_kids.png"
import women_Banner from "./assets/banner_women.png"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_Banner} category={"men"} />} />
          <Route path="/womens" element={<ShopCategory banner={women_Banner} category={"women"} />} />
          <Route path="/kids" element={<ShopCategory banner={kids_Banner} category={"kid"} />} />
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
