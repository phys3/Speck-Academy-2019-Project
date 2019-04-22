const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'damjanco',
  host: '138.68.87.73',
  database: 'db_damjanco',
  password: 'R>2agKcM',
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
    user: 'damjanco',
    host: '138.68.87.73',
    database: 'db_damjanco',
    password: 'R>2agKcM',
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})