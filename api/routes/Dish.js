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

//GET ALL DISHS
router.get("/all", (req, res) => {
  Dish.find({}).exec((err, records) => {
    if (err) return console.warn(err);

    console.log(records);
    res.send(records);
  });
});

module.exports = router;
