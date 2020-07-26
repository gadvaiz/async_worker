const express = require("express");
//const morgan = require("morgan");
const smsRoutes = require("./routes/smsRoutes");
const emailRoutes = require("./routes/emailRoutes");

//define express app to handle routes
const app = express();
//app.use(morgan("dev"));
// use express.json as middleware to get json body from request
app.use(express.json());

//use email route for email requests
app.use("/email", emailRoutes);

//use sms route for sms requests
app.use("/sms", smsRoutes);

//in case the route not hit routes (middlewares) before send error to client
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: "not found",
    origURL: req.originalUrl,
  });
});

module.exports = app;
