const connection = require('../config/mysql')

module.exports = {
    getOffice: (id) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM office where id_company = '${id}'`, (error, result) => {
                if (error) reject (new Error(error))
                console.log(result, 'result')
                resolve(result)
            })
        })
    },
    
    deleteOffice: (officeId) => {
        return new Promise ((resolve, reject) => {
            connection.query('DELETE FROM office WHERE id = ?', officeId, (error) => {
                if(error) reject(new Error(error))
                connection.query(`SELECT * from office`, (error, result) => {
                    if(error) reject (new Error (error))
                    
                    console.log('result', result)
                    resolve(result)
                })
            })
        })
    },

    insertOffice: (data) => {
        return new Promise ((resolve, reject) => {
            connection.query('INSERT INTO office SET ?', data, (error) => {
                if(error) reject (new Error(error))
                connection.query('SELECT * FROM office', (error, result) => {
                    if(error) reject (new Error(error))
                    resolve (result)
                })
            })
        })
    }
}