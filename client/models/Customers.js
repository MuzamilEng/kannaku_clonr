const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    website: {
        type: String,
    }

});

const Customer = mongoose.model.Customer || mongoose.model("Customer", CustomerSchema);

module.exports = Customer;