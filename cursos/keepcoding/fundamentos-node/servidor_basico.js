//declaramos una variable http que llama al modulo http que se encarga de las peticiones por este protocolo
var http = require("http");

/*
creamos un servidor con la variable http en el mismo especificamos que tendra una funcion que cada vez que 
se realize una peticion http llame a la funcion con los parametros request y response
*/
var server = http.createServer(function (request, response) {
  //creamos la cabezera de la respuesta
  response.writeHead(200, { "content-type": "text/plain" });
  response.end("Wake up, Neo 2....\n Follow the rabbit\n");
});

server.listen(3000, "127.0.0.1");
console.log("Servidor corriendo en http://127.0.0.1:3000/");
