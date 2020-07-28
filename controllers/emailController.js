const { publish } = require("./../publisher");

module.exports.addEmailToQueue = (req, res, next) => {
  //    //public message to EMAIL QUEUE
  const message = {
    ...req.body,
    id: req.params.EMAIL_ID,
    status: req.query.status,
  };

  publish("email", message);

  //send HTTP 200 to the client
  res.status(200).json({
    message: "success",
  });
};
