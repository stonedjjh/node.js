# Enrutamiento, middleware y plantillas

El enrutamiento y el middleware son los pilares que permiten a Express gestionar solicitudes de manera organizada, mientras que las plantillas facilitan la creación de contenido dinámico desde el servidor.

## Enrutamiento en Express

El enrutamiento asocia solicitudes HTTP (GET, POST, PUT, DELETE) con funciones específicas. Se puede manejar de dos formas:

1. **Nivel de Aplicación**: Se usa `app.get()` o `app.post()` directamente. Es ideal para aplicaciones pequeñas con pocos puntos finales.
2. **Nivel de Router**: Se utiliza la clase `express.Router()` para ramificar el manejo de consultas. Esto mejora el mantenimiento cuando hay muchas rutas, permitiendo agruparlas (por ejemplo, un router para `/user` y otro para `/item`).

---

## Middleware: El "Guardián" de la Aplicación

El middleware son funciones que tienen acceso al objeto de solicitud (`req`), al de respuesta (`res`) y a la siguiente función (`next`) en el ciclo de solicitud-respuesta.

Existen cinco tipos principales de middleware:

1. **Nivel de aplicación**: Vinculado a `app.use()`. Todas las solicitudes pasan por aquí. Es ideal para autenticación general.
2. **Nivel de router**: Vinculado a una instancia de `express.Router()`. Solo afecta a rutas específicas (ej. solo a `/user`).
3. **Gestión de errores**: Se define con cuatro argumentos `(err, req, res, next)`. Captura y maneja fallos en la aplicación.
4. **Integrado**: Funciones incorporadas en Express, como `express.static()` para servir archivos (HTML, imágenes) o `express.json()` para analizar JSON.
5. **De terceros**: Paquetes instalados vía **npm** (ej. `cookie-parser`).

---

## Representación de Plantillas (Templating)

Es la capacidad del servidor para rellenar contenido dinámico dentro de una estructura HTML o JSX antes de enviarla al navegador.

- **Motor de visualización (View Engine)**: Se encarga de transformar las vistas en HTML. Un ejemplo es `express-react-views`.
- **Proceso**:

1. Se define la carpeta donde están las vistas (ej. `myviews`).
2. El motor busca el archivo (ej. `index.jsx`).
3. Se pasan datos (como el nombre de un usuario) a la plantilla.
4. El servidor genera el HTML final con los datos integrados.

---

## Ejemplo de integración de código

Basado en la lógica del video para un middleware de autenticación y manejo de rutas:

```javascript
const express = require("express");
const app = express();

// Middleware a nivel de aplicación (El "Guardián")
app.use((req, res, next) => {
  if (req.query.password === "pwd123") {
    console.log("Acceso concedido a las: " + new Date());
    next(); // Pasa a la siguiente función
  } else {
    res.status(402).send("El usuario no puede iniciar sesión");
  }
});

// Uso de enrutadores para organizar
const userRouter = express.Router();
userRouter.get("/about", (req, res) => {
  res.send("Perfil del usuario");
});

app.use("/user", userRouter);

// Middleware integrado para archivos estáticos
app.use(express.static("cad220_staticfiles"));

app.listen(8080);
```

## Resumen de aprendizaje

- Los enrutadores permiten segmentar la lógica de la aplicación por recursos.

- El middleware puede encadenarse; el orden de ejecución depende de cómo se declaren con .use().

- El parámetro next() es fundamental para evitar que la solicitud se quede "colgada".

- Las plantillas permiten que el servidor responda con páginas personalizadas para cada usuario.
