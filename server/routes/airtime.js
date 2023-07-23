const express = require("express");

const userController = require("../Controller/airtime");

const router = express.Router();
router.post('/', userController.postAirtime);


module.exports = router;