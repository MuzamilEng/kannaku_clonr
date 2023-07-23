const express = require("express")
const { addTransaction, fetchTransaction } = require("../controllers/transaction")
const router = express.Router()

router.route("/:id").get(fetchTransaction)

router.route("/").post(addTransaction)

module.exports = router