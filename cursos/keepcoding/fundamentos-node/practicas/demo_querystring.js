var http = require("http");
var url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var q = url.parse(req.url, true).query;
    var txt = `el año es: ${q.year} y el mes es: ${q.month}`;
    txt = Buffer.from(txt, "utf-8").toString();
    res.end(txt);
  })
  .listen(8080);
