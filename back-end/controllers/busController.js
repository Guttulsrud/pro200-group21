const Bus = require('../models/bus');

// GET all bus
exports.bus_all = function (req, res, next) {

};

// POST create bus
exports.bus_create = function (req, res) {

    Bus.create({location: {type: "Point", coordinates: [59.909712, 10.763605]}}, function (error, bus) {
        if (error) {
            res.send(error);
            return;
        }
        res.send(`New bus created: ${bus}`);
    });
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