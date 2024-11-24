const express = require('express')
const cors = require('cors')
const app = express()

const http = require('http')
const port = parseInt(process.env.PORT || '8080')

const SEC = 1000
const MINUTE = 60 * SEC
const HOUR = 60 * MINUTE

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.post('/webhook', (req, res) => {
  console.log(req.body)
  res.send({ status: 'ok' })
})

app.post('/metrics', (req, res) => {
  console.log(req.body.ts)
  res.send({ status: 'ok' })
})

app.get('/ping', async (req, res) => {
  res.set('Connection', 'close')
  res.send({ status: 'pong' })
})

app.get('/api/ping', (req, res) => {
  res.set('Connection', 'close')
  res.send({ status: 'pong' })
})

var httpServer = http.createServer(app)

httpServer.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
