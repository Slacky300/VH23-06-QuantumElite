const {Vendor} = require("../models/vendor.models");
const {Medicine} = require("../models/medicine.modesl");


const getAllMedicine = async (req, res) => {
    try{
        const vendorId = req.params.id;
        const vendor = await Vendor.findById(vendorId);
        if(!vendor){
            return res.status(404).json({message: "Vendor not found"});
        }
        const medicines = await Medicine.find({vendor: vendorId});
        const data = [];
        for(const x of medicines){
            data.push({
                id: x._id,
                name: x.name,
                price: x.price,
                quantity: x.quantity,
                description: x.description,
                image: x.image
            });
        }
        res.status(200).json(data);
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {getAllMedicine};