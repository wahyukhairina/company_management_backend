const express = require('express')
const Route = express.Router()

const { getCompany, deleteCompany, insertCompany, getCompanyDetails } = require ('../controllers/company')

Route 
    .get('/', getCompany)
    .get('/:companyId', getCompanyDetails)
    .delete('/:companyId', deleteCompany)
    .post('/', insertCompany)
module.exports = Route