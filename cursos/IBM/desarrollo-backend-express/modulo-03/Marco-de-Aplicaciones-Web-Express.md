# Marco de Aplicaciones Web Express

Express es un marco de aplicaciones web basado en el entorno de ejecución Node.js que abstrae detalles de bajo nivel, permitiendo organizar aplicaciones de manera más estructurada y rápida. Es la base de muchos otros marcos modernos.

## Propósitos Principales de Express

Express se utiliza principalmente para dos objetivos fundamentales:

### 1. Creación de APIs

Configura una interfaz HTTP para interactuar con capas de datos.

- **Formato**: Los datos se devuelven al cliente generalmente en formato **JSON**.
- **Método res.json**: Se utiliza para enviar la respuesta al cliente y especificar automáticamente el tipo de contenido. También realiza la conversión de objetos JavaScript a formato JSON.

### 2. Renderización del Lado del Servidor (SSR)

Express utiliza plantillas dinámicas junto con los datos del cliente para generar contenido en tiempo real.

- **Proceso**: El servidor escribe dinámicamente el HTML, CSS y JavaScript.
- **Método res.render**: Es el encargado de combinar la plantilla con los datos para enviar el resultado final al navegador.

## Flujo de Trabajo con Express (5 Pasos)

Para poner en marcha una aplicación con Express, se siguen estos pasos esenciales:

1. **Declarar la dependencia**: Incluir Express en el archivo de manifiesto `package.json`.
2. **Instalar módulos**: Ejecutar `npm install` para descargar los paquetes necesarios.
3. **Importar y crear la app**: Importar el módulo en el código y crear una instancia de la aplicación Express.
4. **Definir rutas**: Crear controladores de rutas (gestores de peticiones).
5. **Iniciar el servidor**: Poner a escuchar al servidor en un puerto específico.

---

## El archivo package.json y npm

El archivo **package.json** es el manifiesto del proyecto y contiene:

- **name**: Nombre del módulo.
- **version**: Versión actual del proyecto.
- **description**: Propósito del módulo.
- **main**: El script que sirve como punto de entrada (ej. `app.js`).
- **dependencies**: Lista de módulos necesarios y sus versiones.

### Instalación con npm

Al ejecutar `npm install` sin parámetros, npm escanea el `package.json` y descarga los módulos faltantes en la carpeta `node_modules`.

## Resumen de aprendizaje

- Express facilita la gestión de middlewares y métodos HTTP (GET, POST, etc.).
- Permite manejar múltiples versiones del mismo módulo en diferentes proyectos gracias al directorio local `node_modules`.
- A diferencia de `http.createServer` de Node.js puro, Express utiliza una clase de aplicación que mapea rutas de forma más sencilla y legible.
