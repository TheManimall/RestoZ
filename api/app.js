const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const restaurantRouter = require("./routes/Restaurant");
const dishRouter = require("./routes/Dish");
const userRouter = require("./routes/User");
const orderRouter = require("./routes/Order");

const port = process.env.PORT || 5050;
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/restaurant", restaurantRouter);
app.use("/api/dish", dishRouter);
app.use("/api/user", userRouter);
app.use("/api/order", orderRouter);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage }).single("file");

app.post("/api/upload", function(req, res) {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

app.listen(port, err => {
  if (err) return console.warn(err);

  return true;
});

//connect cloud DB
const connectionString =
  "mongodb+srv://admin:admin@themanimal-uqyyz.mongodb.net/test?retryWrites=true";
mongoose.connect(connectionString);
