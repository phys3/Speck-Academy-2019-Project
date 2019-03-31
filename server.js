const dvorane = require('./halls.js');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/halls', (req, res) => res.send(dvorane))

app.listen(port, () => console.log(`Listening on port ${port}!`))