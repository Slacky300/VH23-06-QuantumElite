const express = require('express')
const router = express.Router()

const {getAppointMents} = require('../controllers/patient.controller')

router.route('/:id').get(getAppointMents);

module.exports = router;