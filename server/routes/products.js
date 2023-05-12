const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
const { verifyAdmin } = require("../middleware/auth");

// "/products/"
router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/",createProduct);
router.patch("/:id", verifyAdmin, updateProduct);
router.delete("/:id",verifyAdmin, deleteProduct);
module.exports = router;
