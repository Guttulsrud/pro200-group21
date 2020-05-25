const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const TicketSchema = new Schema({
        id: Schema.Types.ObjectID,
        user_id: {type: Schema.Types.ObjectID, required: true},
        number_of_tickets: {type: Number, default: 1},
        expiration: {type: Date, default: Date.now()+6000000},
        price: {type: Number},
        route: {
            origin: {
                title: {type: String, required: true},
                coordinates: {type: Array, default: []}
            },
            destination: {
                title: {type: String, required: true},
                coordinates: {type: Array, default: []}
            }
        },
        archived: {type: Boolean, default: false},
    }
);

//Export model
module.exports = mongoose.model('TicketInstance', TicketSchema);