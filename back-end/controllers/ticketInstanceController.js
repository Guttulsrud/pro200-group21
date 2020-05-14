const TicketInstance = require('../models/ticketInstance');
const Ticket = require('../models/ticket');

// GET all ticket instances
exports.getTicketInstanceAll = function (req, res) {

    TicketInstance.find({}, '')
        .then(tickets => res.send(tickets))
        .catch(error => res.send(error));
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

// Handle Ticket create on POST.
exports.createTicketInstance = function (req, res) {
    const userId = req.body.user_id;
    const ticketId = req.body.ticket_id;
    const numberOfTickets = req.body.number_of_tickets;
    const destination = req.body.destination;

    Ticket.findById({_id: ticketId})
        .then(ticket => TicketInstance.create({
            user_id: userId,
            ticket_id: ticketId,
            number_of_tickets: numberOfTickets,
            destination: destination,
            cost: ticket.price * numberOfTickets
        }))
        .then(instance => res.send(instance))
        .catch(err => res.send(err));
};

// Handle Ticket delete on POST.
exports.ticket_instance_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance delete POST');
};

// Handle Ticket update on POST.
exports.ticket_instance_update = function (req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance update POST');
};