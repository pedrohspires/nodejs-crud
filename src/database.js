const config = require('../config.json');
const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD
});