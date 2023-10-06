const {addAppointment,acceptOrRejectApt} = require("../controllers/appointment.controllers");


const express = require('express')
const router = express.Router()

router.route('/add-appointment').post(addAppointment);
router.route('/accept-or-reject-apt').put(acceptOrRejectApt);


module.exports = router;