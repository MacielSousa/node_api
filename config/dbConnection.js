const mysql = require('mysql');



const connMySQL = function () {
    console.log('Conexão com o bd foi estabelecida');
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'esqueci',
        database: 'portal_noticias'
    });
}

module.exports = function () {
    console.log('O autoload carregou o modulo de conexão com bd');
    return connMySQL;
}