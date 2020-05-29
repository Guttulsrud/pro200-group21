const express = require('express');
const router = express.Router();

// Require controller module.
const userController = require('../controllers/userController');

/// USER ROUTES ///

// POST request for creating ticket-type
router.post('/create', userController.createUser);

// GET request for one ticket-type
router.get('/details/:id', userController.getUserById);

// GET request for list of all ticket-types
router.get('/all', userController.getUsersAll);


module.exports = router;
