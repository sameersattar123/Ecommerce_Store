import express from "express";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import multer from "multer";

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect(
  "mongodb+srv://sameersattar1111:ecommerce@cluster0.lq6lapl.mongodb.net/"
);

const storage = multer.diskStorage({
    destination  : "./upload/images",
    filename: (req, file, cb) => {
       return  cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})

const upload = multer({
    storage : storage
})

app.use('/images' , express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success : 1,
        image_url : `http://localhost:5000/images/${req.file.filename}`
    })
});
 
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
