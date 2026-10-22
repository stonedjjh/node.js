# Introducción a Node.js

Node.js es un entorno de ejecución de código abierto que funciona con el motor V8 de Google Chrome. Mientras que JavaScript se utiliza tradicionalmente para la funcionalidad del lado del cliente, Node.js permite utilizar el mismo lenguaje en el lado del servidor. Su arquitectura se basa en eventos y utiliza una entrada/salida (I/O) asíncrona y sin bloqueo para mejorar el rendimiento.

## Diferencias y Flujo de Trabajo

- **Lado del cliente:** El usuario interactúa con una interfaz (HTML/CSS) que activa lógica empresarial en JavaScript para tareas como la validación de entradas.
- **Comunicación:** La aplicación cliente realiza llamadas a servicios web mediante HTTP utilizando cargas útiles en formato JSON.
- **Lado del servidor:** Node.js recibe estas solicitudes a través de servicios web REST, las procesa y devuelve los resultados al cliente.
- **Adopción:** Empresas de gran escala como Uber, LinkedIn, eBay y PayPal utilizan Node.js en sus entornos de producción.

## Express.js

Express.js es un marco de trabajo (framework) altamente configurable que simplifica el desarrollo en Node.js al resumir las API de nivel inferior mediante el uso de middleware y métodos de utilidad HTTP.

### Componentes clave en Express.js:

- **Público:** Carpeta para activos como imágenes, archivos CSS y scripts de Java.
- **Plantillas o Vistas:** HTML renderizado por el servidor que se envía al cliente como respuesta.
- **Rutas:** Definen los puntos finales (endpoints) que aceptan y procesan las solicitudes de los usuarios.
- **Server.js:** Archivo principal que contiene el código base de la aplicación.
- **Package.json:** Archivo de metadatos que gestiona dependencias, scripts y la configuración del proyecto.
