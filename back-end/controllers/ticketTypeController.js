const TicketType = require('../models/ticketType');

exports.index = function (req, res) {
    res.render("pages/index");
};

// GET all tickets
exports.ticket_type_all = function (req, res, next) {

    const type = req.query.type;

    TicketType.find(type ? {type: type} : {}, '')
        .exec(function (err, list_ticket_types) {
            if (err) {
                return next(err);
            }
            res.send({tickets: list_ticket_types});
        })
};


// POST create Ticket-type
exports.ticket_type_create = function (req, res) {
    const type = req.body.type;
    const price = req.body.price;

    TicketType.create({type: type, price: price}, function (err, newTicketType) {
        if (err) return res.send(err);
        res.send(`New ticket created: ${newTicketType}`);
    });
};

// GET details of one ticket-type
exports.ticket_type_detail = function (req, res) {
    const ticketTypeId = req.query.id;

    TicketType.findOne({id: ticketTypeId}, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.send(result);
        }
    });

};

// POST update Ticket-type
exports.ticket_type_delete = function (req, res) {
    const ticketTypeId = req.body.id;

    TicketType.deleteOne({id: ticketTypeId}, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.send(result);
        }
    });
};


// POST update Ticket-type
exports.ticket_type_update = function (req, res) {
    const ticketTypeId = req.body.id;
    const newType = req.body.type
    const newPrice = req.body.price

    TicketType.findOne({id: ticketTypeId}, function (error, result) {
        if (error) {
            res.send(error);
            return;
        }

        if (newType) {
            result.type = newType;
        }
        if (newPrice) {
            result.price = newPrice;
        }

        result.save();
        res.send(result);

    });
};