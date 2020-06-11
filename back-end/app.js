const createError = require('http-errors');
const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/user');
const ticketRouter = require('./routes/ticket');
const busController = require('./routes/bus');
const geoCoderController = require('./routes/geocoder');
const app = express();


/// MONGOOSE ///
const mongoose = require('mongoose');
const mongoDB =
    'mongodb+srv://gut:qwe123qwe@vy-gkfvi.gcp.mongodb.net/vy?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


/// ROUTES ///
app.use('/user', userRouter);
app.use('/ticket', ticketRouter);
app.use('/bus', busController);
app.use('/geocoder', geoCoderController);

/// CATCH 404, FORWARD TO ERROR HANDLER ///
app.use(function (req, res, next) {
    next(createError(404));
});

/// HANDLE ERROR ///
app.use(function (err, req, res) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.send(`HTTP ERROR! -> ${err}`);
});

module.exports = app;
