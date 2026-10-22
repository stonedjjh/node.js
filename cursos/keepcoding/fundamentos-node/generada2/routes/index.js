var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  //pasamos variables al renderizado de la pagina como plantilla ejs
  //let valor = Math.floor(Math.random() * 10);
  res.render("index", {
    title: "Express Creado por Daniel Jiménez",
    parrafo:
      "<p>Esto es un parrafo que usaremos para comprobar la inyeccion de html</p>",
    condicion: {
      valor: Math.floor(Math.random() * 10),
      /*para poder usar la variable valor debemos vincularla(ligarla) a traves de una funcion
      ya que si usamos la variable no la reconocera y si usamos this estamos haciendo 
      referencia al objeto global y no a la variable valor
      estado: this.valor % 2 === 0 hace referencia a la variable valor que no esta definida
      */
      estado: function () {
        return this.valor % 2 === 0;
      },
    },
    users: [
      { name: "Daniel" },
      { name: "Adan" },
      { name: "Yesenia" },
      { name: "Omer" },
    ],
  });
});

module.exports = router;
