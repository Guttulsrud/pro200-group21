const TicketInstance = require('../models/ticketInstance');
const Ticket = require('../models/ticket');
const UserModel = require('../models/user');

const ticketController = require('../controllers/ticketController');

// GET all tickets
exports.ticket_instance_all = function (req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance list');
};

// GET one ticket by ID
exports.ticket_instance_detail = function (req, res) {
    const ticketInstanceId = req.params.id;

    TicketInstance.findOne({_id: ticketInstanceId}, function (error, result) {
        if (error) {
            res.send(error);
        } else {

            Ticket.findOne({_id: result.ticket_id}, function (error, result) {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result.title);
                }
            });
        }
    });
};


// Handle Ticket delete on POST.
exports.ticket_instance_create = function (req, res) {
    const userId = req.body.user_id;
    const ticketId = req.body.ticket_id;
    const numberOfTickets = req.body.number_of_tickets;


    if (numberOfTickets > 1) {
        TicketInstance.create({
            user_id: userId,
            ticket_id: ticketId,
            numberOfTickets: numberOfTickets
        }, function (error, newTicket) {
            if (error) {
                res.send(error);
                return;
            }
            res.send(`New ticket created: ${newTicket}`);
        });
    } else {
        TicketInstance.create({user_id: userId, ticket_id: ticketId}, function (error, newTicket) {
            if (error) {
                res.send(error);
                return;
            }
            res.send(`New ticket created: ${newTicket}`);
        });
    }
};

// Handle Ticket delete on POST.
exports.ticket_instance_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance delete POST');
};

// Handle Ticket update on POST.
exports.ticket_instance_update = function (req, res) {
    res.send('NOT IMPLEMENTED: TicketInstance update POST');
};