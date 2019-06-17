const router = require("express").Router();
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const Order = require("../models/Order");

router.get("/all", (req, res) => {
  Restaurant.find({}).exec((err, records) => {
    if (err) return console.warn(err);

    console.log(records);
    res.send(records);
  });
});

router.post("/", (req, res) => {
  Order.create(req.body),
    (err, order) => {
      if (err) return console.warn(err);

      res.status(200).send({ message: "Ваше замовлення успішно відправлено", order: order });
    };
});

router.get("/get/:id", (req, res) => {
  console.log(req.params.id)
  Order.find({ restId: req.params.id }).exec((err, records) => {
    if (err) return console.warn(err);

    res.send(records);
  });
});

module.exports = router;