const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TicketInstanceSchema = new Schema(
    {
        id: Schema.Types.ObjectID,
        user_id: { type: Schema.Types.ObjectID , required: true},
        ticket_id: { type: Schema.Types.ObjectID , required: true},
        number_of_tickets: {type: Number, default: 1},
        expiration: {type: Date, default: Date.now()/* + ticket.duration */},
        cost: {type: Number}
    }
);

TicketInstanceSchema
    .virtual('url')
    .get(function () {
        return '/ticket-instance/' + this._id;
    });

//Export model
module.exports = mongoose.model('TicketInstance', TicketInstanceSchema);