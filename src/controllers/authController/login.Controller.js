const { User } = require("../../models/user.Model");
const bcrypt = require("bcrypt");
const { genrateToken } = require("../../utils/jwttoken.utils");
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        msg: "All fields are required",
      });
    }
    const user = await User.findOne({ email });
    // check email
    if (!user) {
      return res.status(401).json({
        msg: "Invalid credential",
      });
    }
    //check the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        msg: "Invalid credential",
      });
    }
    //Genrate the webtoken
    const token = genrateToken(user._id, user.role);
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Server Error",
      error,
    });
  }
};

exports.loginController = loginController;
