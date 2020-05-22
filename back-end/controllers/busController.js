const Bus = require('../models/bus');

// GET all bus
exports.getBusAll = function (req, res, next) {
    Bus.find({}, '')
        .exec(function (err, tickets) {
            if (err) {
                return next(err);
            }
            res.send({tickets: tickets});
        })
};

// POST create bus
exports.createBus = function (req, res) {
    const title = req.body.title
    const route = req.body.route
    const capacity = Math.random()

    Bus.create({title: title, route: route, capacity: capacity})
        .then(bus => res.send(bus))
        .catch(error => res.send(error))
};

// GET details of one bus
exports.bus_detail = function (req, res) {

};

// POST update bus
exports.bus_update = function (req, res) {

};

// POST update bus
exports.bus_delete = function (req, res) {

};