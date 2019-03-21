var dvorane = [
    {
        id: 1,
        name: "dvo1",
        reservation: {
            isReserved: true,
            reservedFrom: ["Thu Mar 21 2019 17:00:00 GMT+0100 (Central European Standard Time)"],
            reservedUntill: ["Thu Mar 22 2019 17:00:00 GMT+0100 (Central European Standard Time)"],
        }
    },
    {
        id: 2,
        name: "dvo2",
        reservation: {
            isReserved: true,
            reservedFrom: ["Thu Mar 21 2019 17:00:00 GMT+0100 (Central European Standard Time)"],
            reservedUntill: ["Thu Mar 23 2019 14:00:00 GMT+0100 (Central European Standard Time)"],
        }
    },
    {
        id: 3,
        name: "dvo3",
        reservation: {
            isReserved: false,
            reservedFrom: null,
            reservedUntill: null,
        }
    },
    {
        id: 4,
        name: "dvo4",
        reservation: {
            isReserved: false,
            reservedFrom: null,
            reservedUntill: null,
        }
    },
    {
        id: 5,
        name: "dvo5",
        reservation: {
            isReserved: false,
            reservedFrom: null,
            reservedUntill: null,
        }
    },
];

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(dvoraneNamesString);
}).listen(8080);
console.log("hello me");

let dvoraneNames = [];
for (let i in dvorane) {
    dvoraneNames.push(dvorane[i].name);
}
let dvoraneNamesString = dvoraneNames.join(", ");
console.log(dvoraneNamesString);