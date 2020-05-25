const express = require('express');
const router = express.Router();

// Require controller module.
const ticketController = require('../controllers/ticketController');

/// TICKET INSTANCE ROUTES ///

// POST request for creating a ticket.
router.post('/create', ticketController.createTicket);

// POST request to delete ticket.
router.put('/archive/:id', ticketController.archiveTicket);

// POST request to update ticket.
router.put('/update/:id', ticketController.updateTicket);

// GET request for one ticket.
router.get('/details/:id', ticketController.getTicketById);

// GET request for one ticket.
router.get('/user/:id', ticketController.getTicketByUserID);

// GET request for list of all ticket.
router.get('/all', ticketController.getTicketAll);

module.exports = router;
