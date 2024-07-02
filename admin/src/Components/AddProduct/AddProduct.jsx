import React, { useState } from "react";
import uplaodImg from "../../assets/upload_area.svg";
import "./AddProduct.css";

const AddProduct = () => {
  const [image, setImage] = useState("");
  const [productDetails, setProductDetails] = useState({
    name: "",
    old_price: "",
    new_price: "",
    category: "women",
    image: "",
  });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(productDetails);
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append("product", image);
    await fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: { 
        Accept: "application/json",
      },
      body: formData,
    }).then((response) => response.json()).then((data) => responseData=data)

    if (responseData.success) {
      product.image = responseData.image_url;
      await fetch(`http://localhost:5000/addproduct` , {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }).then((response) => response.json()).then((data) => data.success? console.log("passed") : console.log("failed"))
    }
  };
  return (
    <div className="add_product">
      <div className="addproduct_itemfeild">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type Here"
        />
      </div>
      <div className="addproduct_price">
        <div className="addproduct_itemfeild">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="number"
            name="old_price"
            placeholder="Type Here"
          />
        </div>
        <div className="addproduct_itemfeild">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="number"
            name="new_price"
            placeholder="Type Here"
          />
        </div>
      </div>
      <div className="addproduct_itemfeild">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          id=""
          className="add_product_selector"
        >
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">Kid</option>
        </select>
      </div>

      <div className="addproduct_itemfeild">
        <div className="file_input">
          <label htmlFor="file-input">
            <img
              src={image ? URL.createObjectURL(image) : uplaodImg}
              alt=""
              className="addproduct_thumbnail_img"
            />
          </label>
          <input
            onChange={handleFileUpload}
            type="file"
            name="image"
            id="file-input"
            hidden
          />
        </div>
        <button onClick={handleSubmit} className="addproduct_btn">
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
