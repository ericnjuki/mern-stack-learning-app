import 'dotenv/config';
import { createRequire } from 'module'; 
const require = createRequire(import.meta.url);
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3030


app.use(express.static('public'))
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.post('/', (req, res) => {
res.send('success: Got a POST request')
})
app.post('/users', (req, res) => {
    res.send('success: Got a POST request at /users')
})   // this is a route handler
app.put('/', (req, res) => {
    res.send('success: Got a PUT request')
})
app.delete('/', (req, res) => {
    res.send('success: Got a DELETE request')
})
app.patch('/', (req, res) => {
    res.send('success: Got a PATCH request')
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.get('/500', (req, res) => {
    res.sendStatus(500)
})
app.get('/502', (req, res) => {
    res.sendStatus(502)
})
app.get('/408', (req, res) => {
    res.sendStatus(408)
})
app.get('/404', (req, res) => {
    res.sendStatus(404)
})
app.get('/401', (req, res) => {
    res.sendStatus(401)
})