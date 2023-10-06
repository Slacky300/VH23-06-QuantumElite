const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const vendorSchema = mongoose.Schema({

    fullName: {
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
    role: {
        type: String,
        default: "vendor"
    },
    vendorVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String
    },
    isVendor: {
        type: Boolean,
        default: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    certification: {
        type: String
    },



}, { timestamps: true });

const Vendor = mongoose.model('Vendor', vendorSchema);
module.exports = { Vendor }

