const {Appointment} = require('../models/appointment.models');

const addAppointment = async (req, res) => {

    const {patientId, doctorId, date, time, description} = req.body;
    const existing_appointment = await Appointment.find({doctorId: doctorId});
    if(existing_appointment){
        for(const x of existing_appointment){
            if(x.date === date && x.time === time){
                res.status(409).json({message: "Appointment already exists"})
            }
        }
    }
    const newAppointment = await Appointment.create({
        patientId: patientId,
        doctorId: doctorId,
        date: date,
        time: time,
        description: description
    });

    res.status(200).json({message: "Appointment added successfully", newAppointment});
}


const acceptOrRejectApt = async (req, res) => {

    const {appointmentId, status, videoId} = req.body;
    const existing_appointment = await Appointment.findById(appointmentId);
    if(!existing_appointment) return res.status(404).json({message: "Appointment not found"});
    if(status === "accepted"){
        existing_appointment.status = status;
        existing_appointment.videoCallId = videoId;
        await existing_appointment.save();
    }else{
        existing_appointment.status = status;
        await existing_appointment.save();
    }

    res.status(200).json({message: "Appointment updated successfully", existing_appointment});

}



module.exports = {addAppointment, acceptOrRejectApt}