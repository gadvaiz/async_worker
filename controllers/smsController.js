module.exports.addSMSToQueue = (req, res, next) => {
  //create HTTP to relevant QUEUE
  axios({
    method: "POST",
    url: `http://domain/_SMS_QUEUE_`,
    data: { ...req.body, id: req.params.SMS_ID, status: req.query.status },
  });
  //send HTTP 200 to the client
  res.status(200).json({
    message: "success",
  });
};
