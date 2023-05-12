const express = require("express");
const router = express.Router();
const { signUp, logIn } = require("../controllers/auth");

router.post("/logIn", logIn);
router.post("/signUp", signUp);


module.exports = router;
