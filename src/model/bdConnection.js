const mysql = require('mysql');
const {HOST, USER, PASSWORD, DATABASE} = require('../../config.json');

const connection = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
});

module.exports = connection;