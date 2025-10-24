const express = require("express");
const { registerRouter } = require("./src/router/authRouter/register.Route");
const { loginRouter } = require("./src/router/authRouter/login.Router");
const {
  logoutController,
} = require("./src/controllers/authController/logout.Controller");
const { logoutRouter } = require("./src/router/authRouter/logout.Router");
const { tokenRefreshGen } = require("./src/router/authRouter/token.Roter");
const {
  getAllUser,
  adminRouter,
} = require("./src/router/adminRouter/admin.Router");
const { userRouter } = require("./src/router/userRouter/user.Router");
const app = express();
app.use(express.json());
// Auhtentication  and user mangement
app.use("/auth", registerRouter);
app.use("/auth", loginRouter);
app.use("/auth", logoutRouter);
app.use("/auth", tokenRefreshGen);
// Admin Pannel
app.use("/admin", adminRouter);
// User Data
app.use("/user", userRouter);
exports.app = app;
