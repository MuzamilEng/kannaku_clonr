import { Router } from "express";
import { joiValidator } from "iyasunday";
import { guard } from "../../utils/middleware";
import * as controller from "./controller";
import validation from "./validation";

const router = Router();

//Cable TV Validation
router.get("/validation", controller.validateCableTv);
//POST PURCHASE DATA
router.get("/boque-cable-tv", joiValidator(validation.purchasedata), controller.getCableTvBoque );
router.get("/boque-cable-tv-addon", joiValidator(validation.purchasedata), controller.getCableTvBoqueAddon );

export default router;
