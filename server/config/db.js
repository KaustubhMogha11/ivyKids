const mongoose = require("mongoose");

const connectDB = async () => {
  return mongoose
    .connect(`mongodb+srv://kk:12345@cluster0.j8yprqx.mongodb.net/test`)
    .then(() => console.log(`connection to database established...`))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
