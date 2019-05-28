const router = require("express").Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
mongoose.set("useFindAndModify", false);
const config = require("../config");

const Restaurant = require("../models/Restaurant");

//CRUD

//REGISTRATION
router.post("/register", (req, res) => {
  const hashedPass = bcrypt.hashSync(req.body.password, 8);

  Restaurant.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: hashedPass
    },
    (err, rest) => {
      if (err) return console.warn(err);

      const token = jwt.sign({ id: rest._id }, config.secret, {
        expiresIn: 86400
      });
      res.status(200).send({ auth: true, token: token });
    }
  );
});

//LOGIN
router.post("/login", (req, res) => {
  Restaurant.findOne({ email: req.body.email }, (err, rest) => {
    if (err) return res.status(500).send("Error on the server.");
    if (!rest) return res.status(404).send("No user found.");
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      rest.password
    );
    if (!passwordIsValid)
      return res.status(401).send({ auth: false, token: null });
    const token = jwt.sign({ id: rest._id }, config.secret, {
      expiresIn: 86400
    });
    res.status(200).send({ auth: true, token: token });
  });
});

//GET ALL
router.get("/all", (req, res) => {
  Restaurant.find({}).exec((err, records) => {
    if (err) return console.warn(err);

    console.log(records);
    res.send(records);
  });
});

//DELETE ALL

module.exports = router;
