const express = require('express');
const router = express.Router();

// Require controller modules.
const ticket_controller = require('../controllers/ticketController');
// const user_controller = require('../controllers/userController');
const ticketInstance_controller = require('../controllers/ticketInstanceController');



/// Ticket Routes ///

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


//
// /// User Routes///
//
// // GET request for creating User. NOTE This must come before route for id (i.e. display User).
// router.get('/user/create', user_controller.user_create_get());
//
// // POST request for creating User.
// router.post('/user/create', user_controller.user_create_post());
//
// // GET request to delete User.
// router.get('/user/:id/delete', user_controller.user_delete_get());
//
// // POST request to delete User.
// router.post('/user/:id/delete', user_controller.user_delete_post());
//
// // GET request to update User.
// router.get('/user/:id/update', user_controller.user_update_get());
//
// // POST request to update User.
// router.post('/user/:id/update', user_controller.user_update_post());
//
// // GET request for one User.
// router.get('/user/:id', user_controller.user_detail());
//
// // GET request for list of all Users.
// router.get('/users', user_controller.user_list());


/// TicketInstance routes ///
//
// // GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
// router.get('/ticketinstance/create', ticketInstance_controller.ticketInstance_create_get());
//
// // POST request for creating BookInstance.
// router.post('/ticketinstance/create', ticketInstance_controller.ticketInstance_create_post());
//
// // GET request to delete BookInstance.
// router.get('/ticketinstance/:id/delete', ticketInstance_controller.ticketInstance_delete_get());
//
// // POST request to delete BookInstance.
// router.post('/ticketinstance/:id/delete', ticketInstance_controller.ticketInstance_delete_post());
//
// // GET request to update BookInstance.
// router.get('/ticketinstance/:id/update', ticketInstance_controller.ticketInstance_update_get());
//
// // POST request to update BookInstance.
// router.post('/ticketinstance/:id/update', ticketInstance_controller.ticketInstance_update_post());
//
// // GET request for one BookInstance.
// router.get('/ticketinstance/:id', ticketInstance_controller.ticketInstance_detail());
//
// // GET request for list of all BookInstance.
// router.get('/ticketinstances', ticketInstance_controller.ticketInstance_list());

module.exports = router;
