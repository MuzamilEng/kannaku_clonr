const express = require("express");
const {
  sendNormalSMS,
  sendDNDSMS,
  sendDNDFallback,
} = require("../controllers/message");
const router = express.Router();

router.route("/vtpass").post(sendNormalSMS);

router.route("/vtpass/dnd").post(sendDNDSMS);

router.route("/vtpass/dnd-fallback").post(sendDNDFallback);

module.exports = router;
