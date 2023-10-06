const { Patient } = require('../models/patient.models')
const { Doctor } = require('../models/doctor.models')
const { Vendor } = require('../models/vendor.model')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const registerUser = async (req, res) => {
    const { userType } = req.body;
    const { fullName, email, password, age, phone, location, pincode } = req.body
    try {
        if (!userType) {
            return res.status(400).json({ message: "Please select a user type" })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        if (userType === "patient") {
            const patient = await Patient.findOne({ email })
            if (patient) {
                return res.status(400).json({ message: "User already exists" })
            }
            const newPatient = new Patient({
                fullName, email, password: hashedPassword
            })
            await newPatient.save()
            return res.status(200).json({ message: "Patient registered successfully" })
        }
        else if (userType === "doctor") {
            const doctor = await Doctor.findOne({ email })
            if (doctor) {
                return res.status(400).json({ message: "User already exists" })
            }
            const newDoctor = new Doctor({
                fullName, email, password: hashedPassword
            })
            await newDoctor.save()
            return res.status(200).json({ message: "Doctor registered successfully" })
        }
        else if (userType === "vendor") {
            const vendor = await Vendor.findOne({ email })
            if (vendor) {
                return res.status(400).json({ message: "User already exists" })
            }
            const newVendor = new Vendor({
                fullName, email, password: hashedPassword
            })
            await newVendor.save()
            return res.status(200).json({ message: "Vendor registered successfully" })
        }
        else {
            return res.status(400).json({ message: "Please select a valid user type" })
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" })
    }
}

module.exports = {
    registerUser
}