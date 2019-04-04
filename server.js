const dvorane = require('./halls.js');
const express = require('express');
const scripts = require('./scripts.js');
const app = express()
const port = 3000

app.use(express.urlencoded())

app.use(express.static('public'))

app.get('/halls', (req, res) => res.json(dvorane))

app.post('/hallsCreate', function(req, res) {
    const imeDvorane = req.body.name;
    scripts.Create(imeDvorane);
    res.redirect('/halls');
})

app.post('/hallsUpdate', function(req, res) {
    const id = req.body.id;
    const isReserved = req.body.isReserved;
    const reservedUntill = req.body.reservedUntill;
    scripts.Update(id, isReserved, reservedUntill);
    res.redirect('/halls');
})
app.post('/hallsDelete', function(req, res) {
    const id = req.body.id;
    scripts.Remove(id);
    res.redirect('/index.html');
})

app.listen(port, () => console.log(`Listening on port ${port}!`))