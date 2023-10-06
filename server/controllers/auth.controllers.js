const { Patient } = require('../models/patient.models')
const { Doctor } = require('../models/doctor.models')
const { Vendor } = require('../models/vendor.models')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const AWS = require('aws-sdk')
require('dotenv').config();


AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-south-1'
});

const s3 = new AWS.S3();


const registerUser = async (req, res) => {
    const { userType } = req.body;
    const { fullName, email, password, age, phone, location, pincode } = req.body
    let certification;
    try {

        if (req.file) {
            certification = req.file;
        }


        if (!userType || !email || !password) {
            return res.status(400).json({ message: "please add all the fields" })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        if (userType === "patient") {
            const patient = await Patient.findOne({ email })
            const doctor = await Doctor.findOne({ email })
            const vendor = await Vendor.findOne({ email })
            if (patient || doctor || vendor) {
                return res.status(400).json({ message: "User already exists" })
            }
            const newPatient = new Patient({
                fullName, email, password: hashedPassword
            })
            await newPatient.save()
            return res.status(200).json({ message: "Patient registered successfully", patient: newPatient })
        }
        else if (userType === "doctor") {
            // if (!certification) {
            //     return res.status(400).json({ message: "Please upload your certification" })
            // }
            if (req.file) {
                const params = {
                    Bucket: process.env.AWS_BUCKET_NAME,
                    Key: `${Date.now()}-${req.file.originalname}`,
                    Body: req.file.buffer,
                    ContentType: req.file.mimetype,

                };
                const data = await s3.upload(params).promise();
                certification = data.Location;
            } else {
                return res.status(400).json({ message: "Please upload your certification for req.file" })
            }
            const patient = await Patient.findOne({ email })
            const doctor = await Doctor.findOne({ email })
            const vendor = await Vendor.findOne({ email })
            if (doctor || patient || vendor) {
                return res.status(400).json({ message: "User already exists" })
            }
            const newDoctor = new Doctor({
                fullName, email, password: hashedPassword,
                certification
            })
            await newDoctor.save()
            return res.status(200).json({ message: "Doctor registered successfully", doctor: newDoctor })
        }
        else if (userType === "vendor") {
            const patient = await Patient.findOne({ email })
            const doctor = await Doctor.findOne({ email })
            const vendor = await Vendor.findOne({ email })
            if (req.file) {
                const params = {
                    Bucket: process.env.AWS_BUCKET_NAME,
                    Key: `${Date.now()}-${req.file.originalname}`,
                    Body: req.file.buffer,
                    ContentType: req.file.mimetype,

                };
                const data = await s3.upload(params).promise();
                certification = data.Location;
            } else {
                return res.status(400).json({ message: "Please upload your certification for req.file" })
            }
            if (vendor || patient || doctor) {
                return res.status(400).json({ message: "User already exists" })
            }
            const newVendor = new Vendor({
                fullName, email, password: hashedPassword,
                certification
            })
            await newVendor.save()
            return res.status(200).json({ message: "Vendor registered successfully", vendor: newVendor })
        }
        else {
            return res.status(400).json({ message: "Please select a valid user type" })
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" })
    }
}



const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const patient = await Patient.findOne({ email });
        const doctor = await Doctor.findOne({ email });
        const vendor = await Vendor.findOne({ email });

        if (!patient && !doctor && !vendor) {
            return res.status(400).json({ message: "User does not exist" })
        }

        if (patient) {
            const isMatch = await bcrypt.compare(password, patient.password)
            if (!isMatch) {
                return res.status(400).json({ message: "Invalid credentials" })
            }
            const token = jwt.sign({ id: patient._id }, process.env.JWT_SECRET)
            return res.status(200).json({ message: "Patient logged in successfully", token, patient: patient })
        }
        else if (doctor) {
            const isMatch = await bcrypt.compare(password, doctor.password)
            if (!isMatch) {
                return res.status(400).json({ message: "Invalid credentials" })
            }
            const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET)
            return res.status(200).json({ message: "Doctor logged in successfully", token, doctor: doctor })
        }
        else if (vendor) {
            const isMatch = await bcrypt.compare(password, vendor.password)
            if (!isMatch) {
                return res.status(400).json({ message: "Invalid credentials" })
            }
            const token = jwt.sign({ id: vendor._id }, process.env.JWT_SECRET)
            return res.status(200).json({ message: "Vendor logged in successfully", token, vendor: vendor })
        }
        else {
            return res.status(400).json({ message: "Invalid credentials" })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" })
    }
}



module.exports = {
    registerUser,
    loginUser
}