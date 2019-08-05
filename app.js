const express = require('express')
const sls = require('serverless-http')

const app = express()

app.use('/api', require('./routes/users'))

app.use('/', async (req, res, next) => {
  // qr code route here
  res.status(200).send('Hello Serverless!')
})

module.exports.server = sls(app)
