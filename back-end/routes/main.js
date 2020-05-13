const express = require('express');
const router = express.Router();

// Require controller modules.
const ticketController = require('../controllers/ticketController');
const userController = require('../controllers/userController');
const ticketInstanceController = require('../controllers/ticketInstanceController');


router.get('/', function(req, res, next) {
    res.send('Mainpage here!');
});


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



/// TICKET-TYPE ROUTES ///

// POST request for creating ticket-type
router.post('/ticket/create', ticketController.ticket_create);

// POST request to delete ticket-type
router.post('/ticket/delete/:id', ticketController.ticket_delete);

// POST request to update ticket-type
router.post('/ticket/update/:id', ticketController.ticket_update);

// GET request for one ticket-type
router.get('/ticket/:id', ticketController.ticket_detail);

// GET request for list of all ticket-types
router.get('/tickets', ticketController.ticket_all);




module.exports = router;
