const router = require("express").Router();
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const Order = require("../models/Order");

router.post("/order", (req, res) => {
  const hashedPass = bcrypt.hashSync(req.body.password, 8);

  Order.create(req.body),
    (err, order) => {
      if (err) return console.warn(err);

      res.status(200).send({ message: "Ваше замовлення успішно відправлено" });
    };
});
