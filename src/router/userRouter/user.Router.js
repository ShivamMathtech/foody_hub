const express = require("express");
const {
  getUserbyIdController,
} = require("../../controllers/userController.js/userById.Controller");
const {
  updateUserById,
} = require("../../controllers/userController.js/updateUser.Controller");
const userRouter = express.Router();
userRouter.get("/:id", getUserbyIdController);
userRouter.put("/:id", updateUserById);
exports.userRouter = userRouter;
