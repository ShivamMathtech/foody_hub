const getUserbyIdController = (req, res) => {
  res.status(200).json({
    msg: "This is form the user by id from controller",
  });
};

exports.getUserbyIdController = getUserbyIdController;
