import React, { useEffect, useState } from "react";
import crossIcon from "../../assets/cross_icon.png";
import "./ListProduct.css";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts);
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/allproducts");
      const data = await response.json();
      console.log(data);
      setAllProducts(data.allProducts);
    } catch (error) {
      console.log("some error");
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await fetch("http://localhost:5000/removeproduct", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        setAllProducts(allProducts.filter((product) => product.id!== id));
      }
    } catch (error) {
      console.log("some error");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="listProduct">
      <h1>All Product List</h1>
      <div className="listProduct_format_main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listProduct_allProducts">
        <hr />
        {allProducts.map((product, index) => {
          return (
            <>
            <div key={index} className="listProduct_format_main listProduct_format">
              <img src={product.image} alt="" className="listProduct_product_icon" />
              <p>{product.name}</p>
              <p>{product.old_price}</p>
              <p>{product.new_price}</p>
              <p>{product.category}</p>
              <img onClick={() => removeProduct(product.id)} src={crossIcon} alt="" className="product_remove_icon" />
            </div>
            <hr />
            </>
          );
        }) 
      } 
      </div>
    </div>
  );
};

export default ListProduct;
