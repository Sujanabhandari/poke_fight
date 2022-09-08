const mongoose = require("mongoose");


const { DATABASE_CONNECTION_URL } = process.env;
console.log(DATABASE_CONNECTION_URL)
module.exports = mongoose
  .connect(DATABASE_CONNECTION_URL)
  .then(() => console.log("Connected successfully to MongoDB"))
  .catch((e) => console.log(e));

