const express = require("express");
const router = express.Router();
const {
  createHotel,
  getHotel,
  getHotels,
  updateHotel,
  deleteHotel,
  countByCity,
} = require("../controllers/hotels");
const { verifyAdmin } = require("../middleware/auth");

// "/hotels/"
router.get("/find", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", getHotels);
router.get("/:id", getHotel);
router.post("/", verifyAdmin, createHotel);
router.patch("/:id", verifyAdmin, updateHotel);
router.delete("/:id", verifyAdmin, deleteHotel);
module.exports = router;
