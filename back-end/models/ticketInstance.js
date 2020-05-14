const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TicketInstanceSchema = new Schema(
    {
        id: Schema.Types.ObjectID,
        user_id: { type: Schema.Types.ObjectID , required: true},
        ticket_id: { type: Schema.Types.ObjectID , required: true},
        number_of_tickets: {type: Number, default: 1},
        info: {
            expiration: {type: Date, default: Date.now()},
            cost: {type: Number},
            date: {type: Date, required: true, default: Date.now()},
        },
        destination: {type: String, required: true}

    }
);

//Export model
module.exports = mongoose.model('TicketInstance', TicketInstanceSchema);