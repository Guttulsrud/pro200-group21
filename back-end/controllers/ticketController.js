const TicketModel = require('../models/ticket');

exports.index = function (req, res) {
    res.render("pages/index");
};

// Display list of all tickets.
exports.ticket_list = function (req, res, next) {

    const ticketType = req.query.ticket_type;

    TicketModel.find(ticketType ? {ticket_type: ticketType} : {}, '')
        .exec(function (err, list_tickets) {
            if (err) {
                return next(err);
            }
            res.send({tickets: list_tickets});
        })
};

// Display detail page for a specific ticket.
exports.ticket_detail = function (req, res) {
    res.send('ticket_detail');
};


// Handle ticket create on POST.
exports.ticket_create_post = function (req, res) {

    const ticketType = req.query.ticket_type;
    const price = req.query.price;

    TicketModel.create({ticket_type: ticketType, price: price}, function (err, newTicket) {
        if (err) return handleError(err);


        res.send(`New ticket created: ${newTicket}`);
    });


};

// Display ticket delete form on GET.
exports.ticket_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED yet');
};

// Handle ticket delete on POST.
exports.ticket_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED yet');
};

// Display ticket update form on GET.
exports.ticket_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED yet');
};

// Handle ticket update on POST.
exports.ticket_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED yet');
};