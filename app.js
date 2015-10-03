'use strict';

const express = require('express');
const app = express();

app.use('/static', express.static('./build'));
app.set('view engine', 'jade');
app.set('views', './templates');

app.get('/', (req, res) => res.render('index'));

module.exports = app;
