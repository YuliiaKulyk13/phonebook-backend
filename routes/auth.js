const express = require("express");
const { signup, login } = require("../controllers/userControllers");
const {
  userSignUpValidation,
} = require("../middlewars/validation/userValidation");
const userLoginValidation = require("../middlewars/loginValidation");

const authRouter = express.Router();

authRouter.post("/signup", userSignUpValidation, signup);

authRouter.post("/login", userLoginValidation, login);

authRouter.post("/logout");

authRouter.get("/current");

module.exports = authRouter;
