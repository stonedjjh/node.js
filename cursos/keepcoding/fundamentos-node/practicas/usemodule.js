var http = require("http");
//se llama al modulo creado que devuelve un objeto tipo Date()
var dt = require("./myfirstmodule");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("La hora y tiempo actual es: " + dt.myDateTime());
    res.end();
  })
  .listen(8080);
