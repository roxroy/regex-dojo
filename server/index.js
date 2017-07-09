const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'pug')
app.set('views', __dirname + '/views');

app.get('/', routes.index);
app.get('/about', routes.about);

app.get('/dashboard', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../public', 'dashboard.html'));
});

app.get('/train', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../public', 'train.html'));
});

app.listen(process.env.PORT || 3000);
