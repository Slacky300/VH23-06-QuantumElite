const {Vendor} = require("../models/vendor.models");
const {Medicine} = require("../models/medicine.models");


const getAllMedicine = async (req, res) => {
    try{
        const vendorId = req.params.id;
        const vendor = await Vendor.findById(vendorId);
        if(!vendor){
            return res.status(404).json({message: "Vendor not found"});
        }
        const medicines = await Medicine.find({vendor: vendorId}).select("-vendor -id -_v -updatedAt");
        if(!medicines){
            return res.status(404).json({message: "Medicine not found"});
        }
        res.status(200).json(medicines);
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
}


module.exports = {getAllMedicine};