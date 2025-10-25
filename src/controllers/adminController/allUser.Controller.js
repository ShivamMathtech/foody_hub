const { User } = require("../../models/user.Model");
// @private access only admin can access
const getAllUserController = async (req, res) => {
  try {
    const user = await User.find().select("-password");
    res.status(200).json({
      msg: "Fetching all users",
      user,
    });
  } catch (error) {
    return res.status(500).json({ msg: "Server Error" });
  }
};

exports.getAllUserController = getAllUserController;
