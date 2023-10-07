const { verifyDoctor, verifyVendor } = require('../controllers/admin.controllers')

const Router = require("express");
const router = Router();



router.get("/verifyDoctor/:id", verifyDoctor);
router.get("/verifyVendor/:id", verifyVendor);

module.exports = router;

