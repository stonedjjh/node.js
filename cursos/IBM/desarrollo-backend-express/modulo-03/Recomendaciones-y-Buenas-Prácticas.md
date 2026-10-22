# Recomendaciones y Buenas Prácticas para Express

> **Nota de crédito y descargo de responsabilidad:** Este documento recopila recomendaciones de diseño y buenas prácticas recomendadas por el curso "Desarrollo de aplicaciones back-end con Node.js y Express" de IBM, complementado con estándares de desarrollo para la estructuración de proyectos con Express. Todo el contenido se comparte exclusivamente con fines educativos y de consulta personal.

---

## 1. Organización del Proyecto (Estructura de Carpetas)

Express no impone una estructura de directorios predefinida como otros marcos (tales como Django, .NET o Ruby on Rails). Sin embargo, establecer una estructura por adelantado evita dificultades de mantenimiento a medida que la aplicación crece.

### Estructura para Aplicaciones Web Completas

```text
Project/
│
├── node_modules/     # Módulos y dependencias de la aplicación (generado al correr npm install)
├── config/           # Conexión a bases de datos, variables de entorno, claves API y secretos
├── models/           # Modelos de datos para la aplicación (definidos mediante un ORM u ODM)
├── routes/           # Rutas segmentadas de la aplicación divididas por recursos lógicos
├── views/            # Archivos de plantilla (HTML, CSS y JS dinámicos que se devuelven al cliente)
├── public/           # Contenido estático del cliente (imágenes, CSS y JS en subcarpetas)
│
├── app.js            # Archivo principal de configuración de la aplicación
├── routes.js         # Ubicación centralizada que importa y unifica todas las rutas para app.js
└── package.json      # Metadatos del proyecto y administración de dependencias
```

### Estructura para APIs REST (Sin Renderizado de Servidor)

Si se está construyendo únicamente una API, se omiten los directorios de vistas (`views`) y contenido estático (`public`):

```text
Project/
│
├── node_modules/
├── config/
├── models/
├── routes/
│
├── app.js
├── routes.js
└── package.json
```

---

## 2. Buenas Prácticas de Desarrollo en Express

### Convenciones de Nombres y Estilo (Casing)
* **Nombres de archivos:** Use nombres de archivos en minúscula y separados por guiones (ej. `employee-router.js`).
* **Variables:** Use minúsculas en formato `camelCase` (ej. `const employeeData = ...`).
* **Módulos npm:** Se nombran en minúscula separados con guiones. Al importarlos con `require`, asígnelos a variables en `camelCase` (ej. `const expressSession = require('express-session')`).

### Manejo de Rutas y Métodos en APIs REST
* **Identificación mediante Sustantivos:** Use siempre sustantivos en singular o plural como recursos en la URL en vez de verbos (ej. `/employees` o `/employees/:id`).
* **Uso correcto de códigos de estado:**
  * **2xx (Éxito):** Todo funcionó correctamente (ej. `200 OK` o `201 Created`).
  * **3xx (Redirección):** El recurso ha sido movido.
  * **4xx (Error del Cliente):** Problemas en la petición (ej. `400 Bad Request` o `401 Unauthorized`).
  * **5xx (Error del Servidor):** Algo falló del lado de la API.
* **Autenticación Apátrida (Stateless):** Las APIs REST deben ser stateless, por lo que se recomienda el uso de autenticación sin estado mediante Tokens Web JSON (JWT) almacenando la sesión en el lado del cliente.

### Pruebas e Integración
* **Pruebas de caja negra:** Pruebe las respuestas HTTP y el comportamiento general del sistema sin mockear dependencias internas ni examinar la estructura del código.
* **SuperTest y Mocha:** Utilice `mocha` junto con el módulo `supertest` para lanzar peticiones HTTP y testear de forma automatizada los endpoints REST.

### Inicialización y dependencias (npm)
* Use `npm init` al inicializar cualquier proyecto Node.js.
* Al instalar dependencias con `npm install`, emplee los atributos `--save` o `--save-dev` para asegurar la portabilidad del entorno en otras plataformas.
* **Nunca** suba la carpeta `node_modules/` al repositorio Git.

### Documentación de la API
Es fundamental proporcionar una documentación adecuada para que otros desarrolladores puedan integrarse con la API. Se recomiendan las siguientes herramientas de código abierto:
* **Swagger:** Encontrado en [swagger.io](https://swagger.io).
* **API Blueprint:** Encontrado en [apiblueprint.org](https://apiblueprint.org).
