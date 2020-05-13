const User = require('../models/user');

// GET all users
exports.user_all = function (req, res, next) {

    User.find({}, '')
        .exec(function (err, users) {
            if (err) {
                return next(err);
            }
            res.send({tickets: users});
        })
};


// GET user by ID
exports.user_detail = function(req, res) {
    const userId = req.params.id;

    User.findOne({_id: userId}, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.send(result);
        }
    });
};
//
// // Display User create form on GET.
// exports.user_create_get = function(req, res) {
//     res.send('NOT IMPLEMENTED: User create GET');
// };
//
// Handle User create on POST.
exports.user_create_post = function(req, res) {

    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const dateOfBirth = req.body.date_of_birth;

    User.create({first_name: firstName, last_name: lastName, date_of_birth: dateOfBirth}, function (err, user) {
        if (err) return res.send(err);
        res.send(`New user created: ${user}`);
    });
};


//
// // Handle User delete on POST.
// exports.user_delete_post = function(req, res) {
//     res.send('NOT IMPLEMENTED: User delete POST');
// };
//

// // Handle User update on POST.
// exports.user_update_post = function(req, res) {
//     res.send('NOT IMPLEMENTED: User update POST');
// };