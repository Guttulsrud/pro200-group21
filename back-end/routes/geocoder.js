const express = require('express');
const router = express.Router();

const geoCoderController = require('../controllers/geocoderController');


// POST request for creating bus
router.get('/:address', geoCoderController.getLocationByQueryName);


router.get('geo-json/:from/:to', geoCoderController.getGeoJson);


router.get('/coordinates/:lat/:lng', geoCoderController.getLocationNameByCoordinates);

module.exports = router;
