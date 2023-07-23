import { Router } from "express";
import { joiValidator } from "iyasunday";
import { guard } from "../../utils/middleware";
import * as controller from "./controller";
import validation from "./validation";

const router = Router();

//GET AIRTIME BALANCE
router.get("/balance", controller.getbalance);
router.get("/status", controller.getStatus);
router.get("/information", controller.getInformation);

//PURCHASE AIRTIME BALANCE
router.post("/purchase",joiValidator(validation.purchaseairtime),controller.purchaseairtime);



export default router;
