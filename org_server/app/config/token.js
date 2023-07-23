import fetch from "node-fetch";

const getMobileToken = async () => {

    const client_id = process.env.CLIENT_ID;
    const client_secret = process.env.CLIENT_SECRET;

    const response = await fetch(`https://api.chenosis.io/oauth/client/accesstoken?grant_type=client_credentials`,{
      method: "POST",
      body: `client_id=${client_id}&client_secret=${client_secret}`,
      headers:{'Content-Type': 'application/x-www-form-urlencoded'}
    });
    const data = await response.json()
    return data;
}

export default  getMobileToken;
