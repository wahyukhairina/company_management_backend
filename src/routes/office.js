const express = require('express')
const Route = express.Router()

const { getOffice, deleteOffice, insertOffice } = require ('../controllers/office')

Route 
    .get('/:companyId', getOffice)
    .delete('/:officeId', deleteOffice)
    .post('/', insertOffice)
module.exports = Route