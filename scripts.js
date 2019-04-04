const dvorane = require('./halls.js');
module.exports.Create = function Hall(name) {
    let id = dvorane.slice(-1)[0].id + 1;
    this.id = id;
    this.name = name;
    this.reservation = {
        isReserved: false,
        reservedFrom: null,
        reservedUntill: null,
    };
    dvorane.push(this);
}

module.exports.Remove = function remove(id) {
    for (let i in dvorane) {
        if (dvorane[i].id == id){
            dvorane.splice([i], 1);
        } 
    }
}

module.exports.Update = function(id, isReserved, reservedUntill) {
    if (isReserved == 'on') {
        for (let i in dvorane) {
            if (dvorane[i].id == id) {
        dvorane[i].reservation.isReserved = true;
        dvorane[i].reservation.reservedUntill = reservedUntill;
        dvorane[i].reservation.reservedFrom = new Date();
        
        }}} else {
            for (let i in dvorane) {
                if (dvorane[i].id == id) {
            dvorane[i].reservation.isReserved = false;
            dvorane[i].reservation.reservedUntill = null;
            dvorane[i].reservation.reservedFrom = null;
                }
        }}
}

function checkReservation (id){
    for (let i in dvorane) {
        if (dvorane[i].id == id){
            var timeNow = Date.now();
            if (dvorane[i].reservation.reservedUntill == null){
                console.log("No reservations");
            }
            else if (dvorane[i].reservation.reservedUntill.slice(-1)[0] <= timeNow){
                dvorane[i].reservation.isReserved = false;
                dvorane[i].reservation.reservedFrom = null;
                dvorane[i].reservation.reservedUntill = null;
                console.log("No reservations");
            } else {
                console.log("Hall reserved");
            }
        } 
    }
}