const axios = require("axios");

module.exports.addEmailToQueue = (req, res, next) => {
  //  create HTTP to _EMAIL_QUEUE_
    axios({
      method: "POST",
      url: `http://domain/_EMAIL_QUEUE_`,
      data: { ...req.body, id: req.params.EMAIL_ID, status: req.query.status },
    });

  //send HTTP 200 to the client
  res.status(200).json({
    message: "success",
  });
};
