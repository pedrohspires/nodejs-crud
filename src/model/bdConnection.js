const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'crud',
    password: 'pedroh2603',
    database: 'crud'
});

function queryExec(query, callback){
    if(!connection.socket)
        connection.connect(); // Conexão ainda não existia;
    
    connection.query(query, (err, results, fields)=>{
        if(err)
            throw err;
        callback(results);
        connection.end();
    });
}

function endConnection(){
    if(connection.socket)
        connection.end();
}

module.exports = {
    queryExec,
    endConnection
}