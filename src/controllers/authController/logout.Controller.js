const logoutController = (req, res) => {
  try {
    // Since JWT is stateless, backend cannot truly invalidate it
    // Simply instruct client to remove the token from storage (localStorage, cookies)
    res.status(200).json({
      success: true,
      message:
        "Logged out successfully. Please remove the token on client side.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.logoutController = logoutController;
