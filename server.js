const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const session = require('express-session');
app.use(session({secret:'DaveyJonesLocker'}));

app.use(express.static(__dirname + '/cerebral-frontend/dist'));

const mysql = require('mysql');
var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'cerebral'
});
connection.connect(function(err){
        if (err){
            throw err                  
        }
})




const server = app.listen(8000, () => {
        console.log('Listening on localhoast:8000')
});
