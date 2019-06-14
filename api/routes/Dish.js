const router = require("express").Router();
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const Dish = require("../models/Dish");

//CRUD

//ADD NEW DISH
router.post("/add", (req, res) => {
  const newDish = new Dish(req.body);
  newDish.save(err => {
    if (err) return console.warn(err);

    res.send(newDish);
  });
});

//GET ALL DISHES FOR RESTAURANT ID
router.get("/get/:id", (req, res) => {
  console.log(req.params.id);
  Dish.find({ restaurantId: req.params.id }).exec((err, records) => {
    if (err) return console.warn(err);

    res.send(records);
  });
});

//GET ALL DISHES
router.get("/all", (req, res) => {
  Dish.find({}).exec((err, records) => {
    if (err) return console.warn(err);

    res.send(records);
  });
});

//DELETE DISH
router.get("/delete/:id", (req, res) => {
  Dish.findByIdAndRemove(req.params.id, (err, dish) => {
    if (err) return console.warn(err);

    res.send({ message: "Страву успішно видалено", id: dish._id });
  });
});

module.exports = router;
