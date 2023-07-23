import { Router } from "express";
import { joiValidator } from "iyasunday";
import { guard } from "../../utils/middleware";
import * as controller from "./controller";
import validation from "./validation";

const router = Router();

//IKEJA
router.get("/ikeja/detail", controller.getToken);
router.get("/ikeja/usage", controller.getUsage);
router.get("/ikeja/dealer", controller.getDealerBalance);

router.post("/ikeja", controller.payElectricity);

//EEDC
router.get("/eedc/detail", controller.getCustomerDetailEEDC);
router.get("/eedc/usage", controller.getUsageDetailEEDC);
router.get("/eedc/dealer", controller.getDealerBalanceEEDC);

router.post("/eedc", controller.payElectricityEEDC);






export default router;
