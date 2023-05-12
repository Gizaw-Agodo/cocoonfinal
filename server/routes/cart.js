const express = require("express");
const router = express.Router();
const {
  createCart,
  getCart,
  updateCart,
  deleteCart,
} = require("../controllers/cart");

// "/cart/"
router.get("/:userId", getCart);
router.post("/", createCart);
router.patch("/:id", updateCart);
router.delete("/:id", deleteCart);
module.exports = router;
