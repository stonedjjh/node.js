# E/S asíncrona con programación de devolución de llamada

Las operaciones de red en Node.js se ejecutan de forma **asíncrona y no bloqueante**. Esto evita que la aplicación desperdicie tiempo de procesamiento esperando una respuesta del servidor. En su lugar, el flujo continúa y se utiliza una **función de devolución de llamada (callback)** para gestionar el resultado una vez que la operación se completa.

## El proceso de solicitud HTTP

1. **Llamada inicial:** La aplicación invoca `http.request()`.
2. **Retorno inmediato:** Node.js devuelve un resultado instantáneo indicando que la solicitud se envió con éxito, sin esperar la respuesta del servidor remoto.
3. **Respuesta del servidor:** Cuando llegan los datos del servidor remoto, Node.js ejecuta la función callback definida.

### Gestión de eventos en la respuesta

La función de devolución de llamada debe gestionar eventos específicos del objeto de respuesta utilizando el método `object.on()`:

- **'data'**: Se emite cada vez que se recibe un fragmento de datos.
- **'end'**: Se emite cuando la respuesta ha finalizado por completo.
- **'error'**: Se emite si la solicitud falla.

## Ejemplos de código prácticos

### 1. Servidor básico con Callback

Este ejemplo muestra cómo el servidor usa una función callback (`requestListener`) para manejar cada petición entrante.

```javascript
const http = require("http");

// Función callback que gestiona la solicitud
const requestListener = (req, res) => {
  res.writeHead(200);
  res.end("Respuesta del servidor asíncrono");
};

const server = http.createServer(requestListener);
server.listen(8080, () => {
  console.log("Servidor ejecutándose en el puerto 8080");
});
```

### 2. Solicitud HTTP (Cliente) con gestión de eventos

Este código ilustra cómo realizar una petición a un servidor externo (como el Servicio Meteorológico mencionado) y manejar los datos por partes.

```JavaScript
const http = require('http');

const options = {
    hostname: '[www.google.com](https://www.google.com)',
    path: '/',
    method: 'GET'
};

// Iniciamos la solicitud
const req = http.request(options, (res) => {
    let body = '';

    // Evento 'data': se ejecuta cada vez que llega un trozo de datos
    res.on('data', (chunk) => {
        body += chunk;
    });

    // Evento 'end': se ejecuta cuando ya no hay más datos
    res.on('end', () => {
        console.log('Cuerpo de la respuesta recibido con éxito.');
        console.log(body);
    });
});

// Evento 'error': gestión de fallos en la red
req.on('error', (e) => {
    console.error(`Problema con la solicitud: ${e.message}`);
});

// Finalizar la solicitud explícitamente
req.end();
```

### Conceptos clave aprendidos

- **No bloqueante**: Las operaciones de red permiten que el servidor siga procesando otras tareas.

- **Callback**: Es la función que se "llama de vuelta" cuando el servidor remoto responde.

- **Eventos**: Los objetos como ClientRequest y la respuesta del servidor emiten señales (data, end, error) que debemos escuchar para controlar el flujo de información.
