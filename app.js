var express = require('express');
var app = express();
var path = require('path'); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

var index = require('./routes/index');
app.use('/', index);

var profile = require('./routes/profile');
app.use('/profile', profile);

var cards = require('./routes/cards');
app.use('/cards', cards);

var cardsinput = require('./routes/cardsinput');
app.use('/cardsinput', cardsinput);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {

    res.locals.message = err.message;
    
    if (req.app.get('env') === 'development'){
    	res.locals.error = err;
    }
    else {
    	res.locals.error = {};
    }

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
