import fetch from "node-fetch";
import parser from 'xml-js'
import crypto from 'crypto';
require("dotenv").config({ path: "./.env" });
const APP_KEY = process.env.IKEJA_APP_KEY;
const delearCode = process.env.DEALER_CODE_IKEJA;


export const getCustomerDetailIKEJA = async (body) => {
  try {
    const meterNo = body.meterNo;
    const hashString = crypto.createHash('md5').update(`${meterNo}+${delearCode}`).digest('hex')

    const customerXMLData = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <FetchCust xmlns="http://IKEDC_API/vproxy/">
          <MeterNo>${meterNo}</MeterNo>
          <hashstring>${hashString}</hashstring>
          <api_key>${APP_KEY}</api_key>
        </FetchCust>
      </soap:Body>
    </soap:Envelope>`

    const response = await fetch(
      `http://demoiepinscomp.vatebra.com/api/vproxy.asmx?op=FetchCust`,
      {
        method: "POST",
        body: customerXMLData,
        headers: {
          "soapAction": "http://IKEDC_API/vproxy/FetchCust",
          "Content-Type": "text/xml",
        },
        }
    );

    let data = await response.text();
    data = parser.xml2js(data,{ compact:true,object:true,trim:true,ignoreDeclaration:true});
    const CustomerResult = data[`soap:Envelope`][`soap:Body`].FetchCustResponse.FetchCustResult[`_text`] ;
    return {CustomerResult};
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
};





export const getCustomerUsage = async (body) => {
  try {
    const meterNo = body.meterNo;
    const hashString = crypto.createHash('md5').update(`${meterNo}+${delearCode}`).digest('hex')

    const customerXMLData = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <FetchUsage xmlns="http://IKEDC_API/vproxy/">
          <MeterNo>${meterNo}</MeterNo>
          <hashstring>${hashString}</hashstring>
          <StartDate>${body.startDate}</StartDate>
          <EndDate>${body.endDate}</EndDate>
          <api_key>${APP_KEY}</api_key>
        </FetchCust>
      </soap:Body>
    </soap:Envelope>`

    const response = await fetch(
      `http://demoiepinscomp.vatebra.com/api/vproxy.asmx?op=FetchUsage`,
      {
        method: "POST",
        body: customerXMLData,
        headers: {
          "soapAction": "http://IKEDC_API/vproxy/FetchUsage",
          "Content-Type": "text/xml",
        },
        }
    );

    let data = await response.text();
    data = parser.xml2js(data,{ compact:true,object:true,trim:true,ignoreDeclaration:true});
    const CustomerUsageResult = data ;
    return {CustomerUsageResult};
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
};



export const getDealerBalance = async (body) => {
  try {
    const meterNo = body.meterNo;
    const hashString = crypto.createHash('md5').update(`${meterNo}+${delearCode}`).digest('hex')

    const dealerXMLData = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <FetchDealerBalance xmlns="http://IKEDC_API/vproxy/">
          <dealer_code>${delearCode}</dealer_code>
          <hashstring>${hashString}</hashstring>
          <api_key>${APP_KEY}</api_key>
        </FetchDealerBalance>
      </soap:Body>
    </soap:Envelope>`

    const response = await fetch(
      `http://demoiepinscomp.vatebra.com/api/vproxy.asmx?op=FetchDealerBalance`,
      {
        method: "POST",
        body: dealerXMLData,
        headers: {
          "soapAction": "http://IKEDC_API/vproxy/FetchDealerBalance",
          "Content-Type": "text/xml",
        },
        }
    );

    let data = await response.text();
    data = parser.xml2js(data,{ compact:true,object:true,trim:true,ignoreDeclaration:true});
    const DealerBalance = data[`soap:Envelope`][`soap:Body`].FetchDealerBalanceResponse.FetchDealerBalanceResult[`_text`] ;
    return {DealerBalance};
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
};



export const payElectricity = async (body) => {
  try {
    const meterNo = body.meterNo;
    const hashString = crypto.createHash('md5').update(`${meterNo}+${delearCode}`).digest('hex')

    const transactionXMLData = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <PostTransaction xmlns="http://IKEDC_API/vproxy/">
        <AccountNo>${meterNo}</AccountNo>
        <amount>${+body.amount}</amount>
        <hashstring>${hashString}</hashstring>
        <api_key>${APP_KEY}</api_key>
        </PostTransaction>
      </soap:Body>
    </soap:Envelope>`

    const response = await fetch(
      `http://demoiepinscomp.vatebra.com/api/vproxy.asmx?op=PostTransaction`,
      {
        method: "POST",
        body: transactionXMLData,
        headers: {
          "soapAction": "http://IKEDC_API/vproxy/PostTransaction",
          "Content-Type": "text/xml",
        },
        }
    );

    let data = await response.text();
    data = parser.xml2js(data,{ compact:true,object:true,trim:true,ignoreDeclaration:true});
    const DealerBalance = data ;
    return {DealerBalance};
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
};