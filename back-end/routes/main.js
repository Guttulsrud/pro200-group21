const express = require('express');
const router = express.Router();

// Require controller modules.
const ticketController = require('../controllers/ticketTypeController');
const userController = require('../controllers/userController');
const ticketInstanceController = require('../controllers/ticketInstanceController');


router.get('/', function(req, res, next) {
    res.send('Mainpage here!');
});


// POST request for creating Ticket.
router.post('/ticket-type/create', ticketController.ticket_create_post);

// POST request to delete Ticket.
router.post('/ticket-type/:id/delete', ticketController.ticket_delete_post);

// GET request to update Ticket.
router.get('/ticket-type/:id/update', ticketController.ticket_update_get);

// POST request to update Ticket.
router.post('/ticket-type/:id/update', ticketController.ticket_update_post);

// GET request for one Ticket.
router.get('/ticket-type/:id', ticketController.ticket_detail);

// GET request for list of all Ticket items.
router.get('/tickets', ticketController.ticket_list);


/// USER ROUTES ///

// GET request for creating User. NOTE This must come before route for id (i.e. display user).
router.get('/user/create', userController.user_create_get);

// POST request for creating User.
router.post('/user/create', userController.user_create_post);

// GET request to delete User.
router.get('/user/:id/delete', userController.user_delete_get);

// POST request to delete User.
router.post('/user/:id/delete', userController.user_delete_post);

// GET request to update User.
router.get('/user/:id/update', userController.user_update_get);

// POST request to update User.
router.post('/user/:id/update', userController.user_update_post);

// GET request for one User.
router.get('/user/:id', userController.user_detail);

// GET request for list of all Users.
router.get('/users', userController.user_list);


/// TICKETINSTANCE ROUTES ///

// GET request for creating a TicketInstance. NOTE This must come before route that displays TicketInstance (uses id).
router.get('/ticketinstance/create', ticketInstanceController.ticketInstance_create_get);

// POST request for creating TicketInstance.
router.post('/ticketinstance/create', ticketInstanceController.ticketInstance_create_post);

// GET request to delete TicketInstance.
router.get('/ticketinstance/:id/delete', ticketInstanceController.ticketInstance_delete_get);

// POST request to delete TicketInstance.
router.post('/ticketinstance/:id/delete', ticketInstanceController.ticketInstance_delete_post);

// GET request to update TicketInstance.
router.get('/ticketinstance/:id/update', ticketInstanceController.ticketInstance_update_get);

// POST request to update TicketInstance.
router.post('/ticketinstance/:id/update', ticketInstanceController.ticketInstance_update_post);

// GET request for one TicketInstance.
router.get('/ticketinstance/:id', ticketInstanceController.ticketInstance_detail);

// GET request for list of all TicketInstance.
router.get('/ticketinstances', ticketInstanceController.ticketInstance_list);


module.exports = router;
