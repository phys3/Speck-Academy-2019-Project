const dvorane = require('./halls.js');

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/halls', (req, res) => res.send(dvorane))

app.listen(port, () => console.log(`Listening on port ${port}!`))