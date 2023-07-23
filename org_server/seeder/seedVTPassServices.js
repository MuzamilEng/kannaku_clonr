const mongoose = require("mongoose");
const axios = require("axios");
const dotenv = require("dotenv");
const colors = require("colors");
const { platform } = require("../constants/platform");
const connectDB = require("../config/db");
const fs = require("fs");
const Provider = require("../models/Provider");
const Scheme = require("../models/Scheme");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

const prepareVTPassService = async () => {
  try {
    let providers = [];
    let schemes = [];

    // fetch available services
    const { data } = await axios.get(
      "https://vtpass.com/api/service-categories"
    );

    // fetch service providers
    for await (let service of data.content) {
      const { data: serviceResponse } = await axios.get(
        `https://vtpass.com/api/services?identifier=${service.identifier}`
      );

      // fetch provider variations
      if (Array.isArray(serviceResponse?.content)) {
        for await (let provider of serviceResponse.content) {
          provider = {
            ...provider,
            platform: platform.VTPASS,
            service_name: service.name,
            service_id: provider.serviceID,
            service_type: service.identifier,
            schemes: [],
          };

          delete provider.serviceID;

          providers.push(provider);

          const response = await axios.get(
            `https://vtpass.com/api/service-variations?serviceID=${provider.service_id}`
          );

          if (Array.isArray(response?.data?.content?.variations)) {
            for await (let variation of response.data.content.variations) {
              variation = {
                ...variation,
                service_id: provider.service_id,
                fixed_price: variation.fixedPrice,
                platform: platform.VTPASS,
                service_type: service.identifier,
              };

              delete variation.fixedPrice;

              schemes.push(variation);
            }

            schemes = schemes.reduce((result, nextScheme) => {
              if (
                !result.find(
                  (scheme) =>
                    scheme.service_id === nextScheme.service_id &&
                    scheme.service_type === nextScheme.service_type &&
                    scheme.variation_code === nextScheme.variation_code
                )
              ) {
                result.push(nextScheme);
              }

              return result;
            }, []);
          }
        }
      }
    }

    const records = await Scheme.insertMany(schemes);

    for (let record of records) {
      const provider = providers.find(
        (provider) =>
          provider.service_id === record.service_id &&
          provider.service_type === record.service_type
      );

      provider.schemes.push(record._id);
    }

    await Provider.insertMany(providers);

    console.log("vtpass data seeded successfully");
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

prepareVTPassService();
