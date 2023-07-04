const express = require("express");
const {
  signup,
  login,
  logout,
  current,
} = require("../controllers/userControllers");
const {
  userSignUpValidation,
} = require("../middlewars/validation/userValidation");
const userLoginValidation = require("../middlewars/loginValidation");
const authenticate = require("../middlewars/authenticate");

const authRouter = express.Router();

authRouter.post("/signup", userSignUpValidation, signup);

authRouter.post("/login", userLoginValidation, login);

authRouter.post("/logout", authenticate, logout);

authRouter.get("/current", authenticate, current);

module.exports = authRouter;
