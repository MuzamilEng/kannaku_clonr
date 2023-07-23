const { serviceType } = require("../constants/vtpass");
const Provider = require("../models/Provider");

// @desc     Get all service providers
// @route    GET /api/v1/educational
// @access   Public
exports.getServices = async (req, res, next) => {
  try {
    const providers = await Provider.aggregate([
      {
        $match: {
          service_type: serviceType.EDUCATION,
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

// @desc     Get specific platform service providers
// @route    GET /api/v1/educational/:platform
// @access   Public
exports.getPlatformServices = async (req, res, next) => {
  try {
    const providers = await Provider.aggregate([
      {
        $match: {
          platform: req.params.platform || '',
          service_type: serviceType.EDUCATION,
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
// @route    POST /api/v1/educational
// @access   Public
exports.getServiceProvider = async (req, res, next) => {
  try {
    const { service_id, platform } = req.body

    const provider = await Provider.aggregate([
      {
        $match: {
          platform: platform,
          service_type: serviceType.EDUCATION,
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
