const http = require('http');

const server = http.createServer( function(req, res){
    let categoria = req.url;
    if(categoria == '/tecnologia'){
        res.end('<HTML><body>Noticiais de Tecnologia</body></HTML>');
    } else if(categoria == '/moda'){
        res.end('<HTML><body>Noticias de Moda</body></HTML>');
    } else if(categoria == '/beleza'){
        res.end('<HTML><body>Noticias de Beleza</body></HTML>');
    } else  {
        res.end('<HTML><body>Prtal de Noticiais</body></HTML>');
    }
});

server.listen(3000);