const {Patient} = require("../models/patient.models");
const {Appointment} = require("../models/appointment.models");

const getAppointMents = async (req, res) => {

    try {
        const patientId = req.params.id;
        const patient = await Patient.findById(patientId);
        if(!patient) return res.status(404).json({message: "Patient not found"});
        const appointments = await Appointment.find({patientId: patientId}).populate('doctorId', '-password -appointments -patients -availableTimeSlots -createdAt -updatedAt -__v');
        res.status(200).json(appointments);

    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }

}



module.exports = {getAppointMents}