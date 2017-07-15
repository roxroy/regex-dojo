const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'pug')
app.set('views', __dirname + '/views');

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/dashboard', routes.dashboard);
app.get('/train', routes.train);
app.get('/spar', routes.spar);
app.get('/fight', routes.fight);
app.get('/signin', routes.signin);

app.listen(process.env.PORT || 3000);
