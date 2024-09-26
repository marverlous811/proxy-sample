const express = require('express')
const app = express()

const http = require('http')
const port = parseInt(process.env.PORT || '8080')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/webhook', (req, res) => {
  console.log(req.body)
  res.send({ status: 'ok', data: { ...req.body } })
})

app.get('/ping', (req, res) => {
  console.log('pong')
  res.send({ status: 'pong' })
})

var httpServer = http.createServer(app)

httpServer.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
