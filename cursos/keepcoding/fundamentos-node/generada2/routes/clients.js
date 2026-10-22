"use strict";

//creamos un objeto de tipo express
var express = require("express");
//creamos un objeto de tipo router
var router = express.Router();

//creamos un middleware
router.use(function (req, res, next) {
  console.log("middleware de clientes");

  //un error comun es responder y llamar a next() al mismo tiempo
  //res.send("middleware de clientes");
  next();
});

//ejemplo de uso de ruta con query parameters
router.get("/?", function (req, res, next) {
  console.log(`req.quey,  ${req.query}`);
  res.send("respuesta a cliente este si sirve aqui juju ");
});

//ejemplo de ruta get con paramtero
router.get("/:id", function (req, res, next) {
  console.log(req.params);
  res.send(`recibido parametro ${req.params.id}`);
  //res.send("recibido parametro" + req.params.id);
});

//ejemplo de ruta post con parametro body
router.post("/", function (req, res, next) {
  console.log(":req body:", req.body);
  res.json({ recibido: req.body.num });
});

module.exports = router;
