const express = require('express')
const Route = express.Router()

const { getCompany, deleteCompany, insertCompany } = require ('../controllers/company')

Route 
    .get('/', getCompany)
    .delete('/:companyId', deleteCompany)
    .post('/', insertCompany)
module.exports = Route