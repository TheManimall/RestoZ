const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DishSchema = new Schema({
  name: String,
  restaurantId: String,
  type: String,
  price: Number,
  weight: Number,
  imgUrl: String,
  img: { data: Buffer, contentType: String },
  ingredients: [String],
  isActive: Boolean,
  rating: [Number]
});

module.exports = mongoose.model("Dish", DishSchema);
