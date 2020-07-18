const express = require('express')
const app = express()
const port = 3000
const host = '192.168.1.23'

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, host, () => console.log(`Example app listening at http://${host}:${port}`))
