const Ticket = require('../models/ticket');

// GET all tickets
exports.ticket_all = function (req, res, next) {

    Ticket.find({}, '')
        .exec(function (err, tickets) {
            if (err) {
                return next(err);
            }
            res.send({tickets: tickets});
        })
};

// POST create Ticket-type
exports.ticket_create = function (req, res) {
    const title = req.body.title;
    const price = req.body.price;
    const duration = req.body.duration;

    Ticket.create({title: title, price: price, duration: duration}, function (error, newTicket) {
        if (error) {
            res.send(error);
            return;
        }
        res.send(`New ticket created: ${newTicket}`);
    });
};

// GET details of one ticket-type
exports.ticket_detail = function (req, res) {

    const ticketId = req.params.id;

    Ticket.findById({_id: ticketId})
        .then(ticket => res.send(ticket))
        .catch(error => res.send(error));

};

// POST update Ticket-type
exports.ticket_delete = function (req, res) {
    const ticketId = req.params.id;

    Ticket.deleteOne({_id: ticketId})
        .then(result => res.send(result))
        .catch(error => res.send(error));


};