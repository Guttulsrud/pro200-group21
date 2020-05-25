const Ticket = require('../models/ticket');

// GET all ticket
exports.getTicketAll = function (req, res) {

    Ticket.find({}, '')
        .where('archived').equals('false')
        .then(tickets => res.send(tickets))
        .catch(error => res.send(error));
};

// GET one ticket by ID
exports.getTicketById = function (req, res) {
    const ticketInstanceId = req.params.id;

    Ticket.findById({_id: ticketInstanceId})
        .then(result => res.send(result))
        .catch(err => res.send(err));
}

// GET all tickets by user ID
exports.getTicketByUserID = function (req, res) {
    const userId = req.params.id;

    Ticket.find({user_id: userId}, '')
        .then(result => res.send(result))
        .catch(err => res.send(err))
}


// Handle Ticket create on POST.
exports.createTicket = function (req, res) {
    const userId = req.body.user_id;
    const numberOfTickets = req.body.number_of_tickets;
    const price = req.body.price;
    const route = JSON.parse(req.body.route);


    Ticket.create({
        user_id: userId,
        number_of_tickets: numberOfTickets,
        price: price,
        route: {
            origin: {
                title: route.origin.title,
                coordinates: route.origin.coordinates
            },
            destination: {
                title: route.destination.title,
                coordinates: route.destination.coordinates
            },
        }
    })
        .then(ticket => res.send(ticket))
        .catch(error => res.send(error));

};

// Handle Ticket delete on POST.
exports.archiveTicket = function (req, res) {
    const ticketInstanceId = req.params.id;

    Ticket.findById({_id: ticketInstanceId})
        .then(ticketInstance => ticketInstance.archived = true)
        .catch(error => res.send(error));

};

// Handle Ticket update on POST.
exports.updateTicket = function (req, res) {
    res.send('NOT IMPLEMENTED: Ticket update POST');
};