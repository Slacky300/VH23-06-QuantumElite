const { Patient } = require('../models/patient.models')
const { Doctor } = require('../models/doctor.models')
const { Appointment } = require('../models/appointment.models');
const { Medicine } = require('../models/medicine.models');
const AWS = require('aws-sdk')

require('dotenv').config();


AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-south-1'
});

const s3 = new AWS.S3();

const getPatients = async (req, res) => {

    const doctorId = req.params.doctorId;
    const existing_doctor = await Doctor.findById(doctorId);
    if (!existing_doctor) {
        res.status(404).json({ message: "Doctor not found" })
    }
    const patient_data = [];
    for (const x of existing_doctor.patients) {
        const patient = await Patient.findById(x.patient);
        if (!patient) {
            res.status(404).json({ message: "Patient not found" })
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

};


const getAllDoctors = async (req, res) => {

    try {
        // const doctors = await Doctor.find({doctorVerified: true});
        const doctors = await Doctor.find();
        if (!doctors) {
            res.status(404).json({ message: "No doctors found" })
        }
        const data = [];
        for (const x of doctors) {
            data.push({
                doctorId: x._id,
                fullName: x.fullName,
                email: x.email,
                speciality: x.speciality,
                phone: x.phone,
                location: x.location,
                pincode: x.pincode,
                certification: x.certification,
                doctorVerified: x.doctorVerified
            })
        }
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }

}

const editDoctorDetails = async (req, res) => {
    try {
        const doctorId = req.params.doctorId;
        const { fullName, phone, location, pincode, speciality } = req.body;

        const existing_doctor = await Doctor.findById(doctorId);
        console.log(fullName, phone, location, pincode, speciality);
        if (!existing_doctor) {
            res.status(404).json({ message: "Doctor not found" })
        }
        existing_doctor.fullName = fullName;
        existing_doctor.phone = phone;
        existing_doctor.location = location;
        existing_doctor.pincode = pincode;
        existing_doctor.speciality = speciality;
        if (req.file) {
            const params = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: `${Date.now()}-${req.file.originalname}`,
                Body: req.file.buffer,

            };
            const data = await s3.upload(params).promise();
            existing_doctor.photo = data.Location;
        }
        await existing_doctor.save();
        res.status(200).json({ message: "Doctor details updated successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const getDoctorDetails = async (req, res) => {
    try {
        const doctorId = req.params.doctorId;
        if (!doctorId) {
            res.status(404).json({ message: "Doctor not found" })
        }
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            res.status(404).json({ message: "Doctor not found" })
        }
        res.status(200).json(doctor)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}


const getAllAppt = async(req, res) => {
    const doctorId  = req.params.doctorId;
    const existing_doctor = await Doctor.findById(doctorId);
    if(!existing_doctor){
        res.status(404).json({message: "Doctor not found"})
    }
    const appts = [];
    const appointments = await Appointment.find({doctorId: doctorId});
    if(!appointments){
        res.status(404).json({message: "No appointments found"})
    }
    for(const x of appointments){
        const patient = await Patient.findById(x.patientId);
        if(!patient){
            res.status(404).json({message: "Patient not found"})
        }
        appts.push({
            appointmentId: x._id,
            patientId: x.patientId,
            patientName: patient.fullName,
            patientEmail: patient.email,
            patientPhone: patient.phone,
            date: x.date,
            time: x.time,
            description: x.description,
            status: x.status
        })
    }
}


module.exports = {getPatients,getAllDoctors,getDoctorDetails,editDoctorDetails, getAllAppt}