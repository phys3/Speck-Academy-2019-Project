const dvorane = require('./halls.js');
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(dvorane[1].name);
}).listen(8080);;