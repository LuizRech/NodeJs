var http =  require('http');

var server = http.createServer( function(req, res){

	if(req.url == '/games'){
		res.end("<html><body>Noticias de games</body></html>");

	}else if(req.url == '/moda'){
		res.end("<html><body>Noticias de moda</body></html>");

	}else if(req.url == '/tecnologia'){
		res.end("<html><body>Noticias de tecnologia</body></html>");

	}else{
		res.end("<html><body>Portal de noticias</body></html>");
		
	}


})

server.listen(3000);