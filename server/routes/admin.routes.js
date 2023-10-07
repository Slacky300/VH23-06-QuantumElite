const {verifyDoctor,verifyVendor,getAllDoctors, getAllVendors} = require("../controllers/admin.controllers");

const Router = require("express");
const router = Router();



router.get("/verifyDoctor/:id", verifyDoctor);
router.get("/verifyVendor/:id", verifyVendor);
router.get("/getAllDoctors",verifyJWT, getAllDoctors);
router.get("/getAllVendors",verifyJWT, getAllVendors);

module.exports = router;

