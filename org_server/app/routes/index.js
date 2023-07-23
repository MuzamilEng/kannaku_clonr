import airtime from "../modules/airtime/index";
import data from "../modules/data/index.js";
import electricityBill from "../modules/electricityBill/index";
import cableTV from "../modules/cableTV/index";

export const APIVersion = "/billmgt/v1";

export default (app) => {
  app.use(`${APIVersion}/airtime`, airtime);
  app.use(`${APIVersion}/data`, data);
  app.use(`${APIVersion}/electricityBill`, electricityBill);
  app.use(`${APIVersion}/cableTv`, cableTV);

  // hello-world end-point
  app.get(`${APIVersion}/helloworld`, (req, res) => {
    res.json({ success: true });
  });

  app.use((err, req, res, next) => {
    if (err) {
      res.status(err.httpStatusCode || 500).json({ message: err.message });
    }
    return next();
  });

  app.use((req, res) => {
    res.status(404).json({
      message: `Requested route ( ${req.get("HOST")}${
        req.originalUrl
      } ) not found`,
    });
  });
};
