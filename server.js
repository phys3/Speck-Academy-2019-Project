const dvorane = require('./halls.js');
const express = require('express');
const app = express()
const port = 3000
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
app.use(express.urlencoded())

app.use(express.static('public'))

app.get('/halls', (req, res) => res.json(dvorane))
<<<<<<< HEAD

app.post('/hallsCreate', function(req, res) {
    const imeDvorane = req.body.name;
    new Hall(imeDvorane);
    res.redirect('/halls');
})

app.post('/hallsUpdate', function(req, res) {
    const id = req.body.id;
    const isReserved = req.body.isReserved;
    const reservedUntill = req.body.reservedUntill;
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
    res.redirect('/halls');
})
app.post('/hallsDelete', function(req, res) {
    const id = req.body.id;
    remove(id);
    res.redirect('/index.html');
})
=======
>>>>>>> f2a3bb9231cce12df8ee612ff02b71c4b60b9318

app.listen(port, () => console.log(`Listening on port ${port}!`))