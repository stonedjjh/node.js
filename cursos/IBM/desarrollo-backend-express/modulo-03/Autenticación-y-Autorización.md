# Autenticación y Autorización en Node.js

> **Nota de crédito y descargo de responsabilidad:** Este documento es un resumen educativo elaborado a partir del material de lectura del curso "Desarrollo de aplicaciones back-end con Node.js y Express" de IBM. Los autores originales del contenido son Rajashree Patil y Sapthashree K S. Las explicaciones y ejemplos se proporcionan únicamente con fines educativos y de consulta personal.

---

## 1. Definiciones fundamentales

* **Autenticación:** El proceso de confirmar la identidad de un usuario mediante credenciales (validar quién dice ser). Garantiza que solo las personas autorizadas accedan al sistema y es responsabilidad del backend.
* **Autorización:** El proceso de validar a qué recursos específicos del sistema puede acceder un usuario una vez que ya ha sido autenticado.

---

## 2. Métodos de Autenticación

### A. Autenticación basada en sesión (Session-based)
Es el método clásico. El servidor mantiene un registro activo del estado del usuario.

1. El usuario envía sus credenciales.
2. El servidor valida las credenciales contra la base de datos.
3. El servidor crea una sesión con un identificador de sesión único (encriptado) y la guarda en la base de datos.
4. El identificador de sesión se envía al navegador y se almacena en una cookie.
5. Cada solicitud del cliente incluye la cookie para que el servidor identifique la sesión.
6. Al cerrar sesión o expirar, el ID se elimina del navegador y de la base de datos.

#### Ejemplo básico en Express (express-session)

```javascript
const express = require('express');
const session = require('express-session');
const app = express();

// Configuración del middleware de sesión
app.use(session({
  secret: 'secret-key', // Reemplazar por una clave secreta fuerte en producción
  resave: false,        // No guardar la sesión si no hay modificaciones
  saveUninitialized: true, // Guardar sesiones nuevas pero no modificadas
  cookie: { secure: false } // Usar true en producción con HTTPS
}));

// Endpoint de Login
app.post('/login', (req, res) => {
  // Verificación simulada de credenciales
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    req.session.user = username; // Guardar en la sesión
    res.send('Login exitoso');
  } else {
    res.status(401).send('Credenciales inválidas');
  }
});

// Endpoint protegido
app.get('/dashboard', (req, res) => {
  if (req.session.user) {
    res.send(`Bienvenido al panel, ${req.session.user}`);
  } else {
    res.status(401).send('Por favor, inicie sesión');
  }
});
```

---

### B. Autenticación basada en tokens (Token-based / JWT)
Es un método apátrida (stateless). El servidor no guarda sesiones; el cliente almacena su propio token y lo presenta en cada solicitud.

1. **Autenticación:** El usuario provee credenciales y obtiene un token de acceso firmado por el servidor.
2. **Autorización:** El cliente envía este token (normalmente en el encabezado `Authorization` como `Bearer <token>`) en cada petición HTTP. El servidor valida la firma del token para otorgar acceso sin necesidad de consultar una base de datos de sesiones.

#### Estructura de un JWT (JSON Web Token)
Consta de tres partes separadas por puntos (`.`):
* **Encabezado (Header):** Indica el tipo de token y el algoritmo de firma.
* **Carga útil (Payload):** Contiene los datos del usuario (claims) como permisos, roles y fecha de expiración.
* **Firma (Signature):** Creada a partir del encabezado, la carga útil y una clave secreta para verificar la integridad del token.

#### Ejemplo básico en Express (jsonwebtoken)

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const secretKey = 'your-secret-key'; // Reemplazar por una clave fuerte

// Endpoint de Login y generación del JWT
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Simulación de validación
  if (username === 'admin' && password === 'admin') {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Credenciales inválidas');
  }
});

// Endpoint protegido y verificación de JWT
app.get('/dashboard', (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Formato Bearer <token>

  if (!token) return res.status(401).send('Acceso denegado');

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(403).send('Token inválido o expirado');
    res.send(`Bienvenido al panel, ${decoded.username}`);
  });
});
```

---

### C. Autenticación sin contraseña (Passwordless)
El usuario no requiere una contraseña tradicional. En su lugar, demuestra su identidad a través de un factor que posee o controla (datos biométricos, código de un solo uso por SMS/correo, o enlace mágico).

* Se basa en criptografía de clave pública y clave privada.
* Al registrarse, el dispositivo del usuario genera un par de claves. La clave pública se guarda en el servidor de la aplicación y la clave privada permanece segura en el dispositivo del usuario.
* Para iniciar sesión, el servidor genera un reto (desafío) encriptado con la clave pública que solo puede ser descifrado por la clave privada del usuario (usando un sensor de huella, enlace por correo o SMS).

#### Ejemplo conceptual en Express

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const users = {}; // Almacenamiento temporal en memoria

// Endpoint para solicitar acceso mediante código enviado por correo
app.post('/request-access', (req, res) => {
  const { email } = req.body;
  const code = Math.floor(100000 + Math.random() * 900000).toString(); // Código de 6 dígitos
  users[email] = code; // Guardar temporalmente en el servidor
  
  // Aquí se enviaría el correo utilizando nodemailer u otro servicio
  console.log(`Código enviado a ${email}: ${code}`);
  res.send('Código de verificación enviado');
});

// Endpoint para verificar el código
app.post('/verify-code', (req, res) => {
  const { email, code } = req.body;
  if (users[email] && users[email] === code) {
    delete users[email]; // Limpiar código tras verificación
    res.send('Acceso concedido');
  } else {
    res.status(401).send('Código incorrecto o no solicitado');
  }
});
```
