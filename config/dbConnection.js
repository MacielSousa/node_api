const mysql = require('mysql');



const connMySQL = function () {
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'esqueci',
        database: 'portal_noticias'
    });
}

module.exports = function () {
    return connMySQL;
}