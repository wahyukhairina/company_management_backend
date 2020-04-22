const companyModel = require('../models/company')
const miscHelper = require('../helpers')
const uuid = require ('uuid/v4')
require('dotenv/config')
console.log(process.env.DATABASE)
module.exports = {
    getCompany: async ( request, response) => {
        try {
            const result = await companyModel.getCompany()
            miscHelper.response(response, 200, result)
        } 
        catch (error) {
            response.json({message: 'get data error'})
        }
    },
    getCompanyDetails : async (request, response) => {
        try {
            const id = request.params.companyId 
            const result = await companyModel.getCompanyDetails(id)
           response.json(result)
        } 
        catch (error) {
            response.json({message: 'get data error'})
        }
    },

    deleteCompany: async (request, response) => {
        try {
            const companyId = request.params.companyId
            const result = await companyModel.deleteCompany(companyId)
            miscHelper.response(response, 200, result)
            }
        catch (error) {
            response.json({message: 'delete error'})
        }
    },

    insertCompany: async (request, response) => {
        try {
            let id = uuid()
            console.log('data', request.body)
            const data = {
                id,
                name : request.body.name,
                address: request.body.address,
                revenue: request.body.revenue,
                phone: request.body.phone,
                date_added: new Date ()
            }
        const result = await companyModel.insertCompany(data)
        miscHelper.response(response, 200, result)
        }
        catch (error) {
            response.json({message: 'insert data error'})
        }
    }

    }
