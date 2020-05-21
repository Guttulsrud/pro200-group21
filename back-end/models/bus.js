const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const BusSchema = new Schema({
    id: Schema.Types.ObjectID,
    title: {type: String, required: true},
    route: {type: Array, default: []},
    capacity: {type: Number, required: true}

});


//Export model
module.exports = mongoose.model('Bus', BusSchema);