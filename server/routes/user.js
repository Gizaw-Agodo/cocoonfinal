const express = require("express");
const router = express.Router();
const {
  getUsers,
  deleteUser,
  updateUser,
  getUser,
  createUser,
} = require("../controllers/user");
const { verifyUser, verifyAdmin } = require("../middleware/auth");

// "/users"
router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", verifyUser, getUser);
router.patch("/:id", verifyUser, updateUser);
router.delete("/:id", deleteUser);
module.exports = router;
