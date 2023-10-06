const {Medicine} = require("../models/medicine.model");
const {Patient} = require("../models/patient.model");
const {Vendor} = require("../models/vendor.models");



const getPurchasedMedicine = (req, res) => {

    try{
        const patientId = req.params.patientId;
        const medicines = Medicine.find({purchasedBypatient: patientId})
        if(!medicines){
            res.status(404).json({message: "No medicines found"})
        }
        const data = [];
        for(const med of medicines){
            data.push({

                medicineId: med._id,
                medicineName: med.medicineName,
                quantity: med.quantity,
                price: med.price,
                medImg: med.medImg,

            })
        }
        res.status(200).json(data)
    }catch(e){
        console.log(e);
        res.status(500).json({message: "Internal Server Error"})
    }
};


const purchaseMedicine = async (req, res) => {
    try{
        const {patientId, medicineId} = req.body;
        const patient = await Patient.findById(patientId);
        if(!patient){
            res.status(404).json({message: "Patient not found"})
        }
        const medicine = await Medicine.findById(medicineId);
        if(!medicine){
            res.status(404).json({message: "Medicine not found"})
        }
        medicine.purchasedBypatient = patientId;
        await medicine.save();
        res.status(200).json({message: "Medicine purchased successfully"})
    }catch(e){
        console.log(e);
        res.status(500).json({message: "Internal Server Error"})
    }
};



const addMedicine = async (req, res) => {

    try{
        const {medicineName, quantity, price, description} = req.body;
        let medImg = req.files
       
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `${Date.now()}-${req.file.originalname}`,
            Body: req.file.buffer,
            ContentType: req.file.mimetype,

        };
        const data = await s3.upload(params).promise();
        medImg = data.Location;
        const newMedicine = await Medicine.create({
            medicineName: medicineName,
            quantity: quantity,
            price: price,
            description: description,
            medImg: medImg
        });
        const vendorId = req.user.id;
        newMedicine.vendorId = vendorId;
        await newMedicine.save();
        const vendor = await Vendor.findById(vendorId);
        if(!vendor){
            res.status(404).json({message: "Vendor not found"})
        }
        vendor.medicines.push(newMedicine._id);
        await vendor.save();
        res.status(200).json({message: "Medicine added successfully", newMedicine})
    }catch(e){
        console.log(e);
        res.status(500).json({message: "Internal Server Error"})
    }
}



module.exports = {getPurchasedMedicine, purchaseMedicine, addMedicine}