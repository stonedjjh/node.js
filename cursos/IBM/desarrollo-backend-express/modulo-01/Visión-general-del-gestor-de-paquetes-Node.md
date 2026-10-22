# Visión general del gestor de paquetes Node

Un administrador de paquetes es un conjunto de herramientas diseñado para gestionar módulos y paquetes que contienen dependencias (código reutilizable como bibliotecas). Su función principal es automatizar la búsqueda, instalación, actualización y eliminación de estos componentes, garantizando que el software cuente con lo necesario para ejecutarse correctamente sin intervención manual constante.

## NPM (Node Package Manager)

Es el gestor por defecto de Node.js y cumple dos funciones críticas:

- **CLI (Interfaz de Línea de Comandos):** Permite a los desarrolladores interactuar con el sistema para publicar o descargar paquetes.
- **Repositorio en línea:** Una base de datos global de paquetes binarios de JavaScript y sus versiones.

## El archivo package.json

Es un archivo obligatorio ubicado en la raíz del proyecto. NPM utiliza sus metadatos (en formato clave-valor) para identificar el proyecto y sus dependencias. Los campos mínimos requeridos son:

- **Nombre del proyecto.**
- **Versión del proyecto.**

## Instalación Local vs. Global

| Tipo de Instalación | Comando                   | Uso y Alcance                                                                                                                                                               |
| :------------------ | :------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Local**           | `npm install <nombre>`    | Es el comportamiento por defecto. Instala el paquete en la carpeta `node_modules` del directorio actual. Solo la aplicación de ese directorio puede usarlo.                 |
| **Global**          | `npm install -g <nombre>` | Instala el paquete en el sistema. Todas las aplicaciones de la máquina pueden acceder a él. Debe usarse con precaución para evitar conflictos de versiones entre proyectos. |

En resumen, NPM facilita la gestión de dependencias mediante el uso de metadatos en el archivo `package.json` y ofrece flexibilidad a través de instalaciones locales para proyectos específicos o globales para herramientas compartidas en todo el sistema.
