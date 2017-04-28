var express = require('express');
var router = express.Router();

var apiController = require('../controllers/sensordata')

router.get('/', apiController.getData);

module.exports = router;
