const express = require('express')
const router = express.Router()

const { registerUser, loginUser,getLoggedinUser } = require('../controllers/auth.controllers')
const { upload } = require('../middlewares/upload.middleware')
const {verifyJWT} = require("../middlewares/verifyJWT");

router.post('/register', upload.single('certification'), registerUser)
router.post('/login', loginUser);
router.get('/get-logged-in-user', verifyJWT, getLoggedinUser);

module.exports = router
