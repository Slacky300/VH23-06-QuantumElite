const { Doctor } = require("../models/doctor.models");
const { Vendor } = require("../models/vendor.models");

const getAllDoctors = async (req, res) => {

    try {
        const doctors = await Doctor.find();
        const data = [];
        for (const x of doctors) {
            data.push({
                id: x._id,
                name: x.name,
                email: x.email,
                phone: x.phone,
                specialization: x.specialization,
                experience: x.experience,
                rating: x.rating,
                image: x.image,
                description: x.description
            });
        }
        res.status(200).json(data)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }

}


const verifyDoctor = async (req, res) => {

    const doctorId = req.params.id;
    try {
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) return res.status(404).json({ message: "Doctor not found" });
        doctor.verified = true;
        await doctor.save();
        res.status(200).json({ message: "Doctor verified successfully", doctor });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }

}

const verifyVendor = async (req, res) => {
    try {
        const vendorId = req.params.id;
        const vendor = await Vendor.findById(vendorId);
        if (!vendor) return res.status(404).json({ message: "Vendor not found" });
        vendor.verified = true;
        await vendor.save();
        res.status(200).json({ message: "Vendor verified successfully", vendor });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
}

module.exports = { getAllDoctors, verifyDoctor, verifyVendor }