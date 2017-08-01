const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const routes = require('./routes')
const routesApi = require('../api/routes')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session');

mongoose.connect('mongodb://localhost:5000/regex');
mongoose.Promise = global.Promise;

const app = express();

require('dotenv').load();
require('./config/passport')(passport);

app.use(session({
    secret: 'trex arms',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());   

app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'pug')
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.use('/api', routesApi);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => res.status(err.status || 500).send());

app.listen(process.env.PORT || 3000);
