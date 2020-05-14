const Bus = require('../models/bus');

// GET all bus
exports.getBusAll = function (req, res, next) {

};

// POST create bus
exports.createBus = function (req, res) {
    const coordinates = req.body.coordinates

    Bus.create({location: {type: "Point", coordinates: [59.909712, 10.763605]}})
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