const express = require("express");
const {
  getServices,
  getPlatformServices,
  getServiceProvider
} = require("../controllers/educational");

const router = express.Router();

router.route("/").get(getServices);

router.route("/:platform").get(getPlatformServices);

router.route("/").post(getServiceProvider);

module.exports = router;
