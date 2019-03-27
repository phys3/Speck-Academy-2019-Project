const dvorane = require('./halls.js');
var _ = require('./node_modules/lodash');
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(uniqHallsArr.join(', '));
}).listen(8080);;

let dvoraneNames = [];
for (let i in dvorane) {
    dvoraneNames.push(dvorane[i].name);
}

let uniqHallsArr = _.uniq(dvoraneNames);