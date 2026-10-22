//importamos el modulo http
var http = require("http");

//creamos un servidor
http
  .createServer(function (req, res) {
    //definimos el encabezado de la respuesta
    res.writeHead(200, { "Content-Type": "text/html" });
    //enviamos la respuesta
    res.end("Hello World!");
  })
  //definimos el puerto de escucha
  .listen(8080);
