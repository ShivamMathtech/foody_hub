const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then((d) => {
    console.log("Database connection is stablish ");
  })
  .catch((e) => {
    console.log("Connection Failure");
  });

exports.mongoose = mongoose;
