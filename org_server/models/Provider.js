const mongoose = require("mongoose");

const ProviderSchema = new mongoose.Schema({}, { strict: false });

ProviderSchema.pre("insertMany", async function (next, docs) {
  for await (let doc of docs) {
    const existingProvider = await Provider.findOne({
      platform: doc.platform,
      service_id: doc.service_id,
      service_type: doc.service_type
    });

    if (existingProvider)
      throw new Error("Provider already exist in the database");
  }

  next();
});

const Provider = mongoose.model("Provider", ProviderSchema);

module.exports = Provider;
