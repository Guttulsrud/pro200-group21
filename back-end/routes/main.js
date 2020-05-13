const express = require('express');
const router = express.Router();

// Require controller modules.
const ticketTypeController = require('../controllers/ticketTypeController');
const userController = require('../controllers/userController');
const ticketController = require('../controllers/ticketController');


router.get('/', function(req, res, next) {
    res.send('Mainpage here!');
});


/// TICKET ROUTES ///

// POST request for creating a ticket.
router.post('/ticket/create', ticketController.ticket_create);

// POST request to delete ticket.
router.post('/ticket/delete', ticketController.ticket_delete);

// POST request to update ticket.
router.post('/ticket/update', ticketController.ticket_update);

// GET request for one ticket.
router.get('/ticket/:id', ticketController.ticket_detail);

// GET request for list of all ticket.
router.get('/tickets', ticketController.ticket_all);



/// TICKET-TYPE ROUTES ///

// POST request for creating ticket-type
router.post('/ticket-type/create', ticketTypeController.ticket_type_create);

// POST request to delete ticket-type
router.post('/ticket-type/delete/:id', ticketTypeController.ticket_type_delete);

// POST request to update ticket-type
router.post('/ticket-type/update/:id', ticketTypeController.ticket_type_update);

// GET request for one ticket-type
router.get('/ticket-type/:id', ticketTypeController.ticket_type_detail);

// GET request for list of all ticket-types
router.get('/ticket-types', ticketTypeController.ticket_type_all);




module.exports = router;
