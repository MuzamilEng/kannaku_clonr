import Bills from "../../models/Bills";
import { USSD_STRINGS } from "../../utils/constants";
import fetch from 'node-fetch';
import getMobileToken from "../../config/token";
import agent from "superagent";

export const getbalance = async (user,body) => {
  try {
    const phoneNumber = body.phoneNumber  ;  //user[mtn,phonenumber] user.telco , user.phone_number
    const telco = body.telco;  
    const pin = body.pin;
    const ussdstring = `${USSD_STRINGS[telco.toUpperCase()].CHECK_BALANCE}${phoneNumber}`; 

    //SEND USSD_QUERY TO USER MOBILE
    const data = [
    `key=${process.env.TEXTNG_API}`,
    `ussd=${ussdstring}`,
    `Amount=${+body.amount}`, 
    `ussd_steps=1`,
    `pin=${pin}`,
    `bypasscode=${process.env.BYPASSCODE}`];
    console.log(data)


    const response = await fetch("https://api.textng.xyz/carrier_ussd/",{
      method: "POST",
      body: data.join('&'),
      headers:{'Content-Type': 'application/x-www-form-urlencoded'},
    });
    const result = await response.text();
    return result
    if (result.status !== "successful") {
      throw new Error("An Error Occured with the transaction");
    }

    //RUN USSD FOR CHECKING DATA BALANCE FOR PROVIDED PHONE NUMBER
    //RETURN BALANCE RECIEVED ABOVE
    return {
      success: true,
      data: result
    };
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
};



export const purchaseairtime = async (user, { telco, phoneNumber, amount, pin }) => {
  try {
    // const billsaccount = await Bills.findOne({ userid: user._id });
    // if (billsaccount === null) {
    //   throw new Error("Bills Account not found");
    // }
    const ussdstring = `${USSD_STRINGS[telco.toUpperCase()].PURCHASE_AIRTIME}${phoneNumber}*${amount}#`;   // MTN82392839*900#

    //SEND DATA TO PURCHASE AIRTIME FOR USER 
    const data = [
    `key=${process.env.TEXTNG_API}`,
    `ussd=${ussdstring}`,
    `amount=${amount}`, 
    `ussd_steps=1`,
    `pin=${pin}`,
    `bypasscode=${process.env.BYPASSCODE}`];

    const response = await fetch("https://api.textng.xyz/carrier_ussd/",{
      method: "POST",
      body: data.join('&'),
      headers:{'Content-Type': 'application/x-www-form-urlencoded'},
    });

    const result = await response.text();
    console.log(result)
    return result;
    // if (result.status !== "successful") {
    //   throw new Error("An Error Occured with the transaction");
    // }
    const transaction = {
      amount,
      beneficiary: phoneNumber,
      transactiontime: new Date().toISOString(),
      transactiontype: "INCOMING",
      refid: result.ref_id,
    };
    const updatedtransactions = [
      ...billsaccount.airtime.transactions,
      transaction,
    ];

    await Bills.findByIdAndUpdate(
      billsaccount._id,
      {
        airtime: { ...billsaccount.airtime, transactions: updatedtransactions },
      },
      { new: true }
    );
    return {
      success: true,
      data: transaction,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};





export const getStatus = async (body) => {
  try {
    const ref_id = body.ref;

    //SEND USSD_QUERY TO USER MOBILE
    const data = [
    `key=${process.env.TEXTNG_API}`,
    `ref_id=${ref_id}`,
    ];
    console.log(data)


    const response = await fetch("https://api.textng.xyz/carrier_transaction_status/",{
      method: "POST",
      body: data.join('&'),
      headers:{'Content-Type': 'application/x-www-form-urlencoded'},
    });

    const result = await response.text();
    console.log(result)
    return result;
    if (result.status !== "successful") {
      throw new Error("An Error Occured with the transaction");
    }
    return {
      success: true,
      data: result
    };
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
};




export const getInformation = async (body) => {
  try {
    const phoneNumber = body.phoneNumber;
    const { access_token } = await getMobileToken();

    const response = await fetch(`https://api.chenosis.io/mobile/subscribers/${phoneNumber}/information`,{
      headers:{'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Bearer ${access_token}`},
    });

    const data = await response.json();
    return {
      success: true,
      data: data
    };
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
};