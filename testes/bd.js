const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'crud',
    password: 'pedroh2603',
    database: 'crud'
});