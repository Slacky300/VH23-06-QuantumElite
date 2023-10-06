const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({

    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    },
    date:{
        type: Date,
        required: true
    },
    time:{
        type: String,
        required: true
    },

    videoCallId:{
        type: String
    }
}, {timestamps: true});

const Appointment = mongoose.model("Appointment", AppointmentSchema);
module.exports = { Appointment }