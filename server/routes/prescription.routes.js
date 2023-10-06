const express = require('express')
const router = express.Router()
const {verifyJWT} = require("../middlewares/verifyJWT");
const {getAssignedPrescriptions, addPrescription } = require("../controllers/prescription.controllers");
const { upload } = require('../middlewares/upload.middleware')

router.route('/').get(verifyJWT,getAssignedPrescriptions);
router.route('/add-prescription').post(upload.single('prescImg'), verifyJWT,addPrescription);

module.exports = router;