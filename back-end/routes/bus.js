const express = require('express');
const router = express.Router();

// Require controller module.
const busController = require('../controllers/busController');

/// BUS ROUTES ///

// POST request for creating bus
router.post('/create', busController.createBus);

// POST request to delete bus
router.post('/delete/:id', busController.bus_delete);

// POST request to update bus
router.post('/update/:id', busController.bus_update);

// GET request for one bus
router.get('/details/:id', busController.bus_detail);

// GET request for list of all bus
router.get('/all', busController.getBusAll);

module.exports = router;
