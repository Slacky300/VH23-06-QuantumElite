const express = require('express')
const router = express.Router()
const {getAllDoctors,getPatients} = require('../controllers/doctor.controllers')


router.route('/all-doctors').get(getAllDoctors);
router.route('/:doctorId').get(getPatients);

module.exports = router;