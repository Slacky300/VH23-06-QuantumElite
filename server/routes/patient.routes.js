const express = require('express')
const router = express.Router()

const {getAppointMents} = require('../controllers/patient.controller')
const {verifyJWT} = require("../middlewares/verifyJWT");

router.route('/:id').get(verifyJWT,getAppointMents);

module.exports = router;