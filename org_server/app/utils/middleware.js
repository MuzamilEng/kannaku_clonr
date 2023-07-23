import axios from "axios";
import Bills from "../models/Bills";

export const guard = function (can = undefined) {
  return async (req, res, next) => {
    try {
      let token = req.headers.authorization;
      if (!token) {
        return res.json({
          success: false,
          message: "Kindly Provide Valid Authentication Token",
        });
      }

      token = token.split(" ").pop();
      const user = await getAuthUser(token);
      if (!user) {
        return res.json({
          success: false,
          message: "Session Expired",
        });
      }

      if (
        can &&
        !user.permissions.includes(can) &&
        !user.permissions.includes("all")
      ) {
        return res.json({
          success: false,
          message: "Permission Denied",
        });
      }

      req.user = user;
      const bills = await Bills.findOne({ userid: user._id });
      if (bills === null) {
        //initializing a new bills account for the user
        const newbills = new Bills();
        newbills.userid = user._id;
        newbills.data.transactions = [];
        newbills.airtime.transactions = [];
        newbills.benficiaries = [];

        newbills.save();
      }
      next();
    } catch (err) {
      console.trace(err);
      return res.status(err.httpStatusCode || 500).json({
        success: false,
        message: "Error Encountered during Authentication",
      });
    }
  };
};

const getAuthUser = async (token) => {
  const req = await axios({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
    url: `${process.env.USER_SERVICE_URI}user`,
  });

  return req.data.data;
};

module.exports = {
  guard,
};
