const mongoose = require("mongoose");
require("dotenv").config();
module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};
