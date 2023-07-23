const express = require("express");
const { getServices, getPlatformServices } = require("../controllers/services");
const router = express.Router();

router.route("/").get(getServices);

router.route("/:platform").get(getPlatformServices);

module.exports = router;
