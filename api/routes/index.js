let jwt = require('express-jwt');
let auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});