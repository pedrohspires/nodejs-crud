const server = require('http');
const routes = require('./routes'); // routes is a function to handle requests

console.log('Server started');
server.createServer(routes).listen(3000);