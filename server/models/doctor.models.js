const mongoose = require('mongoose')

const DoctorSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    },
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    }],
    prescriptions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prescription'
    }],
    patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }],
    reports: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Report'
    }],
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    certification: {
        type: {
            url: String
        }
    }
    ,
    doctorVerified: {
        type: Boolean,
        default: false
    },
    pincode: {
        type: String
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    hospital: {
        type: String
    },

    isVerified: {
        type: Boolean,
        default: false
    },
    isDoctor: {
        type: Boolean,
        default: true
    },
    verificationToken: {
        type: String
    },
}, {
    timestamps: true
})
