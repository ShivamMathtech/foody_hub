const loginController = (req, res) => {
  res.status(200).json({
    msg: "This is from the login Controller",
  });
};

exports.loginController = loginController;
