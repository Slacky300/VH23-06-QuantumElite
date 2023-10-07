const router = require('express').Router();
const { upload } = require('../middlewares/upload.middleware')
const {verifyJWT} = require("../middlewares/verifyJWT");
const {addMedicine, getAllMedicine} = require('../controllers/medicine.controller')
router.route('/').get(verifyJWT,getAllMedicine);
router.route('/add-medicine').post(upload.single('medImg'),verifyJWT, addMedicine);


module.exports = router;