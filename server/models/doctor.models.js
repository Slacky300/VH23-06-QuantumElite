const mongoose = require('mongoose')

const DoctorSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    speciality: {
        type: String,

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
        type: String,
        required: true
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
    role: {
        type: String,
        default: "doctor"
    },
}, {
    timestamps: true
})


const Doctor = mongoose.model('Doctor', DoctorSchema)
module.exports = {
    Doctor
}
