const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TicketInstanceSchema = new Schema(
    {
        id: Schema.Types.ObjectID,
        ticket: {type: Schema.Types.ObjectId, ref: 'Ticket', required: true},
    }
);

TicketInstanceSchema
    .virtual('url')
    .get(function () {
        return '/ticketinstance/' + this._id;
    });

//Export model
module.exports = mongoose.model('TicketInstance', TicketInstanceSchema);