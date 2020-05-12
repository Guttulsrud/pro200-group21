const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TicketTypeSchema = new Schema(
    {
        id: Schema.Types.ObjectID,
        type: {type: String, required: true},
        price: {type: Number, required: true}
    }
);


TicketTypeSchema
    .virtual('url')
    .get(function () {
        return '/ticket-type/' + this._id;
    });

//Export model
module.exports = mongoose.model('TicketType', TicketTypeSchema);