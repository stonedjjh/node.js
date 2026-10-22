# Promesas, async/await y peticiones axios en Node.js y Express

La programación asincrónica es esencial en Node.js y Express para crear aplicaciones web responsivas y eficientes, evitando que el servidor se detenga mientras espera operaciones externas como lecturas de archivos o peticiones a bases de datos.

## Conceptos Fundamentales de las Promesas

Una **Promesa** es un objeto que representa el resultado final (éxito o fracaso) de una operación asincrónica.

### Estados de una Promesa

- **Pendiente (Pending):** Estado inicial.
- **Cumplida (Fulfilled):** Operación completada satisfactoriamente.
- **Rechazada (Rejected):** La operación falló.

### Creación y Encadenamiento

Para crear una promesa se utiliza el constructor `new Promise(resolve, reject)`. El encadenamiento se logra mediante los métodos `.then()` para el éxito y `.catch()` para gestionar errores.

## Async / Await: Azúcar Sintáctico

La sintaxis `async/await` es una forma más moderna y legible de trabajar con promesas. Hace que el código asincrónico se lea de forma lineal, similar al código sincrónico.

### Ventajas principales:

- **Lectura clara:** El flujo es más fácil de seguir que las cadenas de `.then()`.
- **Gestión de errores:** Permite usar bloques estándar `try...catch`.
- **Depuración:** Facilita el seguimiento de errores al no tener funciones anidadas profundas.

### Ejemplo de código con Async/Await:

```javascript
async function obtenerDatos() {
  try {
    const resultado = await operacionAsincrona();
    console.log("Éxito:", resultado);
  } catch (error) {
    console.error("Error detectado:", error);
  }
}
```

## Axios: Cliente HTTP basado en Promesas

Axios es una biblioteca para realizar solicitudes HTTP (GET, POST, etc.) tanto en el navegador como en Node.js.

**Características clave**:

- **Transformación automática**: Convierte los datos de JSON automáticamente.

- **Interceptores**: Permite modificar solicitudes o respuestas antes de que se procesen.

- **Soporte**: Funciona perfectamente con la sintaxis async/await.

Ejemplo Práctico: GET y POST con Axios

```JavaScript
const axios = require('axios');

// Ejemplo GET con Async/Await
async function getUsuarios() {
    try {
        const respuesta = await axios.get('[https://api.ejemplo.com/users](https://api.ejemplo.com/users)');
        console.log(respuesta.data);
    } catch (err) {
        console.error(err.message);
    }
}

// Ejemplo POST enviando datos
async function crearUsuario() {
    const nuevoUsuario = { nombre: 'Juan', rol: 'Admin' };
    try {
        const res = await axios.post('[https://api.ejemplo.com/users](https://api.ejemplo.com/users)', nuevoUsuario);
        console.log('Usuario creado:', res.data);
    } catch (err) {
        console.error('Fallo al crear usuario:', err.message);
    }
}
```

## Resumen de aprendizaje

- La programación asincrónica mejora el rendimiento y la experiencia del usuario.

- Async/Await detiene la ejecución de la función hasta que la promesa se resuelve o rechaza.

- Axios simplifica la comunicación con APIs REST y gestiona la conversión de datos JSON de forma nativa.
