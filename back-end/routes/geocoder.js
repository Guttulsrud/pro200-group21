const express = require('express');
const router = express.Router();

const geoCoderController = require('../controllers/geocoderController');


// POST request for creating bus
router.get('/:address', geoCoderController.getLocationByQueryName);


router.get('/:from/:to', geoCoderController.getGeoJson);

module.exports = router;
