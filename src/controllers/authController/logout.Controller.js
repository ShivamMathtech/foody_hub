const logoutController = (req, res) => {
  res.status(200).json({
    msg: "This is from the controller",
  });
};

exports.logoutController = logoutController;
