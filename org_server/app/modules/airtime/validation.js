import joi from "joi";

export default {
  purchaseairtime: {
    body: {
      schema: joi.object({
        amount: joi.number().required(),
        telco: joi
          .string()
          .allow("MTN", "GLO", "AIRTEL", "NINEMOBILE")
          .required(),
        phoneNumber: joi.number().required(),
        pin: joi.number().required(),
      }), 
    },
  },
};
