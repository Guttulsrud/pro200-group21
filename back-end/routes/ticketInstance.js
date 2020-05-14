const express = require('express');
const router = express.Router();

// Require controller module.
const ticketInstanceController = require('../controllers/ticketInstanceController');

/// TICKET INSTANCE ROUTES ///

// POST request for creating a ticket.
router.post('/create', ticketInstanceController.createTicketInstance);

// POST request to delete ticket.
router.post('/delete/:id', ticketInstanceController.deleteTicketInstance);

// POST request to update ticket.
router.put('/update/:id', ticketInstanceController.updateTicketInstance);

// GET request for one ticket.
router.get('/details/:id', ticketInstanceController.getTicketInstanceById);

// GET request for one ticket.
router.get('/user/:id', ticketInstanceController.getTicketInstancesByUserID);

router.get('/type/:id', ticketInstanceController.getTypeByTicketInstanceId);

// GET request for list of all ticket.
router.get('/all', ticketInstanceController.getTicketInstanceAll);

module.exports = router;
