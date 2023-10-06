const {Patient} = require("../models/patient.model");
const {Appointment} = require("../models/appointment.model");

const getAppointMents = async (req, res) => {

    try {
        const patientId = req.params.id;
        const patient = await Patient.findById(patientId);
        if(!patient) return res.status(404).json({message: "Patient not found"});
        const data = [];
        for(const x of patient.appointments){
            const appointment = await Appointment.findById(x);
            if(!appointment) continue;
            data.push(
                {
                    id: appointment._id,
                    status: appointment.status,
                    date: appointment.date,
                    time: appointment.time,
                    videoCallId: appointment.videoCallId
                }
            )
            
        }
        res.status(200).json(data);

    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }

}



module.exports = {getAppointMents}