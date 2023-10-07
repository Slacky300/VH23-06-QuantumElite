const {verifyDoctor,verifyVendor,getAllDoctors, getAllVendors} = require("../controllers/admin.controllers");

const Router = require("express");
const router = Router();
const {verifyJWT} = require("../middlewares/verifyJWT");

router.get("/verifyDoctor",verifyJWT, verifyDoctor);
router.get("/verifyVendor",verifyJWT, verifyVendor);
router.get("/getAllDoctors",verifyJWT, getAllDoctors);
router.get("/getAllVendors",verifyJWT, getAllVendors);

module.exports = router;