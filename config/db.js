const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connectDB = async (url) => {
  return await mongoose.connect(url);
};
module.exports = { connectDB };
