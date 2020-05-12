const TicketInstanceModel = require('../models/ticketInstance');
const TicketModel = require('../models/ticketType');

// Display list of all TicketInstance.
exports.ticketInstance_list = function(req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance list');
};

// Display detail page for a specific TicketInstance.
exports.ticketInstance_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance detail: ' + req.params.id);
};

// Display TicketInstance create form on GET.
exports.ticketInstance_create_get = function(req, res) {

    TicketModel.find({ticket_type: "Årsbillett"}, '')
        .exec(function (err, ticket) {
            if (err) {return "error";}


            TicketInstanceModel.create({ticket: ticket[0]}, function (err, instance) {
                if (err) return "error";

                res.send(`New instance created: ${instance}`);
            });
        })

};

// Handle TicketInstance create on POST.
exports.ticketInstance_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance create POST');
};

// Display TicketInstance delete form on GET.
exports.ticketInstance_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance delete GET');
};

// Handle TicketInstance delete on POST.
exports.ticketInstance_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance delete POST');
};

// Display TicketInstance update form on GET.
exports.ticketInstance_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance update GET');
};

// Handle TicketInstance update on POST.
exports.ticketInstance_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance update POST');
};