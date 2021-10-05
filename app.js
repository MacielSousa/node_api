const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("<html><body>Portal de Noticias</body></html>");
});

app.get('/tecnologia', function(req, res){
    res.end('<HTML><body>Noticiais de Tecnologia</body></HTML>');
});

app.get('/moda', function(req, res){
    res.end('<HTML><body>Noticias de Moda</body></HTML>');
});

app.get('/beleza', function(req, res){
    res.end('<HTML><body>Noticias de Beleza</body></HTML>');
});

app.listen(3000, function() {
    console.log("Servidor rodando com express");
});