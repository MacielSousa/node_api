const express = require('express');
const consig = require('consign');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

consig()
    .include('app/routes')
    .then('config/dbConnection.js')
    .into(app);

module.exports = app;