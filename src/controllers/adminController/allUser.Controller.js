const getAllUserController = (req, res) => {
  res.status(200).json({
    msg: "This is from the all user retrival",
  });
};

exports.getAllUserController = getAllUserController;
