async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    
    const config = require('../config.json');
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host: config.HOST,
        user: config.USER,
        password: config.PASSWORD,
        database: config.DATABASE
    });
    global.connection = connection;
    return connection;
}

module.exports = {
    connect: connect
};