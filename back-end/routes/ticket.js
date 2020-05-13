const express = require('express');
const router = express.Router();

// Require controller modules.
const ticketController = require('../controllers/ticketController');

/// TICKET ROUTES ///

// POST request for creating ticket-type
router.post('/create', ticketController.ticket_create);

// POST request to delete ticket-type
router.post('/delete/:id', ticketController.ticket_delete);

// GET request for one ticket-type
router.get('/details/:id', ticketController.ticket_detail);

// GET request for list of all ticket-types
router.get('/all', ticketController.ticket_all);




module.exports = router;
