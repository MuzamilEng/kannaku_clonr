const mongoose = require('mongoose');

const user = new mongoose.Schema({
    telcoProvider: {
        type: String,
        required: true,
        // unique: true
    },
    modemNumber: {
        type: String,
        required: true,
        unique: true
    },
    amount: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('User', user);