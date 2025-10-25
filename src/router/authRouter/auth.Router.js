const express = require("express");
const {
  registerController,
} = require("../../controllers/authController/register.Controller");
const {
  loginController,
} = require("../../controllers/authController/login.Controller");
const {
  logoutController,
} = require("../../controllers/authController/logout.Controller");
const {
  tokenRefreshController,
} = require("../../controllers/authController/token.Controller");
const authRouter = express.Router();
authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.post("/logout", logoutController);
authRouter.post("/token-refresh", tokenRefreshController);
exports.authRouter = authRouter;
