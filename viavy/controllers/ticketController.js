const Ticket = require('../models/ticket');

exports.index = function(req, res) {
    res.render("pages/index");
};

// Display list of all tickets.
exports.ticket_list = function(req, res) {
    res.send('NOT IMPLEMENTED yet');
};

// Display detail page for a specific ticket.
exports.ticket_detail = function(req, res) {
    res.send('NOT IMPLEMENTED yet');
};

// Display ticket create form on GET.
exports.ticket_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED yet');
};

// Handle ticket create on POST.
exports.ticket_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED yet');
};

// Display ticket delete form on GET.
exports.ticket_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED yet');
};

// Handle ticket delete on POST.
exports.ticket_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED yet');
};

// Display ticket update form on GET.
exports.ticket_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED yet');
};

// Handle ticket update on POST.
exports.ticket_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED yet');
};