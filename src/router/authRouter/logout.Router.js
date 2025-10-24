const express = require("express");
const {
  logoutController,
} = require("../../controllers/authController/logout.Controller");
const logoutRouter = express.Router();
logoutRouter.post("/logout", logoutController);

exports.logoutRouter = logoutRouter;
