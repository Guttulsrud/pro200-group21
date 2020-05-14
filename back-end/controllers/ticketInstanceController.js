const TicketInstance = require('../models/ticketInstance');
const Ticket = require('../models/ticket');

// GET all ticket instances
exports.ticket_instance_all = function (req, res) {

    TicketInstance.find({}, '')
        .exec(function (err, instances) {
            if (err) {
                return next(err);
            }
            res.send({tickets: instances});
        })
};

// GET one ticket by ID
exports.getTicketInstanceById = function (req, res) {
    const ticketInstanceId = req.params.id;

    TicketInstance.findById({_id: ticketInstanceId})
        .then(result => res.send(result))
        .catch(err => res.send(err));
}

// GET all tickets by user ID
exports.getTicketInstancesByUserID = function (req, res) {
    const userId = req.params.id;

    TicketInstance.find({user_id: userId}, '')
        .then(result => res.send(result))
        .catch(err => res.send(err))
}


exports.getTypeByTicketInstanceId = function (req, res) {
    const ticketInstanceId = req.params.id;

    TicketInstance.findById({_id: ticketInstanceId})
        .then(ticketInstance => Ticket.findById({_id: ticketInstance.ticket_id}))
        .then(ticket => res.send(ticket))
        .catch(err => res.send(err))
}


// Handle Ticket create on POST.
exports.createTicketInstance = function (req, res) {
    const userId = req.body.user_id;
    const ticketId = req.body.ticket_id;
    const numberOfTickets = req.body.number_of_tickets;

    Ticket.findById({_id: ticketId})
        .then(ticket => TicketInstance.create({
            user_id: userId,
            ticket_id: ticketId,
            number_of_tickets: numberOfTickets,
            cost: ticket.price * numberOfTickets
        }))
        .then(instance => res.send(instance))
        .catch(error => res.send(error));
};

// Handle Ticket delete on POST.
exports.deleteTicketInstance = function (req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance delete POST');
};

// Handle Ticket update on POST.
exports.updateTicketInstance = function (req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance update POST');
};