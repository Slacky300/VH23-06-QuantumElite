const {Prescription} = require('../models/prescription.model');
const AWS = require('aws-sdk')



AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-south-1'
});

const s3 = new AWS.S3();

const addPrescription = async (req, res) => {

    try{
        const {patientId, description} = req.body;
        let prescImg = null;
        if(req.file){
            prescImg = req.file;
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `${Date.now()}-${req.file.originalname}`,
            Body: req.file.buffer,
            ContentType: req.file.mimetype,

        };
        const data = await s3.upload(params).promise();
        prescImg = data.Location;
        }
        const newPrescription = await Prescription.create({
            patient: patientId,
            doctor: req.user.id,
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
        const prescriptions = await Prescription.find({patient: patientId}).populate('patient').populate('doctor');
        if(!prescriptions){
            res.status(404).json({message: "No prescriptions found"})
        }
        
        res.status(200).json(prescriptions)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"})
    }
}

module.exports = {addPrescription, getAssignedPrescriptions}