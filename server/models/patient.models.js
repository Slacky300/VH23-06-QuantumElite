
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

    },

    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,

    },
    location: {
        type: String,

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
    role: {
        type: String,
        default: "patient"
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String
    },

})




const Patient = mongoose.model('Patient', PatientSchema)
module.exports = {
    Patient
}