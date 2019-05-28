const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: String,
  password: String,
  email: String,
  phone: String,
  city: String,
  dishes: [String],
  orders: [String],
  img: { data: Buffer, contentType: String },
  rating: [Number],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
