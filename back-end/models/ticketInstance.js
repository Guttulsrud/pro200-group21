const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TicketInstanceSchema = new Schema(
    {
        id: Schema.Types.ObjectID,
        user_id: {type: Schema.Types.ObjectID, required: true},
        number_of_tickets: {type: Number, default: 1},
        expiration: {type: Date, default: Date.now()},
        price: {type: Number},
        archived: {type: Boolean, default: false},
        origin: {type: String, required: true},
        destination: {type: String, required: true}
    }
);

//Export model
module.exports = mongoose.model('TicketInstance', TicketInstanceSchema);