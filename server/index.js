const express = require('express')
const path = require('path')
const url = require('url'),
      routes = require('./routes');

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'pug')
app.set('views', __dirname + '/server/views');

app.get('/', routes.index);

app.listen(process.env.PORT || 3000);
