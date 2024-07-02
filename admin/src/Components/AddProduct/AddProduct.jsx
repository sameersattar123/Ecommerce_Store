import React, { useState } from "react";
import uplaodImg from "../../assets/upload_area.svg"
import "./AddProduct.css";

const AddProduct = () => {
  const [image, setImage] = useState("")

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  return (
    <div className="add_product">
      <div className="addproduct_itemfeild">
        <p>Product Title</p>
        <input type="number" name="name" placeholder="Type Here" />
      </div>
      <div className="addproduct_price">
        <div className="addproduct_itemfeild">
          <p>Price</p>
          <input type="number" name="old_price" placeholder="Type Here" />
        </div>
        <div className="addproduct_itemfeild">
          <p>Offer Price</p>
          <input type="number" name="new_price" placeholder="Type Here" />
        </div>
      </div>
      <div className="addproduct_itemfeild">
        <p>Product Category</p>
        <select name="category" id="" className="add_product_selector">
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">Kid</option>
        </select>
      </div>

      <div className="addproduct_itemfeild">
        <div className="file_input">
          <label htmlFor="file-input">
            <img src={image ? URL.createObjectURL(image) : uplaodImg} alt=""   className="addproduct_thumbnail_img"/>
          </label>
          <input onChange={handleFileUpload} type="file" name="image" id="file-input"  hidden/>
        </div>
        <button className="addproduct_btn">ADD</button>
      </div>
    </div>
  );
};

export default AddProduct;
