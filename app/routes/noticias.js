module.exports = function(app) {

    app.get('/noticias', function(req, res){
        const mysql = require('mysql');
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'esqueci',
            database: 'portal_noticias'
        });

        connection.query('select * from noticias', function(error, result){
            res.render("noticias/noticias",{noticias : result});
        });
    });
    
}