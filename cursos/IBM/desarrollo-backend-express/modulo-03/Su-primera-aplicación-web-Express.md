# Su primera aplicación web Express

Crear una aplicación con Express simplifica la gestión de servidores HTTP en comparación con el módulo nativo de Node.js. El proceso sigue una metodología estructurada de cinco pasos.

## Pasos para instalar y configurar Express

1. **Declarar Express como dependencia**: Se debe incluir en el archivo `package.json` del proyecto.
2. **Descargar módulos**: Ejecutar el comando `npm install` para obtener los archivos necesarios en la carpeta `node_modules`.
3. **Importar y crear la aplicación**: Se importa el módulo mediante `require('express')` y se instancia el objeto de la aplicación.
4. **Crear controladores de rutas**: Definir cómo responderá la aplicación a diferentes rutas y métodos HTTP.
5. **Iniciar el servidor**: Configurar el puerto de escucha para recibir solicitudes.

## Controladores de Rutas y Parámetros

En Express, las solicitudes se gestionan asignando métodos HTTP (como GET) a rutas específicas. Una característica potente es el uso de variables en las rutas.

- **Definición de parámetros**: Al usar `:nombre_variable` en la ruta (ej. `/temperature/:location_code`), Express captura ese valor automáticamente.
- **Acceso a datos**: Se utiliza el objeto `request.params` para extraer los valores enviados en la URL.
- **Lógica de negocio**: El valor extraído puede pasarse a funciones (como `weather.current(location)`) para obtener datos específicos.

## Ejemplo de Código Estándar

```javascript
const express = require("express");
const app = express();
const port = 8080;

// Paso 4: Controlador de rutas con parámetros
app.get("/temperature/:location_code", (req, res) => {
  const location = req.params.location_code;
  // Aquí iría la lógica para recuperar el clima
  res.send(`La ubicación solicitada es: ${location}`);
});

// Paso 5: Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
```

# Su primera aplicación web Express

Crear una aplicación con Express simplifica la gestión de servidores HTTP en comparación con el módulo nativo de Node.js. El proceso sigue una metodología estructurada de cinco pasos.

## Pasos para instalar y configurar Express

1. **Declarar Express como dependencia**: Se debe incluir en el archivo `package.json` del proyecto.
2. **Descargar módulos**: Ejecutar el comando `npm install` para obtener los archivos necesarios en la carpeta `node_modules`.
3. **Importar y crear la aplicación**: Se importa el módulo mediante `require('express')` y se instancia el objeto de la aplicación.
4. **Crear controladores de rutas**: Definir cómo responderá la aplicación a diferentes rutas y métodos HTTP.
5. **Iniciar el servidor**: Configurar el puerto de escucha para recibir solicitudes.

## Controladores de Rutas y Parámetros

En Express, las solicitudes se gestionan asignando métodos HTTP (como GET) a rutas específicas. Una característica potente es el uso de variables en las rutas.

- **Definición de parámetros**: Al usar `:nombre_variable` en la ruta (ej. `/temperature/:location_code`), Express captura ese valor automáticamente.
- **Acceso a datos**: Se utiliza el objeto `request.params` para extraer los valores enviados en la URL.
- **Lógica de negocio**: El valor extraído puede pasarse a funciones (como `weather.current(location)`) para obtener datos específicos.

## Ejemplo de Código Estándar

```javascript
const express = require("express");
const app = express();
const port = 8080;

// Paso 4: Controlador de rutas con parámetros
app.get("/temperature/:location_code", (req, res) => {
  const location = req.params.location_code;
  // Aquí iría la lógica para recuperar el clima
  res.send(`La ubicación solicitada es: ${location}`);
});

// Paso 5: Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
```

## Resumen de aprendizaje

1. La instancia de la aplicación se crea desde el marco de Express importado.

2. `app.listen` es el método que efectivamente pone el servidor en funcionamiento.

3. El uso de funciones anónimas dentro de `app.listen` permite ejecutar acciones (como logs) una vez que el servidor está listo.

4. Las rutas dinámicas permiten que una sola función gestione múltiples ubicaciones o recursos basándose en los parámetros de la URL.
