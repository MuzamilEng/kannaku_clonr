import fetch from "node-fetch";
import parser from 'xml-js'
import crypto from 'crypto';
require("dotenv").config({ path: "./.env" });
const APP_KEY = process.env.EEDC_APP_KEY;
const dealerCode = process.env.DEALER_CODE_EEDC;



export const getCustomerDetailEEDC = async (body) => {
    try {
      const meterNo = body.meterNo;
      const hashString = crypto.createHash('md5').update(`${meterNo}+${dealerCode}`).digest('hex')
  
      const customerXMLData = `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <FetchCust xmlns="http://localhost/eedc/vproxy/">
            <AccountNo>${meterNo}</AccountNo>
            <hashstring>${hashString}</hashstring>
            <api_key>${APP_KEY}</api_key>
          </FetchCust>
        </soap:Body>
      </soap:Envelope>`
  
      const response = await fetch(
        `http://eedcstaging.phcnpins.com/api/vproxy.asmx?op=FetchCust`,
        {
          method: "POST",
          body: customerXMLData,
          headers: {
            "soapAction": "http://localhost/eedc/vproxy/FetchCust",
            "Content-Type": "text/xml",
          },
          }
      );
  
      let data = await response.text();
      data = parser.xml2js(data,{ compact:true,object:true,trim:true,ignoreDeclaration:true});
      const CustomerResult = data[`soap:Envelope`][`soap:Body`] ;
      return {CustomerResult};
    } catch (err) {
      return {
        success: false,
        message: err.message,
      };
    }
  };


  export const getUsageDetailEEDC = async (body) => {
    try {
      const meterNo = body.meterNo;
      const hashString = crypto.createHash('md5').update(`${meterNo}+${dealerCode}`).digest('hex')
  
      const customerXMLData = `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <FetchUsage xmlns="http://localhost/eedc/vproxy/">
            <MeterNo>${meterNo}</MeterNo>
            <StartDate>${body.startDate}</StartDate>
            <EndDate>${body.endDate}</EndDate>
            <hashstring>${hashString}</hashstring>
            <api_key>${APP_KEY}</api_key>
          </FetchUsage>
        </soap:Body>
      </soap:Envelope>`
  
      const response = await fetch(
        `http://eedcstaging.phcnpins.com/api/vproxy.asmx?op=FetchUsage`,
        {
          method: "POST",
          body: customerXMLData,
          headers: {
            "soapAction": "http://localhost/eedc/vproxy/FetchUsage",
            "Content-Type": "text/xml",
          },
          }
      );
  
      let data = await response.text();
      data = parser.xml2js(data,{ compact:true,object:true,trim:true,ignoreDeclaration:true});
      const CustomerResult = data[`soap:Envelope`][`soap:Body`] ;
      return {CustomerResult};
    } catch (err) {
      return {
        success: false,
        message: err.message,
      };
    }
  };


  export const getDealerBalanceEEDC = async (body) => {
    try {
      const meterNo = body.meterNo;
      const hashString = crypto.createHash('md5').update(`${meterNo}+${dealerCode}`).digest('hex')
  
      const customerXMLData = `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <FetchDealerBalance xmlns="http://localhost/eedc/vproxy/">
            <dealer_code>${dealerCode}</dealer_code>
            <hashstring>${hashString}</hashstring>
            <api_key>${APP_KEY}</api_key>
          </FetchDealerBalance>
        </soap:Body>
      </soap:Envelope>`
  
      const response = await fetch(
        `http://eedcstaging.phcnpins.com/api/vproxy.asmx?op=FetchDealerBalance`,
        {
          method: "POST",
          body: customerXMLData,
          headers: {
            "soapAction": "http://localhost/eedc/vproxy/FetchDealerBalance",
            "Content-Type": "text/xml",
          },
          }
      );
  
      let data = await response.text();
      data = parser.xml2js(data,{ compact:true,object:true,trim:true,ignoreDeclaration:true});
      const CustomerResult = data[`soap:Envelope`][`soap:Body`] ;
      return {CustomerResult};
    } catch (err) {
      return {
        success: false,
        message: err.message,
      };
    }
  };


  export const payElectricityEEDC = async (body) => {
    try {
      const meterNo = body.meterNo;
      const hashString = crypto.createHash('md5').update(`${meterNo}+${dealerCode}`).digest('hex')
  
      const customerXMLData = `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <PostTransaction xmlns="http://localhost/eedc/vproxy/">
            <AccountNo>${meterNo}</AccountNo>
            <amount>${+body.amount}</amount>
            <hashstring>${hashString}</hashstring>
            <api_key>${APP_KEY}</api_key>
            <phoneNo>${body.phoneNumber}</phoneNo>
            <txnref>${body.ref}</txnref>
          </PostTransaction>
        </soap:Body>
      </soap:Envelope>`
  
      const response = await fetch(
        `http://eedcstaging.phcnpins.com/api/vproxy.asmx?op=PostTransaction`,
        {
          method: "POST",
          body: customerXMLData,
          headers: {
            "soapAction": "http://localhost/eedc/vproxy/PostTransaction",
            "Content-Type": "text/xml",
          },
          }
      );
  
      let data = await response.text();
      data = parser.xml2js(data,{ compact:true,object:true,trim:true,ignoreDeclaration:true});
      const CustomerResult = data[`soap:Envelope`][`soap:Body`] ;
      return {CustomerResult};
    } catch (err) {
      return {
        success: false,
        message: err.message,
      };
    }
  };