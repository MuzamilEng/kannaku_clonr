import { Router } from "express";
import { joiValidator } from "iyasunday";
import { guard } from "../../utils/middleware";
import * as controller from "./controller";
import validation from "./validation";

const router = Router();

//GET DATA PACKAGES
router.get("/balance", guard(), controller.getbalance);
//POST PURCHASE DATA
router.post("/purchase",guard(),joiValidator(validation.purchasedata),controller.purchasedata);
//GET BENEFICIARIES
router.get("/getbeneficiaries", controller.getbeneficiaries);
//ADD BENEFICIARIES
router.post(
  "addbeneficiary",
  guard(),
  joiValidator(validation.addbeneficiary),
  controller.addbeneficiary
);
//TRANSFER DATA BETWEEN USERS
router.post("transfer", guard(), controller.transferdata);
export default router;
