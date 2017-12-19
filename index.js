/**
 * index
 **/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {countries} = require('./data/countries');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000);

app.get('/list', (req, res) => {
    res.status(200).send(countries);
});