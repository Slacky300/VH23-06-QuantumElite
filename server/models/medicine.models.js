const mongoose = require('mongoose');

const medicineSchema = mongoose.Schema({

    name: {
        type: String
    },
    description:{
        type: String
    },
    price:{
        type: Number
    },
    quantity:{
        type: Number
    },
    inStock:{
        type: Boolean,
        default: true
    },
    vendorId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor'
    }],
    medImg:{
        type: {
            url: String,
        }
    },
    purchasedBypatient:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }],
   

}, {timestamps: true});


const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = { Medicine }