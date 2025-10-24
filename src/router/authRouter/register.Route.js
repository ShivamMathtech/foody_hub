const express = require("express");
const {
  registerController,
} = require("../../controllers/authController/register.Controller");
const registerRouter = express.Router();
registerRouter.post("/register", registerController);

exports.registerRouter = registerRouter;
