const { default: axios } = require("axios");
const Message = require("../models/Message");
const V2_API_PATH = `${process.env.VTPASS_MESSAGING_URI}/v2/api/sms`;

exports.sendNormalSMS = async (req, res, next) => {
  try {
    const { data } = await axios.post({
      url: `${V2_API_PATH}/sendsms`,
      headers: {
        "api-key": process.env.VTPASS_API_KEY,
        "secret-key": process.env.VTPASS_SECRET_KEY,
      },
    });

    // const message = new Message({ req_payload, res_payload: data });

    // await message.save();

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};

exports.sendDNDSMS = async (req, res, next) => {
  try {
    const { data } = await axios.post({
      url: `${V2_API_PATH}/dnd-route`,
      headers: {
        "api-key": process.env.VTPASS_API_KEY,
        "secret-key": process.env.VTPASS_SECRET_KEY,
      },
    });

    // const message = new Message({ req_payload, res_payload: data });

    // await message.save();

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.sendDNDFallback = async (req, res, next) => {
  try {
    const { data } = await axios.post({
      url: `${V2_API_PATH}/dnd-fallback`,
      headers: {
        "api-key": process.env.VTPASS_API_KEY,
        "secret-key": process.env.VTPASS_SECRET_KEY,
      },
    });

    // const message = new Message({ req_payload, res_payload: data });

    // await message.save();

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
