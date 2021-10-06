const mysql = require('mysql');
module.exports = function () {
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'esqueci',
        database: 'portal_noticias'
    });
}