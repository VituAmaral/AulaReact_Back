const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: '10.107.144.32',
    port: 3306,
    user: 'root',
    password: 'bcd127',
    database: 'seriesapi'
})

module.exports = conexao