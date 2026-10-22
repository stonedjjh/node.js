# Trabajar con módulos Node.js

Un paquete en Node.js consta de uno o más módulos. El archivo fundamental para gestionar estos paquetes es el `package.json`, el cual describe los detalles del módulo. Si este archivo no existe, Node.js asume por defecto que el punto de entrada es un archivo llamado `index.js`.

## El archivo package.json

Este archivo contiene metadatos cruciales para la identificación y funcionamiento del módulo:

- **Identificador único:** Se forma mediante los campos `name` y `version` (ejemplo: `today-1.0.0`).
- **Campo principal (main):** Especifica la ruta al script principal de la aplicación si no es el valor por defecto.
- **Licencia:** Indica los derechos de uso del módulo.

## Importación con la función require

Para importar módulos se utiliza la función `require`, la cual asume automáticamente la extensión `.js`.

- **Funcionamiento:** Crea un objeto JavaScript que representa la instancia del módulo importado.
- **Búsqueda de archivos:** Al requerir un directorio, Node.js busca un archivo con el mismo nombre; si no lo encuentra, busca un archivo `index.js` dentro de dicho directorio.

## Exportación de funciones y propiedades

Cada módulo de Node.js cuenta con un objeto de exportación implícito llamado `exports`.

- **Hacer disponible el código:** Para que una función o valor sea accesible desde el exterior, se debe añadir como una propiedad al objeto `exports`.
- **Ejemplo de propiedad:** Se puede asignar una función anónima a una propiedad (ej. `exports.getDate`) para que pueda ser invocada tras la importación.

## Acceso a propiedades exportadas

Una vez importado el módulo bajo una variable (ej. `const today = require('./today')`), se accede a sus funciones o valores mediante la notación de punto:

- **Instancia:** La variable representa la instancia del módulo.
- **Acceso:** `today.DayOfWeek` permite recuperar la propiedad que fue exportada originalmente.
