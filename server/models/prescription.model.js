const mongoose = require('mongoose');

const prescriptionSchema = mongoose.Schema({

    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    prescImg:{
        type: {
            url: String,
        }
    },
    description:{
        type: String
    }

});

const Prescription = mongoose.model('Prescription', prescriptionSchema);
module.exports = { Prescription }