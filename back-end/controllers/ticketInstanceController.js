const TicketModel = require('../models/ticketInstance');

// GET all tickets
exports.ticket_instance_all = function(req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance list');
};

// GET one ticket by ID
exports.ticket_instance_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance detail: ' + req.params.id);
};


// Handle Ticket delete on POST.
exports.ticket_instance_create = function(req, res) {
    res.send('ticket_create');
};

// Handle Ticket delete on POST.
exports.ticket_instance_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance delete POST');
};

// Handle Ticket update on POST.
exports.ticket_instance_update = function(req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance update POST');
};