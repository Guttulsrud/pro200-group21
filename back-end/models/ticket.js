const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TicketSchema = new Schema(
    {
        id: Schema.Types.ObjectID,
        name: {type: String, required: true},
        price: {type: Number, required: true}
    }
);

// Virtual for book's URL
TicketSchema
    .virtual('url')
    .get(function () {
        return '/ticket/' + this._id;
    });

//Export model
module.exports = mongoose.model('Ticket', TicketSchema);