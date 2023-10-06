const express = require('express')
const router = express.Router()

const { verifyJWT } = require("../middlewares/verifyJWT");
const { getAllDoctors, getPatients, editDoctorDetails, getDoctorDetails } = require('../controllers/doctor.controllers')


router.route('/all-doctors').get(verifyJWT, getAllDoctors);
router.route('/:doctorId').get(verifyJWT, getPatients).put(verifyJWT, editDoctorDetails);
router.route('/doctor-details/:doctorId').get(verifyJWT, getDoctorDetails)

module.exports = router;
