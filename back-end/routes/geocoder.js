const express = require('express');
const router = express.Router();

const geoCoderController = require('../controllers/geocoderController');


// POST request for creating bus
router.get('/:address', geoCoderController.test);

module.exports = router;
