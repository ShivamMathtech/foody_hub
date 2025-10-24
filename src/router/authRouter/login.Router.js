const express = require("express");
const {
  loginController,
} = require("../../controllers/authController/login.Controller");
const loginRouter = express.Router();
loginRouter.post("/login", loginController);
exports.loginRouter = loginRouter;
