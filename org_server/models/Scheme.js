const mongoose = require("mongoose");

const SchemeSchema = new mongoose.Schema({}, { strict: false });

SchemeSchema.pre("insertMany", async function (next, docs) {
  for await (let doc of docs) {
    const existingScheme = await Scheme.findOne({
      platform: doc.platform,
      service_id: doc.service_id,
      service_type: doc.service_type,
      variation_code: doc.variation_code,
    });

    if (existingScheme) throw new Error("Scheme already exist in the database");
  }

  next();
});

const Scheme = mongoose.model("Scheme", SchemeSchema);

module.exports = Scheme;
