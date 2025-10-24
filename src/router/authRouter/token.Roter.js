const express = require("express");
const {
  tokenRefreshController,
} = require("../../controllers/authController/token.Controller");
const tokenRefreshGen = express.Router();
tokenRefreshGen.post("/refresh-token", tokenRefreshController);

exports.tokenRefreshGen = tokenRefreshGen;
