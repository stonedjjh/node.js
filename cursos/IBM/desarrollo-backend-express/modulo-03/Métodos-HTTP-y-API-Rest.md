# Métodos HTTP y API Rest

> **Nota de crédito y descargo de responsabilidad:** Este documento es un compendio estructurado de conceptos elaborado a partir del material de lectura del curso "Desarrollo de aplicaciones back-end con Node.js y Express" de IBM. Los autores originales del contenido son Rajashree Patil y Sapthashree K S. Las explicaciones y definiciones se proporcionan únicamente con fines educativos y de consulta personal.

---

## 1. Fundamentos de la Arquitectura Cliente-Servidor en la Web

Internet opera bajo un modelo cliente-servidor donde la comunicación y transferencia de datos se realiza principalmente a través del protocolo **HTTP** (Hypertext Transfer Protocol). En el año 2000, se definió un conjunto de directrices de diseño para esta arquitectura denominadas **API REST** (*Representational State Transfer* o Transferencia de Estado Representacional).

### Estructura de la Comunicación HTTP

* **Objeto de Solicitud (Request):**
  * **URL:** Compuesta por el protocolo (ej. `https`), nombre de host (ej. `api.myapp.com`), ruta (ej. `/users`) y cadena de consulta (`?id=123`).
  * **Encabezado (Headers):** Metadatos del cliente y de la petición (agente de usuario, tipo de contenido aceptado, etc.).
  * **Cuerpo (Body):** Los datos enviados al servidor (común en solicitudes POST, PUT o PATCH).

* **Objeto de Respuesta (Response):**
  * **Encabezado (Headers):** Metadatos de la respuesta (marca de tiempo, caché, tipo de contenido).
  * **Cuerpo (Body):** Los datos solicitados o devueltos (comúnmente en formato JSON).
  * **Código de Estado (Status Code):** Indica el resultado de la operación.

---

## 2. Códigos de Estado HTTP

Las respuestas del servidor se categorizan según rangos numéricos que indican su resultado:

| Rango de Código | Categoría | Significado |
|---|---|---|
| **200 - 299** | Éxito (Success) | La solicitud fue recibida, entendida y procesada con éxito (Ej. `200 OK`, `201 Created`, `204 No Content`). |
| **300 - 399** | Redirección | Se requieren acciones adicionales para completar la solicitud; el recurso se ha trasladado (Ej. `301 Moved Permanently`). |
| **400 - 499** | Error del Cliente | La solicitud contiene sintaxis incorrecta o no puede ser procesada por el servidor (Ej. `400 Bad Request`, `401 Unauthorized`, `404 Not Found`). |
| **500 - 599** | Error del Servidor | El servidor falló al intentar procesar una solicitud aparentemente válida (Ej. `500 Internal Server Error`). |

---

## 3. Requisitos para una API RESTful

Para que una interfaz de programación de aplicaciones (API) sea considerada verdaderamente **RESTful**, debe cumplir con los siguientes principios básicos:

1. **Arquitectura Cliente-Servidor:** Separación clara entre la interfaz de usuario (cliente) y la lógica de datos (servidor).
2. **Sin estado (Stateless):** Cada solicitud del cliente al servidor debe contener toda la información necesaria para entender y ejecutar la petición. El servidor no almacena sesiones del estado de la aplicación.
3. **Capacidad de almacenamiento en caché (Cacheable):** Las respuestas deben definirse explícitamente como almacenables o no en caché para mejorar el rendimiento del lado del cliente.
4. **Interfaz Uniforme (Uniform Interface):** Interfaz estándar que separa los recursos en el servidor de la representación que se envía al cliente (comúnmente en JSON).
5. **Sistema por Capas (Layered System):** La arquitectura puede estar compuesta por capas intermedias (servidores proxy, balanceadores, middleware) sin que el cliente note la diferencia.
6. **Código bajo Demanda (Opcional):** Capacidad de enviar código ejecutable al cliente (como scripts) para su ejecución temporal.

---

## 4. Buenas Prácticas en el Diseño de URLs RESTful

### Estructura Basada en Recursos (Sustantivos)
Las rutas deben describir el recurso al que se accede utilizando sustantivos, evitando verbos de acción.

| Acción deseada | Endpoint No RESTful (Verbo) | Endpoint RESTful (Sustantivo) |
|---|---|---|
| Obtener usuario 123 | `GET /getUser/123` | `GET /users/123` |
| Crear un usuario | `POST /addUser` | `POST /users` |
| Eliminar usuario 123 | `GET /removeUser/123` | `DELETE /users/123` |

### Formato de URLs

* **Relación Jerárquica:** Utilice la barra `/` para estructurar directorios y relaciones de pertenencia (ej. `GET /users/123/orders/45`).
* **Evite barras finales:** No finalice la URL con `/` (ej. use `/users`, no `/users/`).
* **Use guiones y minúsculas:** Prefiera el uso de guiones en lugar de camelCase o guiones bajos (ej. `/my-resource`, en lugar de `/myResource` o `/my_resource`).
* **Sin extensiones:** No utilice puntos `.` para indicar formatos en la URL (ej. evite `/users.json`).

---

## 5. Glosario de Términos

### Conceptos del Protocolo e Infraestructura

* **Servicio:** Componente de software dentro de una aplicación que cumple una función específica procesando datos de entrada y generando un resultado.
* **HTTP:** Protocolo de red estructurado cliente-servidor utilizado para el intercambio de datos y recursos en la web.
* **API:** Interfaz de programación de aplicaciones; conjunto de reglas que permite la comunicación entre dos servicios informáticos independientes.
* **Recurso:** Objeto fundamental expuesto por una API RESTful (generalmente en formato JSON o XML) con datos asociados y operaciones permitidas.
* **Ruta:** Combinación de un método HTTP (como GET o POST) y el endpoint que apunta a un recurso.
* **Punto final (Endpoint):** Ubicación exacta en el servidor de un recurso al que se accede mediante una URI/URL.
* **Middleware:** Software intermedio que asiste la comunicación, formateo, seguridad o enrutamiento entre el servidor y el cliente.

### Métodos HTTP y Propiedades

* **GET:** Solicita una representación del recurso especificado. Es seguro y de solo lectura; nunca debe modificar datos.
* **POST:** Envía información para crear un nuevo recurso en el servidor. Debe responder idealmente con un estado `201 Created`.
* **PUT:** Reemplaza por completo el recurso existente o lo crea si no existe. Es idempotente.
* **PATCH:** Aplica modificaciones parciales a un recurso existente.
* **DELETE:** Elimina el recurso identificado. Es idempotente.
* **Idempotente:** Propiedad por la cual realizar múltiples solicitudes idénticas produce el mismo efecto en el servidor que realizar una sola. Los métodos `PUT` y `DELETE` son idempotentes.
* **Parámetro de ruta:** Variables pasadas dentro de la URL separadas por barras (ej. `/users/{id}`).
* **Parámetro de consulta (Query param):** Parámetros opcionales estructurados en pares clave-valor al final de la URL seguidos por `?` y separados por `&` (ej. `/users?role=admin`).
* **Parámetro de encabezado:** Parámetros con metadatos adicionales de control enviados directamente en el header HTTP por el cliente.
