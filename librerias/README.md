# Carpeta: Librerías y Bibliotecas (Runtime & Code)

![Directorio](https://img.shields.io/badge/Directorio-Librer%C3%ADas%20%26%20Bibliotecas-blue?style=flat-square)
![Ambiente](https://img.shields.io/badge/Ambiente-Node.js-339933?style=flat-square)

Este directorio está dedicado exclusivamente a **librerías y bibliotecas de código que se importan directamente en la lógica de la aplicación** (mediante `import` en ESM o `require` en CommonJS).

> [!TIP]
> **Frontera de responsabilidades:**
> - Si es una biblioteca que consume tu código de negocio (ej. `express`, `lodash`, `bcrypt`, `axios`), se documenta en esta carpeta.
> - Si es un ejecutable de entorno, CLI, linter o vigilante de archivos (ej. `nodemon`, `prettier`, `eslint`), se documenta en [utilidades/](file:///c:/Personal%20Daniel/node.js/utilidades/README.md).

---

## Índice Clasificado de Librerías

### 1. Librerías de Producción (`dependencies`)
![Scope](https://img.shields.io/badge/Scope-dependencies-brightgreen?style=flat-square)

Paquetes necesarios para que la aplicación funcione en tiempo de ejecución en cualquier entorno.

| Librería | Propósito | Ficha |
| :--- | :--- | :--- |
| **`uuid`** | Generación de identificadores únicos universales (UUID v4). | [uuid.md](file:///c:/Personal%20Daniel/node.js/librerias/uuid.md) |
| **`get-age`** | Cálculo de edad en base a fecha de nacimiento. | [get-age.md](file:///c:/Personal%20Daniel/node.js/librerias/get-age.md) |

---

### 2. Librerías de Desarrollo (`devDependencies`)
![Scope](https://img.shields.io/badge/Scope-devDependencies-orange?style=flat-square)

Librerías de código consumidas únicamente durante pruebas unitarias, mocking o utilidades auxiliares de testing en local.

| Librería | Propósito | Ficha |
| :--- | :--- | :--- |
| *(Próximamente)* | Ej: librerías de aserciones (`supertest`, `chai`). | - |

---

### 3. Librerías Híbridas / Contextuales
![Scope](https://img.shields.io/badge/Scope-H%C3%ADbrido-purple?style=flat-square)

Librerías cuya inclusión en producción depende de la arquitectura del proyecto.

| Librería | Escenario | Ficha |
| :--- | :--- | :--- |
| *(Próximamente)* | Ej: `dotenv` (imprescindible en local, pero prescindible si las variables las inyecta Kubernetes/Docker). | - |
