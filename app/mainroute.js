var express = require('express');
var router = express.Router();

router.use('/wons', require('./routewon').router);
module.exports.router = router;