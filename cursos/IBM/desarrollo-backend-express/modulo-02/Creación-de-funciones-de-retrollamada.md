# Creación de funciones de retrollamada

Node.js, como framework asíncrono, utiliza extensamente las funciones de devolución de llamada (callbacks) para retornar resultados a la función que realiza la llamada original.

## Convención de "Error-First Callback"

En el SDK de Node.js, los módulos siguen una convención específica donde el **primer parámetro** de una función de devolución de llamada es siempre un objeto de error.

- Si el error está definido, la función debe gestionarlo y realizar la limpieza de recursos (red o base de datos).
- Si el error es `null` o no está definido, la función procede a examinar y procesar el resultado de la operación.

## Vinculación entre Módulos y Aplicación Principal

Cuando una aplicación llama a una función de un módulo que a su vez realiza una solicitud HTTP, se generan dos niveles de callbacks para mantener la naturaleza no bloqueante:

1. **Callback del Módulo:** Gestiona la respuesta HTTP cruda (eventos `data` y `end`) proveniente del servidor remoto.
2. **Callback de la Aplicación:** Recibe el resultado ya procesado desde el módulo para su uso final.

### El flujo de comunicación

Dado que Node.js devuelve el control inmediatamente después de enviar una solicitud, la única forma de pasar datos desde un módulo hacia la aplicación principal cuando llega la respuesta es mediante la **invocación de callbacks en cadena**.

## Ejemplo de implementación técnica

### En la Aplicación Principal

La aplicación proporciona una función anónima que define cómo procesar el dato final (ej. la temperatura).

```javascript
const weather = require("./weatherModule");

// Se pasa una función callback como argumento
weather.current("KSFO", (err, temp_f) => {
  if (err) {
    console.error("Error al obtener clima:", err);
    return;
  }
  console.log(`La lectura del tiempo actual es: ${temp_f} grados.`);
});
```

### En el Módulo Personalizado

El módulo recibe la referencia de la función de la aplicación (usualmente llamada resultcallback) y la ejecuta cuando los datos están listos.

```JavaScript
const http = require('http');

module.exports.current = function (location, resultcallback) {
    const options = { /* configuración de la petición */ };

    const req = http.request(options, (res) => {
        let body = '';
        res.on('data', (chunk) => { body += chunk; });

        res.on('end', () => {
            // Se procesa la información y se envía al callback de la aplicación
            const temp_f = parseTemperature(body);
            resultcallback(null, temp_f); // Éxito: error es null
        });
    });

    req.on('error', (err) => {
        resultcallback(err); // Fallo: se pasa el objeto de error
    });

    req.end();
};
```

### Resumen de aprendizaje

- **Convención de parámetros**: El error siempre es el primer argumento.

- **Pasaje de referencias**: La aplicación principal pasa su lógica de procesamiento al módulo como una variable de función.

- **Encadenamiento**: Una función callback invocando a otra es la técnica fundamental para comunicar capas en operaciones asíncronas.
