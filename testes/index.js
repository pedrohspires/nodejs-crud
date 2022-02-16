const http = require('http');
const bd = require('./bd');

http.createServer((req, res)=>{
    bd.connect();
    console.log(bd);
    bd.query('select * from users', (error, results, fields) => {
        if (error) throw error;
        console.log(results);
    })
}).listen(3000);