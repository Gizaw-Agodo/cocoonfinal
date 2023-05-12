const Cart = require("../model/cart");


//getcart
const getCart = async (req, res, next) => {
  try {
    const cart = await Cart.find({userId:req.params.userId});
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};

// create Cart
const createCart = async (req, res, next) => {
  const data = req.body;
  try {
    const cart = await Cart.create(data);
    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
};

//update Cart
const updateCart = async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const updated = await Cart.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

//delete Cart
const deleteCart = async (req, res) => {
  const cartId = req.params.cartId;
  try {
    const deleted = await Cart.findByIdAndDelete(cartId);
    res.status(200).json({ room: deleted, message: "successfuly deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCart,
  updateCart,
  deleteCart,
  getCart,
};
