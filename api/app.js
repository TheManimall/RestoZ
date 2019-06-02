const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const restaurantRouter = require("./routes/Restaurant");
const dishRouter = require("./routes/Dish");
const userRouter = require("./routes/User");

const port = process.env.PORT || 5050;
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/restaurant", restaurantRouter);
app.use("/api/dish", dishRouter);
app.use("/api/user", userRouter);

// app.use(function(req, res, next) {
//   // check header or url parameters or post parameters for token
//   var token = req.headers["authorization"];
//   if (!token) return next(); //if no token, continue

//   token = token.replace("Bearer ", "");

//   jwt.verify(token, process.env.JWT_SECRET, function(err, user) {
//     if (err) {
//       return res.status(401).json({
//         success: false,
//         message: "Please register Log in using a valid email to submit posts"
//       });
//     } else {
//       req.user = user; //set the user to req so other routes can use it
//       next();
//     }
//   });
// });

app.listen(port, err => {
  if (err) return console.warn(err);

  return true;
});

//connect cloud DB
const connectionString =
  "mongodb+srv://admin:admin@themanimal-uqyyz.mongodb.net/test?retryWrites=true";
mongoose.connect(connectionString);
