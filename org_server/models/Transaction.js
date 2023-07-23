const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema(
  {
    any: {},
  },
  {
    strict: false,
  }
);

module.exports = mongoose.model("Transaction", TransactionSchema)