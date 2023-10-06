const router = require('express').Router();
const { upload } = require('../middlewares/upload.middleware')
const {verifyJWT} = require("../middlewares/verifyJWT");
const {getAllMedicine} = require("../controllers/vendor.controllers");
const {addMedicine} = require('../controllers/medicine.controller')
router.route('/').get(getAllMedicine);
router.route('/add-medicine').post(upload.single('medImg'),addMedicine);


module.exports = router;