var app = require('./config/server');

// Com isso sobe o servidor
app.listen(3000, function(){
	console.log("Servidor ON!");
});