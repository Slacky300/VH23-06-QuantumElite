const { Patient } = require('../models/patient.models')
const {Doctor} = require('../models/doctor.models')
const {Appointment} = require('../models/appointment.models');
const {Medicine} = require('../models/medicine.models');


const getPatients = async (req, res) => {

    const doctorId = req.params.doctorId;
    const existing_doctor = await Doctor.findById(doctorId);
    if(!existing_doctor){
        res.status(404).json({message: "Doctor not found"})
    }
    const patient_data = [];
    for(const x of existing_doctor.patients){
        const patient = await Patient.findById(x.patient);
        if(!patient){
            res.status(404).json({message: "Patient not found"})
        }
        patient_data.push({
            patientId: patient._id,
            fullName: patient.fullName,
            email: patient.email,
            age: patient.age,
            phone: patient.phone,
            location: patient.location,
            pincode: patient.pincode,
            disease: x.disease
        })
    }

}


module.exports = {getPatients}