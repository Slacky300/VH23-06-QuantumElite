
const mongoose = require('mongoose')


const PatientSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    pincode: {
        type: String
    },
    medicine: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medicine'
    }],
    reports: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Report'
    }],
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    }],
    prescriptions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prescription'
    }],

})




const Patient = mongoose.model('Patient', PatientSchema)
module.exports = {
    Patient
}