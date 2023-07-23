import mongoose from "mongoose";

const billSchema = mongoose.Schema({
  userId: String,
  data: {
    transactions: [
      {
        amount: Number,
        beneficiary: String,
        transactiontime: Date,
        transactiontype: {
          type: String,
          enum: ["INGOING", "OUTGOING"],
        },
      },
    ],
  },
  airtime: {
    transactions: [
      {
        amount: Number,
        beneficiary: Number,
        transactiontime: Date,
        transactiontype: {
          type: String,
          enum: ["INCOMING", "OUTGOING"],
        },
        refid: String,
      },
    ],
  },
  beneficiaries: [
    {
      description: String,
      number: Number,
    },
  ],
});

export default mongoose.model("Bill", billSchema);
