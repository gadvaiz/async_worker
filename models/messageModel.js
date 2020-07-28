const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
  },
});

module.exports.Email = mongoose.model("Email", messageSchema);
module.exports.Sms = mongoose.model("Sms", messageSchema);
