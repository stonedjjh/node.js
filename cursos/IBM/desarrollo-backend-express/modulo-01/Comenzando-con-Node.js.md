# Comenzando con Node.js

## Aplicación de pila completa:

Una aplicación de pila completa incluye los siguientes componentes:

- **El lado del cliente:** El sitio web y la aplicación móvil que son de cara al usuario.
- **El lado del servidor:** Procesa cualquier solicitud del lado del cliente y envía respuestas de vuelta al cliente. En el mundo actual, la nube aloja el servidor web, el servidor de aplicaciones y la base de datos.

## Código Abierto y Multiplataforma:

JavaScript es una opción ideal para la validación del lado del cliente de páginas HTML debido a su versatilidad y compatibilidad multiplataforma. Reconociendo su facilidad de uso, JavaScript se adaptó aún más para la codificación del lado del servidor, dando lugar a Node.js. Node.js funciona como un entorno de ejecución y, además, no requiere licencias especiales para su uso. Adicionalmente, se han desarrollado una gran cantidad de paquetes y bibliotecas para su uso con Node.js, gracias a su naturaleza de código abierto. Además, el código de Node.js puede ejecutarse sin problemas en varios sistemas operativos como Linux, Windows y Mac OSX.

## Motor V8:

Cada fragmento de código que escribes necesita ser procesado y convertido en una forma legible por máquina. En el ámbito de Node.js, el código JavaScript se ejecuta utilizando el motor V8 de Google. Reconocido por su alto rendimiento, V8 es un motor de código abierto desarrollado por Google, y está integrado en todos los navegadores Google Chrome. Navegadores modernos como Microsoft Edge utilizan el motor V8 para JavaScript, mientras que Node.js utiliza V8 en el lado del servidor.

## Impulsado por Eventos, Asincrónico, No Bloqueante, de Hilo Único:

Los procesos del servidor pueden clasificarse como “de hilo único” o “multihilo”. En un entorno de hilo único, solo se procesa un comando a la vez, mientras que en un entorno multihilo, múltiples comandos pueden procesarse simultáneamente. A pesar de ser de hilo único, Node.js sobresale en rendimiento debido a su naturaleza asincrónica y no bloqueante. Esto significa que mientras se ejecuta un proceso, el programa no necesita esperar a que termine. Node.js está impulsado por eventos, lo que significa que cuando realiza una operación de entrada/salida (I/O), como leer desde la red o acceder a una base de datos o sistema de archivos, se activa un evento. En lugar de bloquear el hilo y consumir tiempo de procesador mientras espera, Node.js reanuda las operaciones cuando se recibe la respuesta o cuando ocurre el evento correspondiente. Este comportamiento no bloqueante permite que el servidor se mantenga receptivo y maneje múltiples tareas de manera concurrente, similar a un entorno multihilo.

## Carga Útil JSON

JSON significa Notación de Objetos de JavaScript, formateada como “pares clave-valor”. La carga útil representa los datos transmitidos entre el cliente y el servidor. Cuando el cliente necesita enviar datos al servidor, lo hace en forma de un objeto JSON, como se ilustra en el siguiente ejemplo:

```json
{
  "name": "John",
  "age": "24",
  "email": "johnparker@gmail.com"
}
```

El objeto anterior es un JSON. Cuando estos datos se envían como parte de la solicitud, sus valores se pueden extraer simplemente utilizando `request.name` y así sucesivamente.

De manera similar, la respuesta también se envía como JSON. A continuación se proporciona un ejemplo:

```json
{
  "status": "ok",
  "message": "Successfully added"
}
```

## Framework Express

Mientras que Node.js proporciona paquetes para crear un servidor, el framework Express simplifica el proceso de creación de APIs y puntos finales. Un punto final de API es un punto de entrada específico para una solicitud del cliente al servidor.

## Próximos pasos

En este curso, aprenderás a realizar programación del lado del servidor con Node.js utilizando el marco Express.
