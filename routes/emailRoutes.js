const express = require("express");
const emailController = require("../controllers/emailController");

const router = express.Router();

router.route("/:EMAIL_ID/status").post(emailController.addEmailToQueue);
//router.route("/:EMAIL_ID/status").get(emailController.addEmailToQueue);
module.exports = router;
