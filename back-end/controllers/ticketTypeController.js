const TicketType = require('../models/ticketType');

exports.index = function (req, res) {
    res.render("pages/index");
};

// Display list of all tickets.
exports.ticket_list = function (req, res, next) {

    const type = req.query.type;

    TicketType.find(type ? {type: type} : {}, '')
        .exec(function (err, list_tickets) {
            if (err) {
                return next(err);
            }
            res.send({tickets: list_tickets});
        })
};


// Handle ticket create on POST.
exports.ticket_create_post = function (req, res) {
    const type = req.body.type;
    const price = req.body.price;

    TicketType.create({type: type, price: price}, function (err, newTicketType) {
        if (err) return handleError(err);
        res.send(`New ticket created: ${newTicketType}`);
    });
};


// Display detail page for a specific ticket.
exports.ticket_detail = function (req, res) {
    const ticketTypeId = req.query.id;

    TicketType.findOne({id: ticketTypeId}, function (err, obj) {
        res.send(obj);
    });

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