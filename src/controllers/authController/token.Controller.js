const tokenRefreshController = (req, res) => {
  res.status(200).json({
    msg: "this is from the tokenrefresh Controller",
  });
};

exports.tokenRefreshController = tokenRefreshController;
