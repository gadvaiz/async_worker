const { publish } = require("./../publisher");

module.exports.addSMSToQueue = (req, res, next) => {
  const message = {
    ...req.body,
    id: req.params.SMS_ID,
    status: req.query.status,
  };

  //public message to SMS QUEUE
  publish("sms", message);
  //send HTTP 200 to the client
  res.status(200).json({
    message: "success",
  });
};
