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
router.post('/ticket-type/delete', ticketTypeController.ticket_type_delete);

// POST request to update ticket-type
router.post('/ticket-type/update', ticketTypeController.ticket_type_update);

// GET request for one ticket-type
router.get('/ticket-type/:id', ticketTypeController.ticket_type_detail);

// GET request for list of all ticket-types
router.get('/ticket-types', ticketTypeController.ticket_type_all);



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



module.exports = router;
