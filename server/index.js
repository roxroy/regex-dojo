const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const routes = require('./routes')
const routesApi = require('../api/routes')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const config = require('../config')

var options = {
  useMongoClient: true,
};

mongoose.connect(config.databaseUrl, options);
mongoose.Promise = global.Promise;

// if (config.seed) require('./util/seed');
require('./util/seed');

const app = express();

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

app.listen(config.port);
