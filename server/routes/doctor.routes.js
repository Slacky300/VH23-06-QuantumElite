const express = require('express')
const router = express.Router()
const {getAllDoctors,getPatients} = require('../controllers/doctor.controllers')
const {verifyJWT} = require("../middlewares/verifyJWT");


router.route('/all-doctors').get(verifyJWT, getAllDoctors);
router.route('/:doctorId').get(verifyJWT, getPatients);

module.exports = router;