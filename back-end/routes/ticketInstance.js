const express = require('express');
const router = express.Router();

// Require controller module.
const ticketInstanceController = require('../controllers/ticketInstanceController');

/// TICKET INSTANCE ROUTES ///

// POST request for creating a ticket.
router.post('/create', ticketInstanceController.ticket_instance_create);

// POST request to delete ticket.
router.post('/delete/:id', ticketInstanceController.ticket_instance_delete);

// POST request to update ticket.
router.put('/update/:id', ticketInstanceController.ticket_instance_update);

// GET request for one ticket.
router.get('/details/:id', ticketInstanceController.ticket_instance_detail);

// GET request for list of all ticket.
router.get('/all', ticketInstanceController.ticket_instance_all);

module.exports = router;
