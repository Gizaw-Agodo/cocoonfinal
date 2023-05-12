const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    
    price: {
      type: Number,
      required: true,
    },
    catagory:{
      type:String,
    },
    type :{
      type:String
    }
  },
);

const Product = mongoose.model("Product",productSchema);
module.exports = Product