const express = require('express')
const Route = express.Router()
const companyRouter = require('./company')
const officeRouter = require('./office.js')

Route
    .use('/company', companyRouter)
    .use('/office', officeRouter)

module.exports = Route