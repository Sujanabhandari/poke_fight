const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// var validator = require('validator');

const { ADMIN_SECRET } = process.env;
const userSchema = new Schema({
  user_name: { type: String, unique: true, minLength: 2, maxLength: 255 },
  password: { type: String, required: true },
  email: { type: String, required: true },
  //enum[admin, users] role can accept these 2 values
  role: { type: String, default:"admin" },
});

userSchema.methods.generateToken = function () {
  const payload = {
    _id: this._id,
    username: this._username,
    email: this.email,
  };
  const token = jst.sign(payload, ADMIN_SECRET);
  return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
