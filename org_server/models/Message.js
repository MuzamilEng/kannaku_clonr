const mongoose = require("mongoose");

const SMSSchema = mongoose.Schema(
  {
    any: {},
  },
  {
    strict: false,
  }
);

module.exports = mongoose.model("SMS", SMSSchema)