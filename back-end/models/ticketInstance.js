const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TicketInstanceSchema = new Schema(
    {
        id: Schema.Types.ObjectID,
        ticket_type: {type: String, required: true},
        price: {type: Number, required: true}
    }
);

// Virtual for book's URL
TicketInstanceSchema
    .virtual('url')
    .get(function () {
        return '/ticketinstance/' + this._id;
    });

//Export model
module.exports = mongoose.model('TicketInstance', TicketInstanceSchema);