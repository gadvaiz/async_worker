const { publish } = require("./../publisher");

module.exports.addSMSToQueue = (req, res, next) => {
  //public message to SMS QUEUE
  // axios({
  //   method: "POST",
  //   url: `http://domain/_SMS_QUEUE_`,
  //   data: { ...req.body, id: req.params.SMS_ID, status: req.query.status },
  // });
  const message = {
    ...req.body,
    id: req.params.SMS_ID,
    status: req.query.status,
  };

  publish("sms", message);
  //send HTTP 200 to the client
  res.status(200).json({
    message: "success",
  });
};
