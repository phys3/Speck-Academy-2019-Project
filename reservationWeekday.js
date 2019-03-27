const dvorane = require('./halls.js');
const { DateTime } = require('./node_modules/luxon');
let rezerviraneDvorane = [];
for (let i in dvorane) {
    if (dvorane[i].reservation.isReserved == true) {
        rezerviraneDvorane.push(dvorane[i]);
    }
};
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(responseString);
}).listen(8080);
let myTime = DateTime.fromFormat(rezerviraneDvorane[0].reservation.reservedUntill[0], 'LLL d yyyy H:mm:ss')
let responseString = myTime.toFormat('cccc, LLLL d')