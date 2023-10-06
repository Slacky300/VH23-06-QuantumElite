const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const vendorSchema = mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    pincode: {
        type: String
    },
    medicines: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medicine'
    }],

}, { timestamps: true });

const Vendor = mongoose.model('Vendor', vendorSchema);
module.exports = { Vendor }

