const express = require("express");
// se importa la libreria para la administración del token
const jsonwebtoken = require("jsonwebtoken");

// Aunque aqui esta harcodeado la clave esta debe traerse de una variable de entorno
// o un repositorio de secretos
const JWT_SECRET = "aVeryVerySecretString";

const myapp = express();
myapp.use(express.json());

// se agregó la url para el manejo de inicio de sesión
myapp.post("/signin", (req, res) => {
  const { uname, pwd } = req.body;

  if (uname === "user" && pwd === "password") {
    return res.json({
      token: jsonwebtoken.sign({ user: "user" }, JWT_SECRET),
    });
  }
  return res
    .status(401)
    .json({ message: "Login failed. Incorrect username or password" })
});


myapp.get("/employees", (req, res) => {
  let tkn = req.header('Authorization');

  if (!tkn) return
  res.status(401).send("No token");

  if (tkn.startsWith('Bearer')) {
    tokenValue = tkn.slice(7, tkn.length).trimLeft();
  }

  try {
    const verificationStatus = jsonwebtoken.verify(tokenValue, "aVeryVerySecretString");
    if (verificationStatus.user === "user") {
      return res.status(200).json({ message: "Access Successful to Employee Endpoint" });
    } else {
      return res.status(401).json({ message: "Please login to access this resource" });
    }
  } catch (err) {
    return res.status(401).json({ message: "Please login to access this resource" });
  }
});

myapp.listen(5000, () => {
  console.log("API Server is localhost:5000");
});
