const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TicketInstanceSchema = new Schema(
    {
        id: Schema.Types.ObjectID,
        type: {type: Schema.Types.ObjectId, ref: 'TicketType', required: true},
    }
);

TicketInstanceSchema
    .virtual('url')
    .get(function () {
        return '/ticket-instance/' + this._id;
    });

//Export model
module.exports = mongoose.model('TicketInstance', TicketInstanceSchema);