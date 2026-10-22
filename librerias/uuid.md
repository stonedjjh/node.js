# Librería: uuid

![Scope](https://img.shields.io/badge/Scope-dependencies-brightgreen?style=flat-square)
![Tipo](https://img.shields.io/badge/Tipo-Librer%C3%ADa%20de%20C%C3%B3digo-blue?style=flat-square)
![NPM](https://img.shields.io/badge/npm-uuid-cb3837?style=flat-square)
![Alternativa](https://img.shields.io/badge/Alternativa-crypto.randomUUID()-lightgrey?style=flat-square)

| Metadato | Detalle |
| :--- | :--- |
| **Nombre** | `uuid` (Universally Unique Identifier) |
| **Clasificación** | `dependencies` (Producción) |
| **Instalación habitual** | `pnpm add uuid` / `npm i uuid` |
| **Consumo en código** | `const { v4: uuidv4 } = require('uuid');` (CJS) |
| **Alternativa Nativa** | `crypto.randomUUID()` (Node.js 14.17+ / 16+) |

---

## ¿Qué es y para qué sirve?

**`uuid`** es una de las bibliotecas más populares del ecosistema Node/JS para generar identificadores únicos universales de 128 bits.

Su variante más utilizada es la **versión 4 (UUID v4)**, que genera cadenas alfanuméricas pseudoaleatorias con una probabilidad de colisión prácticamente nula (ejemplo: `9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d`).

Se utiliza principalmente para:
- Asignar claves primarias o IDs a entidades en memoria o bases de datos sin depender del autoincrementable del motor.
- Generar tokens de sesión, IDs de transacciones o identificadores de peticiones (Correlation IDs).

---

## Uso básico en CommonJS

```javascript
const { v4: uuidv4 } = require('uuid');

const id = uuidv4();
console.log(id); // ej: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed"
```

---

## Alternativa Nativa en Node.js (`crypto.randomUUID`)

A partir de Node.js v14.17 y consolidado en v16+, Node incluye de forma nativa la API criptográfica para generar UUIDs versión 4 sin instalar paquetes de terceros:

```javascript
const { randomUUID } = require('crypto');

const id = randomUUID();
console.log(id); // Genera exactamente el mismo formato estándar UUID v4
```

> [!NOTE]
> **Ventajas de la opción nativa:**
> - Cero dependencias adicionales en `node_modules`.
> - Implementación a nivel de C++ en el núcleo de Node (rendimiento óptimo).
> - Compatible con la Web Crypto API de los navegadores modernos (`crypto.randomUUID()`).
