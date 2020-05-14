const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PointSchema = new mongoose.Schema({
    type: {
        type: String, enum: ['Point'], required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

const BusSchema = new Schema({
    id: Schema.Types.ObjectID,
    location: {
        type: PointSchema, required: true
    }


});


BusSchema
    .virtual('url')
    .get(function () {
        return '/' + this._id;
    });

//Export model
module.exports = mongoose.model('Bus', BusSchema);