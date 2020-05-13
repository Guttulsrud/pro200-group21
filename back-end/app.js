const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const userRouter = require('./routes/user');
const ticketRouter = require('./routes/ticket');
const ticketInstanceRouter = require('./routes/ticketInstance');

const app = express();


//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://gut:qwe123qwe@vy-gkfvi.gcp.mongodb.net/vy?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res, next) {
    res.send('Mainpage here!');
});


app.use('/user', userRouter);
app.use('/ticket', ticketRouter);
app.use('/ticket-instance', ticketInstanceRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
