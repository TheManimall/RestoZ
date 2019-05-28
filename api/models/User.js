const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  nickname: String,
  password: String,
  phone: String,
  city: String,
  favRest: [String],
  favDish: [String],
  orders: [String],
  img: { data: Buffer, contentType: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);
