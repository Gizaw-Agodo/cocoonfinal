const bcrypt = require("bcryptjs");
const User = require("../model/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//sign up
const signUp = async (req, res, next) => {
  const data = req.body;
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }
    const hashed = await bcrypt.hashSync(password, 6);
    const newUser = await User.create({ ...data, password: hashed });
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

//loging in
const logIn = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).json({ message: "invalid credentials" });
    }
    const saltString = process.env.saltString;
    const token = jwt.sign(
      { email: user.email, id: user._id, isAdmin: user.isAdmin },
      saltString,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json(err); // next(error);
  }
};

module.exports = { signUp, logIn };
