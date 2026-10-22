# Promesas

Una promesa es un objeto devuelto por un método asíncrono que representa el resultado eventual de una operación que requiere tiempo y podría bloquear recursos. Son fundamentales para gestionar solicitudes de API, operaciones de entrada/salida (E/S) y cualquier tarea de larga duración en Node.js.

## Creación de una promesa

Para crear una promesa, se utiliza el constructor `new Promise`, que toma una función con dos parámetros: `resolve` y `reject`. La función `resolve` se invoca cuando la operación asíncrona se completa con éxito, y la función `reject` se invoca cuando falla.

```JS
// Creating a new Promise object and assigning it to the variable myPromise
const myPromise = new Promise((resolve, reject) => {
 // Simulating a condition with a boolean variable 'success'
 let success = true;

 // If the condition is true, call resolve to mark the promise as fulfilled
 if (success) {
  resolve("The operation was successful!");
 } else {
  // If the condition is false, call reject to mark the promise as rejected
  reject("The operation failed!");
 }
});
```

## Estados de una Promesa

Toda promesa transita por tres estados posibles:

- **Pendiente (Pending):** Es el estado inicial tras la creación del objeto. La promesa permanece aquí hasta que la operación se completa o falla.
- **Resuelta (Fulfilled/Resolved):** La operación se completó con éxito.
- **Rechazada (Rejected):** Ocurrió un error que interrumpió la operación.

## Uso de Promesas con Métodos Asíncronos

Las promesas permiten estructurar el código de manera que se defina qué hacer en caso de éxito o de fallo sin bloquear el hilo principal de ejecución.

### Consumo de Promesas con Axios

`axios` es un paquete popular en el ecosistema de Node.js utilizado para realizar solicitudes HTTP que devuelve objetos de promesa. Para interactuar con estos objetos, se utilizan métodos específicos:

- **.then():** Se invoca automáticamente cuando la promesa se resuelve satisfactoriamente.
- **.catch():** Se ejecuta cuando la promesa es rechazada debido a un error (como una URL inválida).

### Ejemplo de implementación con Axios

```javascript
const axios = require("axios");

// Se genera una promesa en estado pendiente
const url = "[https://api.ejemplo.com/datos](https://api.ejemplo.com/datos)";

axios
  .get(url)
  .then((response) => {
    // Manejo de la promesa resuelta
    console.log("Datos recibidos:", response.data);
  })
  .catch((error) => {
    // Manejo de la promesa rechazada
    console.error("Error en la solicitud:", error.message);
  });
```

### Resumen de aprendizaje

- Las promesas son objetos que manejan resultados de métodos asíncronos.

- El estado inicial siempre es pendiente.

- Paquetes como axios facilitan la creación y gestión de promesas para solicitudes HTTP.

- Se pueden crear promesas personalizadas cuando se sabe que una operación (como leer un archivo) podría bloquear el sistema.
