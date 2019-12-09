const express = require('express');
const router = express.Router();

// Require controller modules.
const ticket_controller = require('../controllers/ticketController');


// GET catalog home page.
router.get('/', ticket_controller.index);


// GET request for creating a Ticket. NOTE This must come before routes that display Ticket (uses id).
router.get('/ticket/create', ticket_controller.ticket_create_get);

// POST request for creating Ticket.
router.post('/ticket/create', ticket_controller.ticket_create_post);

// GET request to delete Ticket.
router.get('/ticket/:id/delete', ticket_controller.ticket_delete_get);

// POST request to delete Ticket.
router.post('/ticket/:id/delete', ticket_controller.ticket_delete_post);

// GET request to update Ticket.
router.get('/ticket/:id/update', ticket_controller.ticket_update_get);

// POST request to update Ticket.
router.post('/ticket/:id/update', ticket_controller.ticket_update_post);

// GET request for one Ticket.
router.get('/ticket/:id', ticket_controller.ticket_detail);

// GET request for list of all Ticket items.
router.get('/tickets', ticket_controller.ticket_list);

module.exports = router;
