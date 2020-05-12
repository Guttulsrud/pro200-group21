const TicketModel = require('../models/ticket');

// GET all tickets
exports.ticket_all = function(req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance list');
};

// GET one ticket by ID
exports.ticket_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance detail: ' + req.params.id);
};


// Handle Ticket delete on POST.
exports.ticket_create = function(req, res) {
    res.send('ticket_create');
};

// Handle Ticket delete on POST.
exports.ticket_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance delete POST');
};

// Handle Ticket update on POST.
exports.ticket_update = function(req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance update POST');
};