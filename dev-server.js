const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const https = require('https');
const http = require('http');
const passport = require('passport');
const fs = require('fs');

const env = require('dotenv').load();

const key = fs.readFileSync('encryption/key.pem', 'utf8');
const cert = fs.readFileSync('encryption/server.crt', 'utf8');

const options = {
    key: key,
    cert: cert
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const session = require('express-session');

app.use(session({ secret: 'DaveyJonesLocker' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/cerebral-frontend/dist'));

const Sequelize = require('sequelize');

const connection = new Sequelize('mysql://root:root@localhost:3306/cerebral');

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
models.sequelize.sync().then(function () {

    console.log('Nice! Database looks fine');

    http.createServer(app).listen(8000);

    https.createServer(options, app).listen(443);

}).catch(function (err) {

    console.log(err, "Something went wrong with the Database Update!")

});