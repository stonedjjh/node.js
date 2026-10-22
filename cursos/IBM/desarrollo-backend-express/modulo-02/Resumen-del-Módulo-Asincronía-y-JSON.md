# Resumen del Módulo: Asincronía y JSON en Node.js

¡Enhorabuena! Has completado esta sección del curso. A continuación, se detallan los puntos clave aprendidos:

## Gestión de la Asincronía

- **Funciones de Devolución de Llamada (Callbacks)**: Son esenciales para manejar operaciones de red asíncronas, permitiendo que el código JavaScript continúe su ejecución sin bloquearse mientras espera una respuesta.
- **Comunicación entre Capas**: Para pasar un mensaje desde un módulo de Node.js hacia la aplicación principal tras recibir una respuesta, es necesario que una función callback invoque a otra.
- **Desafíos Técnicos**:
- Las **retrollamadas anidadas** (callback hell) dificultan la lectura y depuración del código.
- La **inversión de control** puede generar problemas de confianza y errores difíciles de detectar al integrar código de terceros.

## Herramientas Avanzadas

- **Objetos Promise**: Representan la solución más robusta para gestionar operaciones que requieren mucho tiempo (como peticiones a bases de datos o APIs) y que podrían bloquear los recursos del sistema.
- **Manipulación de JSON**: Node.js facilita el intercambio de datos mediante dos métodos fundamentales:
- **JSON.parse()**: Utilizado para analizar y convertir cadenas de texto en objetos JSON.
- **JSON.stringify()**: Utilizado para convertir objetos de JavaScript en cadenas de texto legibles o para su transmisión.

---
