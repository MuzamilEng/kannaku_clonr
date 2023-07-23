import Bills from "../../models/Bills";
import { USSD_STRINGS, DATA_PACKAGES } from "../../utils/constants";
import agent from "superagent";
import { getToken } from "../electricityBill/controller";
//SERVICE PENDING
export const validateCableTv = async (body) => {
  try {

    const token = await getToken();
    const userCableTvData = {
      "service": body.service,
      "channel": body.channel,
      "type": body.type,
      "account": body.account
    };
    const response = await fetch(
      `https://private-anon-af9bcbe189-vas40documentation.apiary-mock.com/api/v1/vas/cabletv/validation`,
      {
        method: "POST",
        body: JSON.stringify(userCableTvData),
        headers: {
          "Content-Type": "application/json",
          token: token,
          signature: signature,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
};



export const getCableTvBoque = async (body) => {
  try {

    const token = await getToken();
    const boqueCableTvData = {
      "service": body.service,
      "type": body.type
    };
    const response = await fetch(
      `https://private-anon-af9bcbe189-vas40documentation.apiary-mock.com/api/v1/vas/cabletv/bouquets`,
      {
        method: "POST",
        body: JSON.stringify(boqueCableTvData),
        headers: {
          "Content-Type": "application/json",
          token: token,
          signature: signature,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};



export const getCableTvBoqueAddon = async (body) => {
  try {

    const token = await getToken();
    const addonData = {
      "service": body.service,
      "type": body.type,
      "bouquetCode": body.code
    };
    const response = await fetch(
      `https://private-anon-af9bcbe189-vas40documentation.apiary-mock.com/api/v1/vas/cabletv/bouquets/addons`,
      {
        method: "POST",
        body: JSON.stringify(addonData),
        headers: {
          "Content-Type": "application/json",
          token: token,
          signature: signature,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};



export const getMultichoiceSubscription = async (body) => {
  try {

    const token = await getToken();
    const multichoiceData = {
      "phone": body.phone,
      "code": body.code,
      "renew": !!body.renew,
      "paymentMethod": body.paymentMethod,
      "service": body.service,
      "clientReference": body.clientReference,
      "pin": body.pin,
      "productMonths": body.productMonths,
      "totalAmount": body.totalAmount,
      "addonCode": body.addonCode,
      "addonMonths": body.addonMonths,
      "addonPrice": body.addonPrice,
      "productCode": body.productCode,
      "card": body.card,
      "channel": body.channel //B2B
    };
    const response = await fetch(
      `https://private-anon-af9bcbe189-vas40documentation.apiary-mock.com/api/v1/vas/cabletv/subscription`,
      {
        method: "POST",
        body: JSON.stringify(multichoiceData),
        headers: {
          "Content-Type": "application/json",
          token: token,
          signature: signature,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};