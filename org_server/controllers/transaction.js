const Transaction = require("../models/Transaction")

// @desc     Create a single transaction
// @route    POST /api/v1/transaction
// @access   Public
exports.addTransaction = async (req, res, next) => {
  try {
    const transaction = new Transaction(req.body);

    await transaction.save()

    res.status(200).json({ success: true, data: transaction });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc     Get a single transaction
// @route    GET /api/v1/transaction/:id
// @access   Public
exports.fetchTransaction = async (req, res, next) => {
    try {
      const transaction = await Transaction.findById(req.params.id);
  
      res.status(200).json({ success: true, data: transaction });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  };
  