module.exports = function(application){
    application.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia");
    });
    application.post('/noticias/salvar', function(req, res){
        const noticia = req.body;

        //Conexão
        //Model

        //SalvarNoticias

        const connection = application.config.dbConnection();
        const noticiasModel = application.app.models.noticiasModel;

        noticiasModel.salvarNoticia(noticia, connection, function(error, result){
            res.redirect('/noticias');
        });
    });
}