const express = require('express');
const router = express.Router();

// Require controller module.
const userController = require('../controllers/userController');

/// TICKET ROUTES ///

// POST request for creating ticket-type
router.post('/create', userController.user_create_post);

// GET request for one ticket-type
router.get('/details/:id', userController.user_detail);

// GET request for list of all ticket-types
router.get('/all', userController.user_all);


module.exports = router;
