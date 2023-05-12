const jwt = require("jsonwebtoken");
const createError = require("./error");

const verifyToken = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return next(createError(401, "unauthorized user"));
  }
  const token = authorization.split(" ")[1];
  try {
    decoded = jwt.verify(token, process.env.saltString);
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      next(createError(401, "user an authorized"));
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      next(createError(401, "user is not admin"));
    }
  });
};

module.exports = { verifyToken, verifyUser, verifyAdmin };
