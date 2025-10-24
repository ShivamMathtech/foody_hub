const { User } = require("../../models/user.Model");

const registerController = (req, res) => {
  res.status(200).json({
    msg: "this is from the register controller",
  });
};

exports.registerController = registerController;
