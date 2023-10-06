const {verifyDoctor,verifyVendor,getAllDoctors} = require("../controllers/admin.controllers");

const Router = require("express");
const router = Router();
const {verifyJWT} = require("../middlewares/verifyJWT");

router.get("/verifyDoctor",verifyJWT, verifyDoctor);
router.get("/verifyVendor",verifyJWT, verifyVendor);

module.exports = router;