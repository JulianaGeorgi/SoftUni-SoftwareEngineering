const mongoose = require("mongoose");

module.exports = async (app) => {
  mongoose.set("strictQuery", false);
  await mongoose.connect('mongodb://127.0.0.1:27017/creatures', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};
