# Utilidad: nodemon

![Scope](https://img.shields.io/badge/Scope-devDependencies-orange?style=flat-square)
![Tipo](https://img.shields.io/badge/Tipo-Tooling%20CLI-blue?style=flat-square)
![Runtime](https://img.shields.io/badge/Runtime-Node.js-339933?style=flat-square)
![Alternativa](https://img.shields.io/badge/Alternativa-node%20--watch-lightgrey?style=flat-square)

| Metadato | Detalle |
| :--- | :--- |
| **Tipo** | Herramienta CLI / Tooling de entorno |
| **Clasificación** | `devDependencies` (Solo Desarrollo) |
| **Instalación habitual** | `pnpm add -D nodemon` / `npm i -D nodemon` |
| **Ejecución típica** | Scripts de `package.json` (`"dev": "nodemon src/app.js"`) |
| **Alternativa Nativa** | `node --watch <archivo>` (Node.js 18.11+) |

---

## ¿Qué es y para qué sirve?

**`nodemon`** es una utilidad de línea de comandos que reemplaza la ejecución estándar de `node <archivo>` durante la fase de desarrollo.

Su único propósito es **observar el sistema de archivos (file watcher)**: cada vez que guardas cambios en un archivo de tu proyecto (`.js`, `.json`, etc.), `nodemon` detiene el proceso anterior de Node y lo reinicia automáticamente en milisegundos, evitando que tengas que ir a la terminal a cancelar (`Ctrl + C`) y relanzar el script manualmente.

> [!IMPORTANT]
> **Nunca se importa en el código:** Nunca verás `import nodemon from 'nodemon'` en tu lógica de negocio. Es un ejecutable de entorno, no una librería de consumo interno.

---

## Uso en `package.json`

En tu archivo [package.json](file:///c:/Personal%20Daniel/node.js/ejercicios/node-de-cero-a-experto/02-bases/package.json), se define comúnmente dentro de la sección `"scripts"`:

```json
{
  "scripts": {
    "dev": "nodemon src/app.js",
    "start": "node src/app.js"
  }
}
```

- **`pnpm run dev`**: Usa `nodemon` para desarrollo continuo en tu máquina.
- **`pnpm start`**: Usa `node` puro para arrancar el servidor en producción sin sobrecargas de observación de archivos.

---

## Alternativa Nativa y Contexto Histórico (`node --watch`)

> [!NOTE]
> ### ¿Por qué nació `nodemon` y cuál es su estado hoy?
> Históricamente, Node.js no incluía ningún mecanismo nativo para recargar código al guardar cambios. Por casi una década, `nodemon` fue la herramienta reina indiscutible para cualquier desarrollador de Node.
>
> Sin embargo, a partir de **Node.js v18.11.0** (y completamente estable en v20+), Node introdujo la bandera nativa `--watch`:
> ```bash
> node --watch src/app.js
> ```
>
> **¿Por qué pudo haberte dado error al probar `--watch`?**
> 1. **Orden estricto de banderas:** En Node.js, las banderas del motor deben ir **antes** del archivo a ejecutar:
>    - **Correcto:** `node --watch src/app.js` (Node vigila y ejecuta `app.js`).
>    - **Error común:** `node src/app.js --watch` (Node ejecuta `app.js` y le envía `--watch` a tu archivo como argumento en `process.argv`).
> 2. **Versión de Node desactualizada:** En versiones de Node inferiores a 18.11, la bandera arroja `bad option: --watch`.

---

## Comparativa: `nodemon` vs `node --watch`

| Característica | `nodemon` | `node --watch` (Nativo) |
| :--- | :--- | :--- |
| **Instalación** | Requiere dependencias en `node_modules` | Cero dependencias (incluido en Node) |
| **Archivos de configuración** | Admite `nodemon.json` y `.nodemonignore` | Configuración básica por flags en CLI |
| **Monitoreo de extensiones** | Muy flexible (`-e js,ts,json,html`) | Vigila archivos importados automáticamente |
| **Retardo anti-rebote (`delay`)** | Soporta retrasos para no saturar al guardar | Reacciona de forma inmediata |
| **Recomendación actual** | Excelente para cursos o configuraciones avanzadas | Ideal para proyectos limpios y ligeros |

---

## ¿Por qué es una `devDependency` y cómo impacta en Producción?

### 1. En Desarrollo (Local)
Al ejecutar:
```bash
pnpm install
```
Se instalan tanto `dependencies` como `devDependencies`. `nodemon` queda disponible en `node_modules/.bin/nodemon` para tu flujo de trabajo diario.

### 2. En Producción (Servidor / Docker / CI)
En un entorno productivo real, un servidor debe ser estable y estático. No hay un desarrollador editando archivos en vivo, por lo que un vigilante de archivos no solo es innecesario, sino peligroso (consume CPU y memoria en vano).

Al compilar o desplegar la aplicación:
```bash
pnpm install --prod
# o con npm:
npm ci --omit=dev
```
El gestor de paquetes **descarta por completo a `nodemon`** y a todas las demás herramientas de desarrollo. 

**Beneficios:**
- Contenedores Docker ultraligeros.
- Menor tiempo de despliegue en la nube.
- Cero vectores de ataque o vulnerabilidades derivadas de herramientas de desarrollo en tu servidor productivo.
