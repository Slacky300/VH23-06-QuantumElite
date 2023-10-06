const express = require('express')
const router = express.Router()
const {getAllDoctors,getPatients, editDoctorDetails,getDoctorDetails} = require('../controllers/doctor.controllers')
const {verifyJWT} = require("../middlewares/verifyJWT");


router.route('/all-doctors').get(verifyJWT, getAllDoctors);
router.route('/:doctorId').get(verifyJWT, getPatients).put(verifyJWT, editDoctorDetails);
router.route('/doctor-details/:id').get(verifyJWT, getDoctorDetails)

module.exports = router;