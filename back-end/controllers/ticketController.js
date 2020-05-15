const Ticket = require('../models/ticket');

// GET all tickets
exports.getTicketAll = function (req, res, next) {

    Ticket.find({}, '')
        .exec(function (err, tickets) {
        if (err) {
            return next(err);
        }
        res.send({tickets: tickets});
    })
};

// POST create Ticket-type
exports.createTicket = function (req, res) {
    const title = req.body.title;
    const price = req.body.price;
    const duration = req.body.duration;

    Ticket.create({title: title, price: price, duration: duration})
        .then(result => res.send(result))
        .catch(error => res.send(error));

};

// GET details of one ticket-type
exports.getTicketById = function (req, res) {

    const ticketId = req.params.id;

    Ticket.findById({_id: ticketId})
        .then(ticket => res.send(ticket))
        .catch(error => res.send(error));

};

// POST update Ticket-type
exports.ticket_delete = function (req, res) {
    const ticketId = req.params.id;

    Ticket.deleteOne({_id: ticketId}, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.send(result);
        }
    });
};