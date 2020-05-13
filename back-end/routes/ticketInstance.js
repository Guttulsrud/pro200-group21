const express = require('express');
const router = express.Router();


const ticketInstanceController = require('../controllers/ticketInstanceController');




/// TICKET ROUTES ///

// POST request for creating a ticket.
router.post('/ticket-instance/create', ticketInstanceController.ticket_instance_create);

// POST request to delete ticket.
router.post('/ticket-instance/delete', ticketInstanceController.ticket_instance_delete);

// POST request to update ticket.
router.post('/ticket-instance/update', ticketInstanceController.ticket_instance_update);

// GET request for one ticket.
router.get('/ticket-instance/:id', ticketInstanceController.ticket_instance_detail);

// GET request for list of all ticket.
router.get('/ticket-instances', ticketInstanceController.ticket_instance_all);

