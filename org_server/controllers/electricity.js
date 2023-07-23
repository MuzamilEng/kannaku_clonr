const axios = require("axios");
const { platform } = require('../constants/platform');
const { serviceType } = require('../constants/vtpass');
const Provider = require("../models/Provider");

// @desc     Get all service providers
// @route    GET /api/v1/electricity/:serviceID
// @access   Public
exports.getServices = async (req, res, next) => {
  try {
    const providers = await Provider.aggregate([
      {
        $match: {
          platform: platform.VTPASS,
          service_type: serviceType.ELECTRICITY,
        },
      },
      {
        $lookup: {
          from: "schemes",
          as: "schemes",
          localField: "schemes",
          foreignField: "_id",
        },
      },
      {
        $project: {
          _id: 0,
          name: 1,
          minimium_amount: 1,
          maximum_amount: 1,
          convinience_fee: 1,
          product_type: 1,
          image: 1,
          service_id: 1,
          platform: 1,
          service_type: 1,
          name: 1,
          schemes: {
            variation_code: 1,
            name: 1,
            variation_amount: 1,
            fixed_price: 1,
          },
        },
      },
    ]);
    

    if (!providers) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: providers });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc     Get platform service providers
// @route    GET /api/v1/electricity/:platform
// @access   Public
exports.getPlatformServices = async (req, res, next) => {
  try {
    const providers = await Provider.aggregate([
      {
        $match: {
          platform: req.params.platform || '',
          service_type: serviceType.ELECTRICITY,
        },
      },
      {
        $lookup: {
          from: "schemes",
          as: "schemes",
          localField: "schemes",
          foreignField: "_id",
        },
      },
      {
        $project: {
          _id: 0,
          name: 1,
          minimium_amount: 1,
          maximum_amount: 1,
          convinience_fee: 1,
          product_type: 1,
          image: 1,
          service_id: 1,
          platform: 1,
          service_type: 1,
          name: 1,
          schemes: {
            variation_code: 1,
            name: 1,
            variation_amount: 1,
            fixed_price: 1,
          },
        },
      },
    ]);
    

    if (!providers) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: providers });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc     Get a single provider
// @route    POST /api/v1/electricity
// @access   Public
exports.getServiceProvider = async (req, res, next) => {
  try {
    const { service_id, platform } = req.body

    const provider = await Provider.aggregate([
      {
        $match: {
          platform: platform,
          service_type: serviceType.ELECTRICITY,
          service_id: service_id,
        },
      },
      {
        $lookup: {
          from: "schemes",
          as: "schemes",
          localField: "schemes",
          foreignField: "_id",
        },
      },
      {
        $project: {
          _id: 0,
          name: 1,
          minimium_amount: 1,
          maximum_amount: 1,
          convinience_fee: 1,
          product_type: 1,
          image: 1,
          service_id: 1,
          platform: 1,
          service_type: 1,
          name: 1,
          schemes: {
            variation_code: 1,
            name: 1,
            variation_amount: 1,
            fixed_price: 1,
          },
        },
      },
    ]);

    if (!provider) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: provider });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc     Verify meter number
// @route    POST /api/v1/electricity/merchant-verify
// @access   Public
exports.verifyVTPassMerchant = async (req, res, next) => {
  try {
    const { billersCode, serviceID, type } = req.body;

    const { data } = await axios.post(process.env.VTPASS_URI, {
      billersCode,
      serviceID,
      type
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
