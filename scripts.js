var dvorane = [
    {
        id: 1,
        name: "dvo1",
        reservation: {
            isReserved: false,
            reservedFrom: null,
            reservedUntill: null,
        }
    },
    {
        id: 2,
        name: "dvo2",
        reservation: {
            isReserved: false,
            reservedFrom: null,
            reservedUntill: null,
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

function Hall(name) {
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

function remove(id) {
    for (let i in dvorane) {
        if (dvorane[i].id == id){
            dvorane.splice([i], 1);
        } 
    }
}

function reservation(id, reservedFrom, reservedUntill) { //reservedFrom and reservedUntill are strings
    for (let i in dvorane) {
        if (dvorane[i].id == id){
            var from = new Date(reservedFrom);
            var untill = new Date(reservedUntill);
            if (dvorane[i].reservation.reservedFrom == null){
                dvorane[i].reservation.reservedFrom = [];
                dvorane[i].reservation.reservedUntill = [];
            }
            dvorane[i].reservation.reservedFrom.push(from);
            dvorane[i].reservation.reservedUntill.push(untill);
            dvorane[i].reservation.isReserved = true;
        } 
    }
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