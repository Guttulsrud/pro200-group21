const TicketInstance = require('../models/ticketInstance');
const Ticket = require('../models/ticket');

// GET all ticket instances
exports.getTicketInstanceAll = function (req, res) {

    TicketInstance.find({}, '')
        .where('archived').equals('false')
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


exports.getTypeByTicketInstanceId = function (req, res) {
    // const ticketInstanceId = req.params.id;
    //
    // TicketInstance.findById({_id: ticketInstanceId})
    //     .then(ticketInstance => Ticket.findById({_id: ticketInstance.ticket_id}))
    //     .then(ticket => res.send(ticket))
    //     .catch(err => res.send(err))
}


// Handle Ticket create on POST.
exports.createTicketInstance = function (req, res) {
    const userId = req.body.user_id;
    const numberOfTickets = req.body.number_of_tickets;
    const origin = req.body.origin;
    const destination = req.body.destination;
    const price = req.body.price;

    TicketInstance.create({
        user_id: userId,
        number_of_tickets: numberOfTickets,
        origin: origin,
        destination: destination,
        price: price
    })
        .then(instance => res.send(instance))
        .catch(error => res.send(error));

};

// Handle Ticket delete on POST.
exports.archiveTicketInstance = function (req, res) {
    const ticketInstanceId = req.params.id;

    TicketInstance.findById({_id: ticketInstanceId})
        .then(ticketInstance => ticketInstance.archived = true)
        .catch(error => res.send(error));

};

// Handle Ticket update on POST.
exports.updateTicketInstance = function (req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance update POST');
};