const server = require('http');
const routes = require('./routes'); // routes is a function to handle requests

server.createServer(routes).listen(3000);