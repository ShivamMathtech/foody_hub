const express = require("express");

const {
  getAllUser,
  adminRouter,
} = require("./src/router/adminRouter/admin.Router");
const { userRouter } = require("./src/router/userRouter/user.Router");
const { authRouter } = require("./src/router/authRouter/auth.Router");
const app = express();
app.use(express.json());
// Auhtentication  and user mangement
app.use("/auth", authRouter);
// Admin Pannel
app.use("/admin", adminRouter);
// User Data
app.use("/user", userRouter);
exports.app = app;
