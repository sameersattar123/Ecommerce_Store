import express from "express";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import multer from "multer";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://sameersattar1111:ecommerce@cluster0.lq6lapl.mongodb.net/"
);

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});

app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:5000/images/${req.file.filename}`,
  });
});

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model("Product", productSchema);

app.post("/addproduct", async (req, res) => {
  const products = await Product.find({});
  let id;
  if (products.length === 0) {
    id = 1;
  } else {
    id = products[products.length - 1].id + 1;
  }
  try {
    const product = new Product({
      id: id,
      name: req.body.name,
      category: req.body.category,
      image: req.body.image,
      new_price: req.body.new_price,
      old_price: req.body.old_price, 
    });
    console.log(product);
    const savedProduct = await product.save();
    console.log("saved product");
    res.json({ success: true, savedProduct });
  } catch (error) {
    res.json("error");
  } 
});
 
app.delete("/removeproduct", async (req, res) => {
  let product = await Product.findOneAndDelete({ id: req.body.id });
  res.json({ success: true, product });
});
app.get("/allproducts", async (req, res) => {
  let allProducts = await Product.find({});
  res.json({ success: true, allProducts });
});
app.get("/newcollections", async (req, res) => {
  let products = await Product.find({});
  let newcollections = products.slice(1).slice(-8);
  console.log("new collection fetched")
  res.json(newcollections);
});
app.get("/popularinwomen", async (req, res) => {
  let products = await Product.find({category : "women"});
  let popularInWomen = products.slice(0,4);
  console.log("popular in women")
  res.json(popularInWomen);
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  cartData: {
    type: Object,
  },
});

const User = mongoose.model("User", userSchema);

app.post("/signup", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.json({ success: false, message: "Email already exists" });
  }

  let cart = {};

  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }

  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      cartData: cart,
    });

    await newUser.save();

    const data = {
      newUser: {
        id: newUser.id,
      },
    };

    const token = jwt.sign(data, "secret_ecom");
    res.json({ success: true, token });
  } catch (error) {
    res.json({ success: false, message: "Failed to save user" });
  }
});

app.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password
    if(passCompare) {
const data = {
  user: {
    id: user.id,
  },
}
 
const token = jwt.sign(data, "secret_ecom");
    res.json({ success: true, token });
  } else {
      res.json({ success: false,errors : "wrong password"});
    }
  } else {
    res.json({ success: false, errors :"wrong email"});
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
