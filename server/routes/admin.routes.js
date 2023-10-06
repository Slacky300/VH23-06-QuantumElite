const {verifyDoctor,verifyVendor,getAllDoctors} = require("../controllers/admin.controllers");

const Router = require("express");
const router = Router();

router.get("/verifyDoctor",verifyDoctor);
router.get("/verifyVendor",verifyVendor);

module.exports = router;