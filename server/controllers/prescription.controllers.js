const {Prescription} = require('../models/prescription.model');

const addPrescription = async (req, res) => {

    try{
        const {patientId, doctorId, prescImg, description} = req.body;
        const newPrescription = await Prescription.create({
            patient: patientId,
            doctor: doctorId,
            prescImg: prescImg,
            description: description
        });
        res.status(200).json({message: "Prescription added successfully", newPrescription});
    }catch(e){
        console.log(e);
        res.status(500).json({message: "Internal Server Error"})
    }
}


const getAssignedPrescriptions = async (req, res) => {
    try {

        const patientId = req.params.patientId;
        const prescriptions = await Prescription.find({patient: patientId});
        if(!prescriptions){
            res.status(404).json({message: "No prescriptions found"})
        }
        const data = [];
        for(const presc of prescriptions){
            data.push({
                prescriptionId: presc._id,
                prescImg: presc.prescImg,
                description: presc.description
            })
        }
        res.status(200).json(data)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"})
    }
}

module.exports = {addPrescription, getAssignedPrescriptions}