const {addAppointment,acceptOrRejectApt} = require("../controllers/appointment.controllers");


const express = require('express')
const router = express.Router()
const {verifyJWT} = require("../middlewares/verifyJWT");


router.route('/add-appointment').post(verifyJWT,addAppointment);
router.route('/accept-or-reject-apt').put(verifyJWT,acceptOrRejectApt);


module.exports = router;