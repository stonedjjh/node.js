# Importar y requerir

En Node.js, los módulos son archivos que contienen código JavaScript relacionado y encapsulado para un propósito específico. Estos pueden ser un único archivo o una colección de archivos y carpetas denominada paquete.

## Especificaciones de Módulos

Las especificaciones son los estándares utilizados para crear paquetes en Node.js. Las más comunes son:

- **CommonJS:** Es la especificación predeterminada en Node.js.
- **Módulos ES (ESM):** Se habilitan cambiando la extensión del archivo a `.mjs` o configurando el paquete.

## Diferencias entre require() e import()

| Característica  | require() (CommonJS)                                                                  | import (Módulos ES)                                                |
| :-------------- | :------------------------------------------------------------------------------------ | :----------------------------------------------------------------- |
| **Ubicación**   | Puede llamarse en cualquier parte del archivo (incluso en funciones o condicionales). | Solo se puede llamar al principio del archivo.                     |
| **Vínculo**     | Dinámico (los errores se identifican en tiempo de ejecución).                         | Estático (los errores de enlace se identifican en la compilación). |
| **Naturaleza**  | Sincrónica (los módulos se cargan y procesan uno a la vez).                           | Asíncrona (los módulos pueden procesarse simultáneamente).         |
| **Rendimiento** | Más lento en aplicaciones a gran escala.                                              | Más rápido en aplicaciones con cientos de módulos.                 |

## Sintaxis de Exportación e Importación

### CommonJS (archivo message.js)

Para exportar código en CommonJS se utiliza `module.exports`:

```javascript
module.exports = "Hello programmers";
```

Para importarlo en la aplicación principal:

```JavaScript
const msg = require('./message.js');
console.log(msg);
```

### Módulos ES (archivo module.mjs)

Para exportar se utiliza la palabra clave `export`:

```JavaScript
const a = 1;
export { a as miValor };
```

Para importar el módulo:

```JavaScript
import { miValor } from './module.mjs';
```
