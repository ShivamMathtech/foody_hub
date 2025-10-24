const express = require("express");
const {
  getAllUserController,
} = require("../../controllers/adminController/allUser.Controller");
const {
  deletUserById,
} = require("../../controllers/adminController/deleteuser.Controller");
const adminRouter = express.Router();
adminRouter.get("/all-user", getAllUserController);
adminRouter.delete("/user/:id", deletUserById);

exports.adminRouter = adminRouter;
