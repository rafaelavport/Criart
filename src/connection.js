const mysql = require ('mysql2/promise')

async function connect(){
const connection = await mysql.createConnection({
    host: 'mysql.infocimol.com.br',
    port: 3308, 
    user: 'infocimol05',
    password: 'criart123',
    database: 'Criart'
})
return connection
}

module.exports = {connect}