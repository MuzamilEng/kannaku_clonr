const express = require("express");
const {
  getServices,
  getPlatformServices,
  getServiceProvider,
  verifyVTPassMerchant,
} = require("../controllers/tvSubscription");

const router = express.Router();

router.route("/").get(getServices);

router.route("/:platform").get(getPlatformServices);

router.route("/").post(getServiceProvider);

router.route("/verifyVTPassMerchant").post(verifyVTPassMerchant);

module.exports = router;
