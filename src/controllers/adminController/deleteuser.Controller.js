const deletUserById = (req, res) => {
  res.status(200).json({
    msg: "Deleted user",
  });
};
exports.deletUserById = deletUserById;
