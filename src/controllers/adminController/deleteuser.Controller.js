const { User } = require("../../models/user.Model");

const deleteUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Optional: prevent admin from deleting themselves
    if (user._id.equals(req.user._id)) {
      return res
        .status(400)
        .json({ message: "Admin cannot delete themselves" });
    }

    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { deleteUserById };
