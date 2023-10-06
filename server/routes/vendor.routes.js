const router = require('express').Router();

router.route('/').get(getAllMedicine);


module.exports = router;