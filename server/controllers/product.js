const Product = require("../model/product");

//get Products
const getProducts = async (req, res, next) => {
  try {
     const products = await Product.find(req.query);
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

//getproduct
const getProduct = async (req, res, next) => {
  try {
    const product = await Product.find({_id:req.params.id});
    res.status(200).json(product[0]);
  } catch (error) {
    next(error);
  }
};

// creating Product
const createProduct = async (req, res, next) => {
  const data = req.body;
  try {
    const product = await Product.create(data);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

//updating Product
const updateProduct = async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const updated = await Product.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

//delete Product
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await Product.findByIdAndDelete(id);
    res.status(200).json({ product: deleted, message: "successfuly deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getProducts,
};
