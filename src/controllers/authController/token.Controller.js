const { User } = require("../../models/user.Model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const tokenRefreshController = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      return res.status(400).json({ msg: "Token are not ofund" });
    }
    // Verify refresh token
    jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err)
          return res.status(403).json({ message: "Invalid refresh token" });

        const user = await User.findById(decoded.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        // Generate new access token
        const accessToken = jwt.sign(
          { id: user._id, role: user.role },
          process.env.JWT_SECRET,
          {
            expiresIn: "15m",
          }
        );

        res.status(200).json({ accessToken });
      }
    );
  } catch (error) {
    return res.status(500).json({
      msg: "Server Error",
    });
  }
};

exports.tokenRefreshController = tokenRefreshController;
