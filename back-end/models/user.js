const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        id: Schema.Types.ObjectID,
        first_name: {type: String, required: true, max: 100},
        family_name: {type: String, required: true, max: 100},
    }
);




// Virtual for user's URL
UserSchema
    .virtual('url')
    .get(function () {
        return '/user/' + this._id;
    });

//Export model
module.exports = mongoose.model('User', UserSchema);