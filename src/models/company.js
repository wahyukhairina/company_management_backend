const connection = require('../config/mysql')

module.exports = {
    getCompany: (id) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM company`, (error, result) => {
                if (error) reject (new Error(error))
                resolve(result)
            })
        })
    },
    getCompanyDetails: (id) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM company WHERE id ='${id}'`, (error, result) => {
                if (error) reject (new Error(error))
                resolve(result)
            })
        })
    },
    deleteCompany: (companyId) => {
        return new Promise ((resolve, reject) => {
            connection.query('DELETE FROM company WHERE id = ?', companyId, (error) => {
                if(error) reject(new Error(error))
                connection.query(`SELECT * from company`, (error, result) => {
                    if(error) reject (new Error (error))
                    
                    console.log('result', result)
                    resolve(result)
                })
            })
        })
    },

    insertCompany: (data) => {
        return new Promise ((resolve, reject) => {
            connection.query('INSERT INTO company SET ?', data, (error) => {
                if(error) reject (new Error(error))
                connection.query('SELECT * FROM company', (error, result) => {
                    if(error) reject (new Error(error))
                    resolve (result)
                })
            })
        })
    }
}