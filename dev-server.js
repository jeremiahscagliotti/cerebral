const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const session = require('express-session');
app.use(session({ secret: 'DaveyJonesLocker' }));

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

const server = app.listen(8000, () => {
    console.log('Listening on localhost:8000');
});
