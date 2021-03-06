const officeModel = require('../models/office')
const miscHelper = require('../helpers')
const moment = require("moment");
const uuid = require ('uuid/v4')
require('dotenv/config')
module.exports = {
    getOffice: async ( request, response) => {
        try {
            const id =  request.params.companyId
            const result = await officeModel.getOffice(id)
            miscHelper.response(response, 200, result)
        } 
        catch (error) {
            response.json({message: 'get data error'})
        }
    },

    deleteOffice: async (request, response) => {
        try {
            const officeId = request.params.officeId
            const result = await officeModel.deleteOffice(officeId)
            miscHelper.response(response, 200, result)
            }
        catch (error) {
            response.json({message: 'delete error'})
        }
    },

    insertOffice: async (request, response) => {
        try {
            let id = uuid()
            const date = request.body.start_date
            const start_date = moment(new Date(date)).format('YYYY-MM-DD');
            const data = {
                id,
                id_company: request.body.id_company,
                name : request.body.name,
                longitude: request.body.longitude,
                latitude: request.body.latitude,
                start_date: start_date,
                date_added: new Date ()
            }
        const result = await officeModel.insertOffice(data)
        miscHelper.response(response, 200, result)
        }
        catch (error) {
            response.json({message: 'insert data error'})
        }
    }
    }
