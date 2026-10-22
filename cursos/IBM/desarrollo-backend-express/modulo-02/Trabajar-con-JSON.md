# Trabajar con JSON

JSON (JavaScript Object Notation) es el formato estándar para el intercambio de datos en las API. Es la representación estándar de los objetos nativos de JavaScript y Node.js tiene la capacidad de manejarlo con gran facilidad.

## Estructura de JSON

Un objeto JSON consta de pares **atributo-valor**. Por ejemplo:

- **Atributo**: "Empresa" | **Valor**: "IBM"
- **Atributo**: "País" | **Valor**: "EE. UU."
- **Atributo**: "Sede central" | **Valor**: "Armonk, Nueva York"

## Métodos fundamentales en Node.js

Existen dos métodos cruciales para manipular datos JSON:

1. **JSON.parse()**: Se utiliza para convertir una cadena (string) con formato JSON en un objeto JavaScript utilizable.
2. **JSON.stringify()**: Realiza la operación inversa, convirtiendo un objeto JavaScript en una cadena JSON.

### Ejemplo práctico: Uso de API

JSON se utiliza frecuentemente para consumir servicios web. Un ejemplo común es consultar un punto final (endpoint) para obtener datos dinámicos, como el número de astronautas en la Estación Espacial Internacional (ISS).

## Resumen de aprendizaje

- Node.js procesa datos JSON de forma nativa y sencilla.
- Para analizar una cadena de un mensaje HTTP, se debe usar `JSON.parse`.
- Para enviar un objeto a través de una red como una cadena, se utiliza `JSON.stringify`.
