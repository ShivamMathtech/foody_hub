const express = require("express");
const {
  getAllUserController,
} = require("../../controllers/adminController/allUser.Controller");
const {
  deleteUserById,
} = require("../../controllers/adminController/deleteuser.Controller");
const { protect, authorizeRoles } = require("../../middleware/auth.middleware");
const {
  getUserById,
} = require("../../controllers/adminController/getubyid.Controller");

const adminRouter = express.Router();
adminRouter.get(
  "/all-user",
  protect,
  authorizeRoles("admin"),
  getAllUserController
);
adminRouter.get("/user/:id", protect, authorizeRoles("admin"), getUserById);
adminRouter.delete(
  "/user/:id",
  protect,
  authorizeRoles("admin"),
  deleteUserById
);
adminRouter.put("/user/:id", protect, authorizeRoles("admin"));

exports.adminRouter = adminRouter;
