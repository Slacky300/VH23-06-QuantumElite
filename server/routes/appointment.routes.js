const {addAppointment,acceptOrRejectApt,getAvailableAptTime} = require("../controllers/appointment.controllers");


const express = require('express')
const router = express.Router()
const {verifyJWT} = require("../middlewares/verifyJWT");


router.route('/add-appointment').post(verifyJWT,addAppointment);
router.route('/accept-or-reject-apt').patch(verifyJWT,acceptOrRejectApt);
router.route('/get-available-apt-time/:id').get(verifyJWT,getAvailableAptTime);


module.exports = router;