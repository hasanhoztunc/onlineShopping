const http = require('http');
const app = require('./app');

const port = process.env.SERVER_PORT;

const server = http.createServer(app);

server.listen(port);
