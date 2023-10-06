const express = require('express')
const router = express.Router()
const {getAllDoctors,getPatients, editDoctorDetails,getDoctorDetails, getAllAppt} = require('../controllers/doctor.controllers')
const {verifyJWT} = require("../middlewares/verifyJWT");


router.route('/all-doctors').get(verifyJWT, getAllDoctors);
router.route('/:doctorId').get(verifyJWT, getPatients).put(verifyJWT, editDoctorDetails);
router.route('/doctor-details/:doctorId').get(verifyJWT, getDoctorDetails);
router.route('/all-appointments/:doctorId').get(verifyJWT, getAllAppt);

module.exports = router;