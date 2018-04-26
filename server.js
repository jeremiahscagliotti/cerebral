const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const https = require('https');
const http = require('http');
const fs = require('fs');
const passport = require('passport');
const key = fs.readFileSync('encryption/key.pem', 'utf8');
const cert = fs.readFileSync('encryption/server.crt', 'utf8');

const env = require('dotenv').load();

const options = {
    key: key,
    cert: cert
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const session = require('express-session');

app.use(session({ secret: 'DaveyJonesLocker' }));

app.use(express.static(__dirname + '/cerebral-frontend/dist'));

const Sequelize = require('sequelize');

const connection = new Sequelize('mysql://user:password@localhost:3306/db');

connection
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err)
    });

//Models
let models = require("./db/models");

//Sync Database
models.sequelize.sync().then(function() {

    console.log('Nice! Database looks fine');

    http.createServer(app).listen(8000);

    https.createServer(options, app).listen(443);

}).catch(function(err) {

    console.log(err, "Something went wrong with the Database Update!")

});

require('./api/config/passport');
app.use(passport.initialize());
app.use(passport.session());
// app.use('/api', routesApi);

// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({"message" : err.name + ": " + err.message});
    }
});
