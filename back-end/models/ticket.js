const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    id: Schema.Types.ObjectID,
    title: {type: String, required: true},
    price: {type: Number, required: true},
    duration: {type: Number, required: true, default: 0}
});

//Export model
module.exports = mongoose.model('Ticket', TicketSchema);