import joi from "joi";

export default {
  purchasedata: {
    body: {
      schema: joi.object({
        amount: joi.number().required(),
        telco: joi
          .string()
          .allow("MTN", "GLO", "AIRTEL", "NINEMOBILE")
          .required(),
        phonenumber: joi.number().required(),
      }),
    },
  },
  addbeneficiary: {
    body: {
      schema: joi.object({
        number: joi.number().required(),
        description: joi.string().required(),
      }),
    },
  },
};
