module.exports.index = function (application, req, res) {
    const connection = application.config.dbConnection();
    const noticiaModel = new application.app.models.NoticiasDAO(connection);

    noticiaModel.get5UltimasNoticias(function (error, result) {
        console.log(result);
        res.render("home/index", {noticias : result});
    });
}