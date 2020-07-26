const express = require("express");
const smsController = require("./../controllers/smsController");

const router = express.Router();

router.route("/:SMS_ID/status").post(smsController.addSMSToQueue);
//router.route("/:SMS_ID/status").get(smsController.addSMSToQueue);

module.exports = router;
