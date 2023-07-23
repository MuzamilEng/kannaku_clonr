const { platform } = require("../constants/platform");
const Provider = require("../models/Provider");

// @desc     Get all services
// @route    GET /api/v1/services
// @access   Public
exports.getServices = async (req, res, next) => {
  try {
    const providers = await Provider.aggregate([
      {
        $group: {
          _id: "$service_type",
          service_name: { $first: "$service_name" },
          service_type: { $first: "$service_type" },
          platform: { $first: "$platform" }
        }
      },
      {
        $project: {
          _id: 0
        }
      }
    ]);

    res.status(200).json({ success: true, data: providers });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc     Get platform all services
// @route    GET /api/v1/services/:platform
// @access   Public
exports.getPlatformServices = async (req, res, next) => {
  try {
    const providers = await Provider.aggregate([
      {
        $match: {
          platform: req.params.platform
        }
      },
      {
        $group: {
          _id: "$service_type",
          service_name: { $first: "$service_name" },
          service_type: { $first: "$service_type" },
          platform: { $first: "$platform" }
        }
      },
      {
        $project: {
          _id: 0
        }
      }
    ]);

    res.status(200).json({ success: true, data: providers });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
