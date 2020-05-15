const User = require('../models/user');
const TicketInstance = require('../models/ticketInstance');

// GET all users
exports.getUsersAll = function (req, res, next) {

    User.find({}, '')
        .then(tickets => res.send(tickets))
        .catch(error => res.send(error));
};

// GET user by ID
exports.getUserById = function (req, res) {

    const userId = req.params.id;

    User.findById({_id: userId})
        .then(user => res.send(user))
        .catch(error => res.send(error));

};

// Create user with POST
exports.createUser = function (req, res) {

    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const dateOfBirth = req.body.date_of_birth;

    User.create({first_name: firstName, last_name: lastName, date_of_birth: dateOfBirth})
        .then(user => res.send(user))
        .catch(error => res.send(error));

};

exports.deleteUserById = function (req, res) {

    TicketInstance.deleteMany({user_id: userId})
        .then(result => User.deleteOne({_id: userId}))
        .then(result => res.send(`user : ${userId} deleted\n ${result}`))
        .catch(error => res.send(error));
}
