const express = require('express')
const router = express.Router()

const { registerUser, loginUser } = require('../controllers/auth.controllers')
const { upload } = require('../middlewares/upload.middleware')

router.post('/register', upload.single('certification'), registerUser)
router.post('/login', loginUser)

module.exports = router
