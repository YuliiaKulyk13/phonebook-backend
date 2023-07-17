const express = require("express");
const {
  signup,
  login,
  logout,
  current,
  uploadAvatar,
} = require("../controllers/userControllers");
const {
  userSignUpValidation,
} = require("../middlewars/validation/userValidation");
const userLoginValidation = require("../middlewars/loginValidation");
const authenticate = require("../middlewars/authenticate");
const upload = require("../middlewars/upload");

const authRouter = express.Router();

authRouter.post("/signup", userSignUpValidation, signup);

authRouter.post("/login", userLoginValidation, login);

authRouter.post("/logout", authenticate, logout);

authRouter.get("/current", authenticate, current);

authRouter.patch(
  "/avatar",
  authenticate,
  upload.single("avatar"),
  uploadAvatar
);

module.exports = authRouter;
